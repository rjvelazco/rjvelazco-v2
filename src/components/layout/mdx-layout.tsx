import Link from "next/link";

interface MdxLayoutProps {
  children: React.ReactNode;
  metadata?: {
    title?: string;
    date?: string;
    description?: string;
    category?: string;
    publishDate?: string;
  };
}

export default function MdxLayout({ children, metadata }: MdxLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back to blog navigation */}
      <nav className="mb-8">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="mr-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
      </nav>

      {/* Article header with metadata */}
      {metadata && (
        <header className="mb-12 pb-8 border-b border-gray-200">
          {metadata.title && (
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {metadata.title}
            </h1>
          )}
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            {metadata.publishDate && (
              <time dateTime={metadata.publishDate}>
                {new Date(metadata.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            
            {metadata.category && (
              <>
                <span className="text-gray-300">•</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">
                  {metadata.category}
                </span>
              </>
            )}
          </div>
          
          {metadata.description && (
            <p className="text-lg text-gray-600 leading-relaxed">
              {metadata.description}
            </p>
          )}
        </header>
      )}

      {/* Article content */}
      <article className="prose prose-lg prose-gray max-w-none prose-headings:scroll-mt-20 prose-pre:bg-gray-900 prose-pre:text-gray-100">
        {children}
      </article>

      {/* Article footer with navigation back to blog */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="mr-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            More Articles
          </Link>
          
          <div className="text-sm text-gray-500">
            Thanks for reading!
          </div>
        </div>
      </footer>
    </div>
  );
}
