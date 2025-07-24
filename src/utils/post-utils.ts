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

// Safer metadata extraction without eval()
function extractMetadata(content: string): Partial<BlogPost> {
  const metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);
  if (!metadataMatch) return {};
  
  const metadataContent = metadataMatch[1];
  const metadata: Partial<BlogPost> = {};
  
  // Extract title
  const titleMatch = metadataContent.match(/title:\s*["'`](.*?)["'`]/);
  if (titleMatch) metadata.title = titleMatch[1];
  
  // Extract description
  const descMatch = metadataContent.match(/description:\s*["'`](.*?)["'`]/);
  if (descMatch) metadata.description = descMatch[1];
  
  // Extract date
  const dateMatch = metadataContent.match(/date:\s*["'`](.*?)["'`]/);
  if (dateMatch) metadata.date = dateMatch[1];
  
  // Extract publishDate
  const publishDateMatch = metadataContent.match(/publishDate:\s*["'`](.*?)["'`]/);
  if (publishDateMatch) metadata.publishDate = publishDateMatch[1];
  
  // Extract category
  const categoryMatch = metadataContent.match(/category:\s*["'`](.*?)["'`]/);
  if (categoryMatch) metadata.category = categoryMatch[1];
  
  return metadata;
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const folders = await readdir(POST_DIR, {withFileTypes: true});
    const directories = folders.filter((dirent: Dirent) => dirent.isDirectory());

    const posts = await Promise.all(
      directories.map(async (dirent: Dirent) => {
        try {
          const filePath = join(POST_DIR, dirent.name, "page.mdx");
          const content = await readFile(filePath, "utf-8");
          
          // Extract metadata safely
          const metadata = extractMetadata(content);
          
          return { 
            slug: dirent.name, 
            title: metadata.title || dirent.name,
            date: metadata.date || "",
            description: metadata.description || "",
            publishDate: metadata.publishDate || metadata.date || "",
            category: metadata.category
          } as BlogPost;
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
