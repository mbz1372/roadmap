export interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  status: 'not-started' | 'in-progress' | 'completed';
  children?: RoadmapItem[];
  resources?: Resource[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'article' | 'video' | 'course' | 'documentation' | 'book' | 'tool';
  isPersian?: boolean;
  isFree?: boolean;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  items: RoadmapItem[];
  totalItems?: number;
  completedItems?: number;
  estimatedTime?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: Date;
}

export interface RoadmapStats {
  totalRoadmaps: number;
  totalTopics: number;
  activeUsers: number;
}