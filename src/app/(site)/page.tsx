import Link from "next/link";
import { getPosts } from "@utils/post-utils";
import { ContentPlaceholder } from "@components/ui/content-placeholder";

export default async function Home() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="mx-auto flex flex-col gap-8 py-8 md:py-12">
      {/* Hero Section */}
      <section className="pl-4 pb-4 md:pb-12">
          <h1 className="text-3xl md:text-5xl leading-snug pl-2">
            Delivering value {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              beyond the code
            </span>
          </h1>
      </section>

      {/* Latest Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">Latest Articles</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <time className="text-sm text-gray-500" dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    {post.category && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </>
                    )}
                  </div>
                  
                  <Link href={`/blog/posts/${post.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  
                  <Link 
                    href={`/blog/posts/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read more
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              View all articles
              <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Fallback for no content */}
      {posts.length === 0 && (
        <section className="py-12">
          <ContentPlaceholder type="content" showButton={false} />
        </section>
      )}
    </div>
  );
}
