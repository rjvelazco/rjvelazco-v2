import Link from "next/link";
import { getPosts } from "@utils/post-utils";
import { ContentPlaceholder } from "@components/ui/content-placeholder";

export const metadata = {
  title: "Blog - Rafael Velazco",
  description: "Articles and tutorials about web development, Angular, and software engineering",
};

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="mx-auto font-sans flex flex-col gap-12 py-8 md:py-12">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <ContentPlaceholder type="Post" showButton={false} />
      </div>
    );
  }

  // Get unique categories
  const categories = [...new Set(posts.map(post => post.category).filter(Boolean))];

  return (
    <div className="mx-auto font-sans flex flex-col gap-4 py-8 md:py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
      </div>

      <div className="flex gap-12 flex-col lg:flex-row">
        <section className="space-y-8 flex-1">
          {posts.map((post) => (
            <article className="border-b border-gray-200 pb-8 last:border-b-0" key={post.slug}>
              <div className="flex items-center gap-2 mb-2">
                <time className="text-sm text-gray-500" dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {post.category && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                      {post.category}
                    </span>
                  </>
                )}
              </div>
              
              <Link href={`/blog/posts/${post.slug}`}>
                <h2 className="text-xl font-bold mb-4 hover:underline decoration-blue-500 underline-offset-4 transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <p className="mb-4 text-gray-600 leading-relaxed">
                {post.description}
              </p>
              
              <Link 
                href={`/blog/posts/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Read more
                <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </article>
          ))}
        </section>

        {categories.length > 0 && (
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
} 