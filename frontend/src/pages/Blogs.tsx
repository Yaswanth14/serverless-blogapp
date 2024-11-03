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
        <div className="max-w-xl">
          <BlogCard
            authorName="Yaswanth"
            title="Check this blog is just a title of the example Blog for page created with good design"
            content="Yo boi asjlfjsdlfjdsfj dsfhdhfdjfhd sdfhhjdhfuhfusahfads Check this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for page fhdsjfhjdhfn  erhe ere dlfjsdfkjsl fdfds"
            publishedDate="14th Nov 2024"
          />
          <BlogCard
            authorName="Yaswanth"
            title="Check this blog is just a title of the example Blog for page created with good design"
            content="Yo boi asjlfjsdlfjdsfj dsfhdhfdjfhd sdfhhjdhfuhfusahfads Check this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for page fhdsjfhjdhfn  erhe ere dlfjsdfkjsl fdfds"
            publishedDate="22mins"
          />
          <BlogCard
            authorName="Yaswanth"
            title="Check this blog is just a title of the example Blog for page created with good design"
            content="Yo boi asjlfjsdlfjdsfj dsfhdhfdjfhd sdfhhjdhfuhfusahfads Check this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for page fhdsjfhjdhfn  erhe ere dlfjsdfkjsl fdfds"
            publishedDate="22mins"
          />
          <BlogCard
            authorName="Yaswanth"
            title="Check this blog is just a title of the example Blog for page created with good design"
            content="Yo boi asjlfjsdlfjdsfj dsfhdhfdjfhd sdfhhjdhfuhfusahfads Check this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for pageCheck this blog is just a title of the example Blog for page fhdsjfhjdhfn  erhe ere dlfjsdfkjsl fdfds"
            publishedDate="22mins"
          />
        </div>
      </div>
    </div>
  );
};
