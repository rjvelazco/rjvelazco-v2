import { Dirent } from "fs";
import { readdir, readFile } from "fs/promises";
import { join } from "path";

const POST_DIR = join(process.cwd(), "src/app/(site)/blog/posts");

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
        try {
          const filePath = join(POST_DIR, dirent.name, "page.mdx");
          const content = await readFile(filePath, "utf-8");
          
          // Extract metadata from the export statement
          const metadataMatch = content.match(/export const metadata = ({[\s\S]*?});/);
          if (metadataMatch) {
            // Parse the metadata object (this is a simple eval - in production you might want a more robust parser)
            const metadataStr = metadataMatch[1];
            const metadata = eval(`(${metadataStr})`);
            return { slug: dirent.name, ...metadata } as BlogPost;
          }
          
          return { slug: dirent.name, title: dirent.name, date: "", description: "", publishDate: "" } as BlogPost;
        } catch (error) {
          console.warn(`Error reading post ${dirent.name}:`, error);
          return { slug: dirent.name, title: dirent.name, date: "", description: "", publishDate: "" } as BlogPost;
        }
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
