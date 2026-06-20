import { useEffect } from 'react';

const SITE_NAME = 'ESPEFAWIS Global Nig Ltd';
const SITE_URL = 'https://www.espefawis.com';

interface SEOOptions {
  title: string;
  description: string;
  /** Path beginning with "/" e.g. "/about". Used for the canonical URL. */
  path: string;
  /** Absolute image URL for social sharing previews. */
  image?: string;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

/**
 * Updates the document title, meta description, canonical URL and the key
 * Open Graph / Twitter tags for the current page. Keeps per-route metadata in
 * sync for both users and search engines (Googlebot renders client JS).
 */
export function useSEO({ title, description, path, image }: SEOOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const ogImage = image || `${SITE_URL}/images/hero-main.webp`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setCanonical(url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
  }, [title, description, path, image]);
}
