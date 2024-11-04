import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Anonymous"}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              publishedDate="14th Nov 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
