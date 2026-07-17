import { fetchBlogsById } from "@/api/blogs";
import Subheader from "@/components/shared/Text/Subheader";
import Image from "next/image";

interface TemplateProps {
  params: Promise< {id: string}>;
}
export default async function BlogDetailTemplate({ params }: TemplateProps) {
  const { id } = await params;
  const blog = await fetchBlogsById(id);
  const firstImage = blog.images[0] || "";
  const sanitizedBannerSrc = firstImage.startsWith("/")
    ? firstImage
    : `/${firstImage}`;
  return (
    <div className="mt-34 mb-20 flex flex-col gap-4 sm:gap-8 items-center justify-center min-h-screen py-2 px-4 sm:px-0">
      <div className="relative h-100 w-full bg-[#AC6891] mb-5 overflow-hidden rounded-md border">
        <Image
          src={sanitizedBannerSrc}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={true}
        />
      </div>
      <Subheader text={blog.title} color="#AC6891" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="my-3">
            <h3 className="text-[#AC6891] font-bold text-xl">Introduction</h3>
            <p>{blog.content.intro}</p>
          </div>
          <div className="mb-3">
            <h3 className="text-[#AC6891] font-bold text-xl">
              Main thing I want to say...
            </h3>
            <p>{blog.content.main}</p>
          </div>
          <div className="mb-3">
            <h3 className="text-[#AC6891] font-bold text-xl">Conclusion</h3>
            <p>{blog.content.ending}</p>
          </div>
        </div>
        <div>
          <h3 className="text-[#AC6891] font-bold text-xl mb-3">About blog:</h3>
          <div className="flex items-center gap-2">
            <h4 className="text-lg mb-1">Likes: </h4>
            <p className="mb-0">{blog.likes}</p>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg mb-1">Views: </h4>
            <p className="mb-0">{blog.views}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
