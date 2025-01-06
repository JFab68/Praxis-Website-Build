export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    title?: string;
    bio?: string;
    image?: string;
  };
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  tags: string[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    keywords?: string[];
    ogImage?: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterCard?: 'summary' | 'summary_large_image';
  };
  category: string;
  readingTime?: string;
  lastModified?: string;
  relatedPosts?: string[]; // Array of post slugs
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  featured?: boolean;
  image?: string;
}