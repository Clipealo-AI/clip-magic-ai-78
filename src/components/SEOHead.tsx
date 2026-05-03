import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
  publishedTime?: string;
  modifiedTime?: string;
}

const BASE_URL = 'https://www.clipealo-ai.com';
const DEFAULT_OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/uUehV3bYuzgNzbsXMdDHUepZq4z2/social-images/social-1770175321286-file (2).jpg';

const SEOHead = ({ title, description, ogImage, canonicalPath, type = 'website', jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = title.includes('Clipealo') ? title : `${title} | Clipealo`;
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', ogImage || DEFAULT_OG_IMAGE);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage || DEFAULT_OG_IMAGE);
    setMeta('name', 'twitter:card', 'summary_large_image');

    if (canonicalPath) {
      const url = `${BASE_URL}${canonicalPath}`;
      setMeta('property', 'og:url', url);
      setMeta('name', 'twitter:url', url);
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    // Article meta tags
    if (publishedTime) {
      setMeta('property', 'article:published_time', publishedTime);
    }
    if (modifiedTime) {
      setMeta('property', 'article:modified_time', modifiedTime);
    }

    // JSON-LD structured data
    const jsonLdId = 'seo-json-ld';
    let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;

    const structuredData = jsonLd || {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Clipealo',
      url: BASE_URL,
      description: 'Herramienta de IA #1 en LATAM para crear clips virales de YouTube, Twitch y Kick.',
      inLanguage: 'es',
      publisher: {
        '@type': 'Organization',
        name: 'Clipealo',
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.png`,
      },
    };

    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = jsonLdId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(structuredData);

    return () => {
      document.title = 'Clipealo - Clips Virales Automáticos con IA para Streamers y Cliperos LATAM';
      const el = document.getElementById(jsonLdId);
      if (el) el.remove();
      // Clean up article meta tags
      document.querySelector('meta[property="article:published_time"]')?.remove();
      document.querySelector('meta[property="article:modified_time"]')?.remove();
    };
  }, [title, description, ogImage, canonicalPath, type, jsonLd, publishedTime, modifiedTime]);

  return null;
};

export default SEOHead;
