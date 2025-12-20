import Link from 'next/link';
import { BlogPost, getPosts } from '@utils/post-utils';

export const metadata = {
  title: 'Blog - Rafael Velazco',
  description: 'Articles and tutorials about web development, Angular, and software engineering',
};

export default async function BlogPage() {
  const posts = await getPosts();

  // Get unique categories
  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];

  return (
    <div className="mx-auto font-sans flex flex-col gap-4 py-8 md:py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Artículos Recientes</h1>
      </div>

      <div className="flex gap-12 flex-col lg:flex-row">
        <section className="space-y-8 flex-1">
          {posts.map((post) => (
            <BlogItem key={post.slug} post={post} />
          ))}
        </section>

        {categories.length > 0 && (
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Categorías</h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="bg-muted hover:bg-muted/80 text-muted-foreground px-3 py-2 rounded-md text-sm transition-colors cursor-pointer"
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

const BlogItem = ({ post }: { post: BlogPost }) => {
  return (
    <article className="border-b border-border pb-8 last:border-b-0" key={post.slug}>
      <div className="flex items-center gap-2 mb-2">
        <time className="text-sm text-muted-foreground" dateTime={post.publishDate}>
          {new Date(post.publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        {post.category && (
          <>
            <span className="text-gray-300">•</span>
            <span className="text-sm bg-muted px-2 py-1 rounded-md text-muted-foreground">{post.category}</span>
          </>
        )}
      </div>

      <Link href={`/blog/posts/${post.slug}`}>
        <h2 className="text-xl font-bold mb-4 text-foreground hover:underline decoration-primary-500 underline-offset-4 transition-colors">
          {post.title}
        </h2>
      </Link>

      <p className="mb-4 text-muted-foreground leading-relaxed">{post.description}</p>

      <Link
        href={`/blog/posts/${post.slug}`}
        className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors"
      >
        Leer más
        <span className="material-symbol">arrow_right_alt</span>
      </Link>
    </article>
  );
};
