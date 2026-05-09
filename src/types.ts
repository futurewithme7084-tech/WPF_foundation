export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface MediaItem {
  id: string;
  type: 'video' | 'podcast' | 'essay';
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}

export interface Magazine {
  id: string;
  title: string;
  issue: string;
  date: string;
  image: string;
  description: string;
  content: string;
}
