import fs from 'fs';
import path from 'path';

import Link from 'next/link';

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read the latest articles about web development, programming, and more.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map(post => (
            <article key={post.slug} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/blog/posts/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400">{post.title}</h2>
                <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
                <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
                <div className="mt-4">
                  <span className="inline-block text-blue-600 dark:text-blue-400">Read more →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

// MOVE TO A UTIL
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

// Function to get all blog posts
export function getAllPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', '(site)', 'blog', 'posts');
  
  try {
    // Get all directory names in the posts folder - each directory is a blog post
    const postDirectories = fs.readdirSync(postsDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    const posts = postDirectories.map(directory => {
      // Read the MDX file content
      const fullPath = path.join(postsDirectory, directory, 'page.mdx');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Extract frontmatter data using regex
      const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
      const match = frontmatterRegex.exec(fileContents);
      
      const frontMatterBlock = match ? match[1] : '';
      const frontmatter: Record<string, string> = {};
      
      // Parse frontmatter key-value pairs
      frontMatterBlock.split('\n').forEach(line => {
        const [key, ...valueArr] = line.split(': ');
        if (key && valueArr.length > 0) {
          const value = valueArr.join(': ').trim();
          frontmatter[key.trim()] = value.replace(/^"(.*)"$/, '$1');
        }
      });
      
      return {
        slug: directory,
        title: frontmatter.title || directory,
        date: frontmatter.date || 'Unknown date',
        description: frontmatter.description || '',
      };
    });
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
} 