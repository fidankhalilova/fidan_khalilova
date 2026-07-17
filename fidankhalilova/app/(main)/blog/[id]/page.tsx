import BlogDetailTemplate from "@/templates/BlogDetailTemplate";

interface PageProps {
    params: Promise< {id: string} >;
}

export default function BlogDetail({ params }: PageProps) {
    return <BlogDetailTemplate params={params}/>
}