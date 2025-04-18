import fs from 'fs';
import { readdir } from 'fs/promises';
import { Dirent } from 'fs';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read the latest articles about web development, programming, and more.',
};

// MOVE TO A UTIL
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  publishDate: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  // Retrieve slugs from post routes
  const slugs = await readdir('./src/app/(site)/blog/posts', { withFileTypes: true });
  const directories = slugs.filter((dirent: Dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    directories.map(async (dirent: Dirent) => {
      const { metadata } = await import(`./posts/${dirent.name}/page.mdx`);
      return { slug: dirent.name, ...metadata } as BlogPost;
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a: BlogPost, b: BlogPost) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
