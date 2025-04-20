import { getPostPaths } from '@utils/post-utils';
import { MetadataRoute } from 'next';

export const baseUrl = 'https://www.rjvelazco.com';
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Hardcoded blog posts for static export
  const postPaths = await getPostPaths();
  const blogRoutes = postPaths.map((postPath) => ({
    url: `${baseUrl}/blog/posts/${postPath.params.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Main routes
  const routes = ['', '/blog', '/portfolio', '/logs'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes];
}
