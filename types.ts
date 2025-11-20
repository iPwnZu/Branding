export enum LoadState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface SearchResult {
  title: string;
  uri: string;
}

export interface MapResult {
  uri: string;
  title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface TechTrend {
  title: string;
  description: string;
  sourceUrl?: string;
}

export type AspectRatio = '1:1' | '2:3' | '3:2' | '3:4' | '4:3' | '9:16' | '16:9' | '21:9';
