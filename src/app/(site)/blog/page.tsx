import Link from "next/link";
import { BlogPost, getPosts } from "./utils";

export const metadata = {
  title: "Blog | My Portfolio",
  description:
    "Read the latest articles about web development, programming, and more.",
};

// Author component for blog posts
const Author = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center mt-6">
    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-medium">
      {name.charAt(0)}
    </div>
    <div className="ml-3">
      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
        {name}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  </div>
);

const NoPosts = () => (
  <div className="text-center py-12">
    <p className="text-gray-600 dark:text-gray-400">No blog posts found.</p>
  </div>
);

const PostItem = ({ post }: { post: BlogPost }) => (
  <article key={post.slug} className="flex flex-col md:flex-row gap-8 group">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-3">
        <time className="text-sm text-gray-500">{post.publishDate}</time>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {post.category}
        </span>
      </div>
      <Link href={`/blog/posts/${post.slug}`} className="group-hover:underline">
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {post.description}
      </p>
      <Author name="Rafael Velazco" role="Senior Software Engineer" />
    </div>
  </article>
);

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {posts.length === 0 ? (
        <NoPosts />
      ) : (
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
