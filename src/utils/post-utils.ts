import { Dirent } from "fs";
import { readdir } from "fs/promises";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  publishDate: string;
}

export const getPostPaths = async () => {
  const folders = await readdir('./src/app/(site)/blog/posts', { withFileTypes: true });
  const directories = folders.filter((dirent: Dirent) => dirent.isDirectory());

  return directories.map((dirent: Dirent) => ({
    params: { slug: dirent.name },
  }));
};

export async function getPosts(): Promise<BlogPost[]> {
  const slugs = await readdir('./src/app/(site)/blog/posts', { withFileTypes: true });

  if (slugs.length === 0) {
    return [];
  }

  const directories = slugs.filter((dirent: Dirent) => dirent.isDirectory());

  if (directories.length === 0) {
    return [];
  }

  const posts = await Promise.all(
    directories.map(async (dirent: Dirent) => {
      try {
        const { metadata = {} } = await import(`../app/(site)/blog/posts/${dirent.name}/page.mdx`);
        return { slug: dirent.name, ...metadata } as BlogPost;
      } catch (error) {
        console.error(`Error loading metadata for ${dirent.name}:`, error);

        return undefined;
      }
    }).filter((post) => post !== undefined)
  ) as BlogPost[];

  // Sort posts from newest to oldest
  posts.sort((a: BlogPost, b: BlogPost) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts || [];
}
