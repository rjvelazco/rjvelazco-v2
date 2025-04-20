import Link from "next/link";
import { getPosts } from "@utils/post-utils";
import { ContentPlaceholder } from "@components/ui/ContentPlaceholder";

export default async function Home() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="mx-auto font-sans flex flex-col gap-12 py-8 md:py-12">
        <ContentPlaceholder type="Post" showButton={false} />
      </div>
    );
  }

  return (
    <div className="mx-auto font-sans flex flex-col gap-12 py-8 md:py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-petrol-light">
          ARTICLES AND TUTORIALS
        </h2>
      </div>

      <div className="flex gap-12 flex-col md:flex-row">
        <section className="space-y-8 flex-1">
          {posts.map((item) => (
            <article className="border-b border-gray-200 pb-8" key={item.title}>
              <Link href={`/blog/posts/${item.slug}`}>
                <h3 className="text-xl font-bold mb-4 hover:underline decoration-petrol underline-offset-8">
                  {item.title}
                </h3>
              </Link>
              <p className="mb-4">{item.description}</p>
              <Link href={`/blog/posts/${item.slug}`}>
                <span className="text-petrol-light font-medium hover:underline">
                  Read more
                </span>
              </Link>
            </article>
          ))}
        </section>

        <section className="gap-12 justify-between">
          <div>
            <h2 className="text-xl font-semibold text-petrol mb-6">
              BROWSE BY CATEGORY
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="opacity-85 rounded-md px-3 py-1 text-sm transition-colors bg-teal-600 text-white cursor-pointer hover:opacity-100 hover:scale-105">
                Angular
              </span>
              <span className="opacity-85 rounded-md px-3 py-1 text-sm transition-colors bg-teal-600 text-white cursor-pointer hover:opacity-100 hover:scale-105">
                JavaScript
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
