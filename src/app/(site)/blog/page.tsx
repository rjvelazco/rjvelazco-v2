import Link from "next/link";
import { BlogPost, getPosts } from "./utils";

export const metadata = {
  title: "Blog | My Portfolio",
  description:
    "Read the latest articles about web development, programming, and more.",
};

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
