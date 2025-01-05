import { useApi } from './api';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
}

export const useBlogPosts = () => {
  return useApi<BlogPost[]>('blog-posts');
};