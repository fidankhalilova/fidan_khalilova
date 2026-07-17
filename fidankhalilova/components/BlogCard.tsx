import { BlogTypes } from "@/api/blogs/types"
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    blog: BlogTypes;
}
export default function BlogCard({ blog }: BlogCardProps) {
    const sanitizedBannerSrc = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.images[0].replace(/^\//, "")}`;
    return (
      <Link href={`/blog/${blog._id}`}>
        <div className="p-4 border flex flex-col h-full rounded-lg shadow-sm bg-white relative ">
          <div className="relative h-80 w-full bg-[#AC6891] mb-5 overflow-hidden rounded-md border">
            <Image
              src={sanitizedBannerSrc}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={true}
            ></Image>
          </div>
          <h1 className="text-2xl">{blog.title}</h1>
          <p className="line-clamp-3">{blog.content.intro}</p>
        </div>
      </Link>
    );
}