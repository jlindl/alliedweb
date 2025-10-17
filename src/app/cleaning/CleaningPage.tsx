"use client";

import React, { useMemo, useState } from "react";
import { Header } from "../../components/Header";

export const metadata = {
  title: "News — Allied",
};

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link?: string;
  tags: string[];
};

type Props = {
  initialPosts?: Post[];
};

const SAMPLE_POSTS: Post[] = [
  {
    id: "1",
    title: "Allied expands partnerships with UK insurers",
    excerpt: "We’ve increased capacity for specialist commercial lines to better support our corporate clients.",
    date: "2025-09-01",
    tags: ["Corporate", "Partnerships"],
  },
  {
    id: "2",
    title: "Claims guidance: acting fast after a flood",
    excerpt: "Practical steps to limit damage and help a claim progress smoothly.",
    date: "2025-08-22",
    tags: ["Claims", "Advice"],
  },
  {
    id: "3",
    title: "Cyber risk trends for financial services 2025",
    excerpt: "Emerging threats and the cover firms should consider in their cyber programmes.",
    date: "2025-07-14",
    tags: ["Cyber", "Corporate"],
  },
];

export default function NewsPage({ initialPosts }: Props) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const posts = initialPosts && initialPosts.length > 0 ? initialPosts : SAMPLE_POSTS;

  const tags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags || []))), [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (selectedTag && !(p.tags || []).includes(selectedTag)) return false;
      if (query && !(p.title.toLowerCase().includes(query.toLowerCase()) || (p.excerpt || '').toLowerCase().includes(query.toLowerCase()))) return false;
      return true;
    });
  }, [query, selectedTag, posts]);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header activePath="/news" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#D4AF37]">News</h1>
          <p className="mt-2 text-sm text-zinc-300">Latest updates, guidance and insights from Allied. External feed displays below when available.</p>
        </header>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <label className="sr-only">Search posts</label>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search news" className="w-full rounded-md border border-white/10 bg-white/3 px-4 py-2 text-white placeholder:text-zinc-400" />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 flex items-center gap-3">
            <span className="text-sm text-zinc-300">Filter by tag:</span>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSelectedTag(null)} className={`px-3 py-1 rounded-full text-sm ${selectedTag === null ? 'bg-[#D4AF37] text-black' : 'bg-white/5 text-white'}`}>All</button>
              {tags.map((t) => (
                <button key={t} onClick={() => setSelectedTag(t)} className={`px-3 py-1 rounded-full text-sm ${selectedTag === t ? 'bg-[#D4AF37] text-black' : 'bg-white/5 text-white'}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((post) => {
            // derive a possible author from tags (common mapping used server-side)
            const postTags = post.tags || [];
            let author: string | undefined;
            const remainingTags: string[] = [];
            for (const t of postTags) {
              // Heuristic: treat a tag as author if it contains a space and is not a URL
              if (!author && t.includes(' ') && !t.includes('/') && t.length < 40) {
                author = t;
              } else {
                remainingTags.push(t);
              }
            }

            return (
              <article key={post.id} className="group rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-6 backdrop-blur-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">{post.title}</h2>
                    <p className="mt-3 text-sm sm:text-base text-zinc-300 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {remainingTags.map((t) => (
                        <span key={t} className="text-xs font-medium rounded-full bg-white/6 px-3 py-1 text-zinc-100/90 border border-white/6">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xs text-zinc-400">{post.date}</div>
                    {author && <div className="mt-2 text-sm text-zinc-200">By <span className="font-semibold text-white">{author}</span></div>}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href={post.link || '#'} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${post.link ? 'bg-[#D4AF37] text-black hover:brightness-95' : 'bg-white/5 text-zinc-500 cursor-not-allowed pointer-events-none'}`}>
                      Read
                      <span aria-hidden className="ml-1">→</span>
                    </a>
                    {post.link && (
                      <a href={post.link} target="_blank" rel="noreferrer" className="text-xs text-zinc-300 hover:text-zinc-100">Open in new tab</a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <div className="col-span-1 sm:col-span-2 rounded-2xl border border-white/10 p-6 text-center text-zinc-400">
              No posts match your search. When a feed is connected this area will show the latest news.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
