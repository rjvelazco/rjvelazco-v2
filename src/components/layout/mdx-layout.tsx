import Link from "next/link";
import Image from "next/image";

interface MdxLayoutProps {
  children: React.ReactNode;
  metadata: {
    title: string;
    date: string;
    description: string;
    category: string;
    publishDate: string;
  };
  image?: string;
}

export default function MdxLayout({
  children,
  metadata,
  image,
}: MdxLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Back to blog navigation */}
      <nav className="mb-8 pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Back to Blog"
        >
          <span className="material-symbols-outlined">arrow_left_alt</span>
          Volver al explorador
        </Link>
      </nav>

      <ArticleHeader metadata={metadata} image={image} />

      {/* Article content */}
      <article className="prose prose-lg prose-gray max-w-none prose-headings:scroll-mt-20 prose-pre:bg-gray-900 prose-pre:text-gray-100">
        {children}
      </article>

      {/* Article footer with navigation back to blog */}

      <ArticleFooter />
    </div>
  );
}

/**
 * Article header component
 * @param metadata - Article metadata
 * @param image - Article cover image
 * @returns Article header component
 */
const ArticleHeader = ({
  metadata,
  image,
}: {
  metadata: MdxLayoutProps["metadata"];
  image?: string;
}) => {
  return (
    <header className="mb-12 border-b border-gray-200 pb-8">
      {image && (
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
          <Image
            src={image}
            alt={metadata.title || "Article cover image"}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 896px, (min-width: 640px) 640px, 100vw"
          />
        </div>
      )}
      <h1 className="mb-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
        {metadata.title}
      </h1>
      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <time
          dateTime={metadata.publishDate}
          className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700"
        >
          {new Date(metadata.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-800 ring-1 ring-blue-100">
          {metadata.category}
        </span>

        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
          Rafael Velazco
        </span>
      </div>

      <p className="max-w-prose text-base leading-relaxed text-slate-600 sm:text-lg">
        {metadata.description}
      </p>
    </header>
  );
};

/**
 * Article footer component
 * @returns Article footer component
 */
const ArticleFooter = () => {
  return (
    <footer className="mt-14 border-t border-gray-200 pt-8 pb-10">
      <div className="rounded-2xl bg-slate-50/70 p-4 ring-1 ring-slate-200 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
            aria-label="More Articles"
          >
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Más artículos
          </Link>

          <div className="text-center text-sm text-slate-600 sm:text-right">
            <div className="font-medium text-slate-800">Gracias por leer!</div>
            <div className="mt-0.5 text-slate-600">
              ¿Quieres más artículos como este? Explora la sección de blog.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
