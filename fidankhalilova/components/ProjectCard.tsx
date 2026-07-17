import { ProjectType } from "@/api/projects/types";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectImage = project.image || "";
  const sanitizedSrc = projectImage.startsWith("/")
    ? projectImage
    : `/${projectImage}`;
  return (
    <Link href={`/projects/${project._id}`}>
      <div className="p-4 border flex flex-col h-full rounded-lg shadow-sm bg-white relative ">
        <div className="relative h-80 w-full bg-[#AC6891] mb-5 overflow-hidden rounded-md border">
          <Image
            src={sanitizedSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-[#AC6891]/40 pointer-events-none" />
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
        <div className="flex-1 mb-4 overflow-hidden">
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {project.description.overview}
          </p>
        </div>
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#AC6891] text-white text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
          <div className="flex gap-3">
            <h2 className="flex items-center">
              <Heart />: {project.likes}
            </h2>
          </div>
          <h2 className="flex items-center">
            <Eye />: {project.views}
          </h2>
        </div>
      </div>
    </Link>
  );
}
