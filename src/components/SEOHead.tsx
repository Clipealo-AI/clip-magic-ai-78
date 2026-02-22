import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
}

const BASE_URL = 'https://www.clipealo-ai.com';
const DEFAULT_OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/uUehV3bYuzgNzbsXMdDHUepZq4z2/social-images/social-1770175321286-file (2).jpg';

const SEOHead = ({ title, description, ogImage, canonicalPath, type = 'website' }: SEOHeadProps) => {
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

    return () => {
      // Reset to defaults on unmount
      document.title = 'Clipealo - Clips Virales Automáticos con IA para Streamers';
    };
  }, [title, description, ogImage, canonicalPath, type]);

  return null;
};

export default SEOHead;
