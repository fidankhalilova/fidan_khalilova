import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/shared/Text/Header";
import { fetchProjects } from "@/api/projects";

export default async function ProjectsTemplate() {
  const projects = await fetchProjects();
  return (
    <div className="mt-36 mb-20 flex flex-col gap-14 items-center justify-center min-h-screen py-2 px-4 sm:px-0">
      <div>
        <Header text="My Projects" color="#AC6891" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: any) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
