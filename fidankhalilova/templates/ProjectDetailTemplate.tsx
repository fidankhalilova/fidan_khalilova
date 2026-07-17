import { fetchProjectById } from "@/api/projects";
import Subheader from "@/components/shared/Text/Subheader";
import Image from "next/image";
import ProjectMetaData from "@/sections/projectDetail/ProjectMetaData";

interface TemplateProps
 {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailTemplate({ params }: TemplateProps) {
  
  const { id } = await params;
  
  
  const project = await fetchProjectById(id);
  const sanitizedSrc = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${project.image.replace(/^\//, "")}`;
  
  return (
    <div className="my-30 flex flex-col gap-14 items-center justify-center min-h-screen py-2 px-4 sm:px-0">
      <div>
        <div className="relative h-100 w-full bg-[#AC6891] mb-5 overflow-hidden rounded-md border">
          <Image
            src={sanitizedSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={true}
          />
        </div>
        <Subheader text={project.title} color="#AC6891" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <div className="my-3">
              <h3 className="text-[#AC6891] font-bold text-xl">Overview</h3>
              <p>{project.description.overview}</p>
            </div>
            <div className="mb-3">
              <h3 className="text-[#AC6891] font-bold text-xl">Challanges</h3>
              <p>{project.description.challenge}</p>
            </div>
            <div className="mb-3">
              <h3 className="text-[#AC6891] font-bold text-xl">Solution</h3>
              <p>{project.description.solution}</p>
            </div>
            <div>
              <h3 className="text-[#AC6891] font-bold text-xl">Outcome</h3>
              <p>{project.description.outcome}</p>
            </div>
          </div>
          <div>
            <h3 className="text-[#AC6891] font-bold text-xl mb-3">
              About Project:
            </h3>
            <ProjectMetaData
            tags={project.tags}
            technologies={project.technologies}
            likes={project.likes}
            views={project.views}
             />
          </div>
        </div>
      </div>
    </div>
  );
}
