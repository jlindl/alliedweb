/* eslint-disable @typescript-eslint/no-explicit-any */
import { XMLParser } from 'fast-xml-parser';

export type FeedPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link?: string;
  tags: string[];
  authors?: string[];
};

async function simpleXmlToJson(xml: string) {
  const items: Array<Record<string, string | undefined>> = [];
  const itemRegex = /<item[\s\S]*?>[\s\S]*?<\/item>/gi;
  const matches = xml.match(itemRegex) || [];
  for (const m of matches) {
    const extract = (tag: string) => {
      const r = new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, 'i');
      const mm = m.match(r);
      if (mm) return mm[1].trim();
      const attrR = new RegExp(`<${tag}[^>]*href=["']([^"']+)["'][^>]*>`, 'i');
      const mm2 = m.match(attrR);
      if (mm2) return mm2[1];
      return undefined;
    };
    items.push({
      title: extract('title'),
      link: extract('link'),
      description: extract('description'),
      pubDate: extract('pubDate'),
      guid: extract('guid'),
    });
  }
  if (items.length === 0) {
    const entryRegex = /<entry[\s\S]*?>[\s\S]*?<\/entry>/gi;
    const ematches = xml.match(entryRegex) || [];
    for (const em of ematches) {
      const extract = (tag: string) => {
        const r = new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, 'i');
        const mm = em.match(r);
        if (mm) return mm[1].trim();
        const attrR = new RegExp(`<${tag}[^>]*href=["']([^"']+)["'][^>]*>`, 'i');
        const mm2 = em.match(attrR);
        if (mm2) return mm2[1];
        return undefined;
      };
      items.push({
        title: extract('title'),
        link: extract('link') || extract('link[rel="alternate"]'),
        description: extract('summary') || extract('content') || undefined,
        pubDate: extract('updated') || extract('published') || undefined,
        guid: undefined,
      });
    }
  }
  return { rss: { channel: { item: items } } };
}

// Use ISR to allow static generation but revalidate periodically.
// Set to 3600 seconds (1 hour) by default. Adjust as needed.
const RSS_FETCH_OPTIONS = { next: { revalidate: 3600 } } as const;

function resolveValue(v: unknown): string | undefined {
  if (v === undefined || v === null) return undefined;
  if (typeof v === 'string') return v.trim();
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    for (const item of v) {
      const r = resolveValue(item);
      if (r) return r;
    }
    return undefined;
  }
  if (typeof v === 'object') {
    const obj = v as Record<string, unknown>;
    const candidates = ['_text', '_cdata', '#text', 'text', '__text'];
    for (const c of candidates) {
      if (typeof obj[c] === 'string' && obj[c]) return (obj[c] as string).trim();
    }
    if (typeof obj['@_href'] === 'string' && obj['@_href']) return (obj['@_href'] as string).trim();
    if (typeof obj['@href'] === 'string' && obj['@href']) return (obj['@href'] as string).trim();
    if (typeof obj['href'] === 'string' && obj['href']) return (obj['href'] as string).trim();
    for (const key of Object.keys(obj)) {
      const r = resolveValue(obj[key]);
      if (r) return r;
    }
  }
  return undefined;
}

export async function getPostsFromFeed(url: string, limit = 20): Promise<FeedPost[]> {
  try {
    const res = await fetch(url, RSS_FETCH_OPTIONS);
    if (!res.ok) return [];
    const text = await res.text();

    let parsed: unknown = null;
    try {
      const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
      parsed = parser.parse(text);
    } catch (err) {
      void err;
      parsed = await simpleXmlToJson(text);
    }

  const p = parsed as any;
  const items = p?.rss?.channel?.item || p?.channel?.item || p?.feed?.entry || p?.entry || [];
    const arr = Array.isArray(items) ? items : [items];

    const posts = arr.slice(0, limit).map((it: unknown, idx: number) => {
      const title = resolveValue((it as Record<string, unknown>)?.title) || 'Untitled';
      let link = resolveValue((it as Record<string, unknown>)?.link);
      if (!link) {
        // find first http-like in values
        const obj = it as Record<string, unknown>;
        for (const v of Object.values(obj || {})) {
          const r = resolveValue(v);
          if (r && r.startsWith('http')) {
            link = r;
            break;
          }
        }
      }
      const excerpt = resolveValue((it as Record<string, unknown>)?.description) || resolveValue((it as Record<string, unknown>)?.summary) || '';
      const date = resolveValue((it as Record<string, unknown>)?.pubDate) || resolveValue((it as Record<string, unknown>)?.published) || '';
      const guid = resolveValue((it as Record<string, unknown>)?.guid) || link || String(idx);

      // categories
      let tags: string[] = [];
      const obj = it as Record<string, unknown>;
      const cats = obj.category || obj.categories || obj['dc:subject'];
      if (cats) {
        if (typeof cats === 'string') tags.push(cats);
        else if (Array.isArray(cats)) {
          for (const c of cats) {
            const v = resolveValue(c);
            if (v) tags.push(v);
          }
        } else {
          const v = resolveValue(cats);
          if (v) tags.push(v);
        }
      }

      // authors
  const authors: string[] = [];
      const authorsRaw = obj.authors || obj.author || obj['dc:creator'];
      if (authorsRaw) {
        if (typeof authorsRaw === 'string') authors.push(authorsRaw);
        else if (Array.isArray(authorsRaw)) {
          for (const a of authorsRaw) {
            const v = resolveValue(a);
            if (v) authors.push(v);
          }
        } else if (typeof authorsRaw === 'object') {
          const maybeAuthor = (authorsRaw as Record<string, unknown>).author || (authorsRaw as Record<string, unknown>).authors;
          if (maybeAuthor) {
            if (typeof maybeAuthor === 'string') authors.push(maybeAuthor);
            else if (Array.isArray(maybeAuthor)) {
              for (const a of maybeAuthor) {
                const v = resolveValue(a);
                if (v) authors.push(v);
              }
            } else {
              const v = resolveValue(maybeAuthor);
              if (v) authors.push(v);
            }
          } else {
            const v = resolveValue(authorsRaw);
            if (v) authors.push(v);
          }
        }
      }

      tags = Array.from(new Set(tags.concat(authors))).filter(Boolean) as string[];

      return {
        id: guid,
        title: title,
        excerpt: excerpt,
        date,
        link: link || undefined,
        tags,
        authors: authors.length ? authors : undefined,
      } as FeedPost;
    });

    return posts;
  } catch (e) {
  // log error via logger (gated)
  try { const logger = (await import('./logger')).default; logger.error('getPostsFromFeed error', e); } catch { /* ignore */ }
    return [];
  }
}
