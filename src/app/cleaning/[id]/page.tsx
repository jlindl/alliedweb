import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsFromFeed } from '../../../lib/rss';
import { Header } from '../../../components/Header';

const RSS_URL = 'https://www.insuranceage.co.uk/feeds/rss/category/insurer';

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const posts = await getPostsFromFeed(RSS_URL, 50);
  const id = decodeURIComponent(params.id);
  const post = posts.find((p) => p.id === id || encodeURIComponent(p.id) === params.id || p.link === id);
  if (!post) return notFound();

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.02] to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-slow-delay" />
      </div>

      <Header activePath="/cleaning" />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <article className="article-container backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Back button */}
          <Link href="/cleaning" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#D4AF37] mb-8 transition-colors duration-300 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          {/* Article header */}
          <header className="mb-8 pb-8 border-b border-white/10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-[#FFD700] to-[#D4AF37] tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
              <time className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.date}
              </time>
              {post.authors && post.authors.length > 0 && (
                <>
                  <span className="text-white/40">•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.authors.join(', ')}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-white/80 leading-relaxed space-y-4">
              {post.excerpt}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <a 
              href={post.link} 
              target="_blank" 
              rel="noreferrer noopener" 
              className="premium-button group inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-size-200 bg-pos-0 hover:bg-pos-100 text-black font-bold shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/40 transition-all duration-400"
            >
              <span className="relative z-10">Read Full Article on Insurance Age</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>

        {/* Related content suggestion */}
        <div className="mt-8 p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/30">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Stay informed with industry news</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                We curate the latest insurance industry updates to keep you informed about market trends, regulations, and innovations.
              </p>
              <Link href="/cleaning" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] font-semibold hover:text-[#FFD700] transition-colors duration-300 group">
                Browse all news articles
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Styles for this page were moved to globals.css to keep this file a Server Component */}
    </div>
  );
}
