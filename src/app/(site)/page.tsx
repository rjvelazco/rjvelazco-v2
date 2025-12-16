import Link from 'next/link';
import { getPosts } from '@utils/post-utils';
import { Badge } from '@components/ui/badge';

const NOW_MS = Date.now();

export default async function Home() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);

  const isNewPost = (publishDate: string) => {
    const publishMs = new Date(publishDate).getTime();
    if (Number.isNaN(publishMs)) return false;
    if (publishMs > NOW_MS) return false;
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    return NOW_MS - publishMs < oneWeekMs;
  };

  return (
    <div className="mx-auto flex flex-col gap-8 py-8 md:py-12">
      {/* Hero Section */}
      <section className="pl-4 pb-4 md:pb-12">
        <h1 className="text-3xl md:text-5xl leading-snug pl-2">
          Entrega valor{' '}
          <span className="bg-gradient-to-r from-petrol-light to-indigo-400 bg-clip-text text-transparent">
            más allá del código
          </span>
        </h1>
      </section>

      {/* Latest Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">Artículos Recientes</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  {isNewPost(post.publishDate) && (
                    <Badge
                      variant="blue"
                      className="absolute right-0 -top-3 -translate-x-1/2 z-10 shadow-md rounded-sm"
                      aria-label="New post"
                    >
                      NEW
                    </Badge>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <time className="text-sm text-gray-500" dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    {post.category && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs bg-petrol-soft text-petrol px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </>
                    )}
                  </div>

                  <Link href={`/blog/posts/${post.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-petrol-light transition-colors leading-tight text-foreground">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.description}</p>

                  <Link
                    href={`/blog/posts/${post.slug}`}
                    className="inline-flex items-center text-petrol-light hover:text-petrol font-medium transition-colors"
                  >
                    Leer más
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-petrol-light hover:text-petrol font-semibold transition-colors"
            >
              Ver todos los artículos
              <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
