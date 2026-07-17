export interface SkillsType {
    title: string;
    rating: number;
    iconName: string;
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  data: T;
}