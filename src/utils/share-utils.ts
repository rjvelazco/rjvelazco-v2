export type ShareUrls = {
  xUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
};

/**
 * Build share URLs for the given URL
 * @param url - The URL to build share URLs for
 * @returns Share URLs
 */
export const buildShareUrls = (url: string): ShareUrls => {
  const encodedUrl = encodeURIComponent(url);

  return {
    xUrl: `https://x.com/intent/post?text=${encodedUrl}`,
    facebookUrl: `https://www.facebook.com/share_channel/?type=reshare&source_surface=external_reshare&display=page&link=${encodedUrl}`,
    linkedinUrl: `https://www.linkedin.com/feed/?shareActive=true&shareUrl=${encodedUrl}`,
  };
};


