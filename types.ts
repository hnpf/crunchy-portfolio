
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Opinion {
  id: string;
  title: string;
  snippet: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  votes: { up: number; down: number };
  link: string;
}

export interface Photo {
  src: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface SiteSettings {
  theme: Theme;
  accentColor: string;
  radius: number;
  animationType: 'spring' | 'smooth' | 'snappy';
  searchEngine: string;
  openSearchInNewTab: boolean;
  availableSearchEngines: string[];
}
