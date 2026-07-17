import { ApiResponse, BlogTypes } from "./types";

export async function fetchBlogs(): Promise<BlogTypes[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`, {
        cache: 'no-store'
    });
    if(!res.ok) throw new Error("Failed to fetch");
    const payload: ApiResponse<BlogTypes[]> = await res.json();
    return payload.data;
}

export async function fetchBlogsById(id: string): Promise<BlogTypes> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error(`Failed to fetch project with ID: ${id}`);
    const payload: ApiResponse<BlogTypes> = await res.json();
    return payload.data;
}