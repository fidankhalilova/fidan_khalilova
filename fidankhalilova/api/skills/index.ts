import { ApiResponse, SkillsType } from "./types";

export async function fetchSkills(): Promise<SkillsType[]> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/skills`,
      {
        cache: "no-store",
      },
    );
    if(!res.ok) throw new Error("Failed to fetch!");
    const payload: ApiResponse<SkillsType[]> = await res.json();
    return payload.data;
}