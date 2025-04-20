import { Dirent } from "fs";
import { readdir } from "fs/promises";

const POST_DIR = "./src/app/(site)/blog/posts";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  publishDate: string;
}

export const getPostPaths = async () => {
  try {
    const folders = await readdir(POST_DIR, {withFileTypes: true});
    const directories = folders.filter((dirent: Dirent) => dirent.isDirectory() );
    return directories.map((dirent: Dirent) => dirent.name);
  } catch (error) {
    console.warn("Error getting post paths: ", error);
    return [];
  }
};

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const folders = await readdir(POST_DIR, {withFileTypes: true});
    const directories = folders.filter((dirent: Dirent) => dirent.isDirectory());

    const posts = await Promise.all(
      directories.map(async (dirent: Dirent) => {
        const path = `${POST_DIR}/${dirent.name}/page.mdx`;
        const { metadata = {} } = await import(path);
        return { slug: dirent.name, ...metadata } as BlogPost;
      })
    );

    // Sort posts from newest to oldest
    posts.sort( (a: BlogPost, b: BlogPost) => +new Date(b.publishDate) - +new Date(a.publishDate) );

    return posts || [];
  } catch (error) {
    console.warn("Error loading metadata for posts: ", error);

    return [];
  }
}
