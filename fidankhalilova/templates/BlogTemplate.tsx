import { fetchBlogs } from "@/api/blogs";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/shared/Text/Header";

export default async function BlogTemplate() {
  const blogs = await fetchBlogs();
  return (
    <div className="mt-34 mb-10 flex flex-col gap-14 items-center justify-center min-h-screen py-2 px-4 sm:px-0">
      <div>
        <Header text="My Blog" color="#AC6891" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((blog: any) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
    </div>
  );
}
