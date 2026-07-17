import { ApiResponse, ProjectType } from "@/api/projects/types";

export async function fetchProjects(): Promise<ProjectType[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const payload: ApiResponse<ProjectType[]> = await res.json();
  return payload.data;
}

export async function fetchProjectById(id: string): Promise<ProjectType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch project with ID: ${id}`);
  }
  const payload: ApiResponse<ProjectType> = await res.json();
  return payload.data;
}
