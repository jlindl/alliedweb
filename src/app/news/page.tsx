import React from 'react';
import CleaningPage, { Post } from '../cleaning/CleaningPage';
import { getPostsFromFeed } from '../../lib/rss';

export const metadata = {
  title: 'News — Allied',
};

const RSS_URL = 'https://www.insuranceage.co.uk/feeds/rss/category/insurer';

export default async function Page() {
  const posts = await getPostsFromFeed(RSS_URL, 20);
  const mapped: Post[] = posts.map((p) => ({ id: encodeURIComponent(p.id), title: p.title, excerpt: p.excerpt, date: p.date, link: p.link, tags: p.tags }));
  return <CleaningPage initialPosts={mapped} />;
}
