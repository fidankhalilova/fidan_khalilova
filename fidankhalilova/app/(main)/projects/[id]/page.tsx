import ProjectDetailTemplate from "@/templates/ProjectDetailTemplate";

interface PageProps {
  params: Promise< { id : string } >;
}

export default function ProjectDetail({ params }: PageProps) {
  return <ProjectDetailTemplate  params={params} />;
}