import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://www.rjvelazco.com';
  const isNoindex = process.env.APP_INDEX_MODE === 'NOINDEX'

  return {
    rules: isNoindex
      ? {
          userAgent: '*',
          disallow: '/',
        }
      : {
          userAgent: '*',
          allow: '/',
        },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}