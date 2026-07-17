export interface ContentTypes {
    intro: string;
    main: string;
    ending: string;
}

export interface BlogTypes {
    _id: string;
    title: string;
    images: string[];
    content: ContentTypes;
    links: string[];
    likes: number;
    views: number;
}

export interface ApiResponse<T> {
    success: boolean;
    count: number;
    data: T;
}