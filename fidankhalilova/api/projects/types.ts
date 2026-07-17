export interface Description {
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ProjectType {
  _id: string;
  title: string;
  description: Description;
  tags: string[];
  technologies: string[];
  image: string;
  likes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  data: T;
}
