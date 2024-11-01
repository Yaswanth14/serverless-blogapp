interface BlogCardProps {
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
}

export const BlogCard = ({
  title,
  content,
  authorName,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-4 border-b-2 border-slate-200 pb-4">
      <div className="flex">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} />
        </div>
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorName}
        </div>
        <div className="pl-2 font-thin text-slate-300">|</div>
        <div className="pl-2 font-thin text-slate-500 text-sms flex justify-center flex-col">
          {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-md font-thin">
        {content.length >= 100 ? content.slice(0, 100) : content}...
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
        content.length / 100
      )} minutes read`}</div>
      {/* <div className="bg-slate-200 h-1 w-full"></div> */}
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-xs text-gray-600 dark:text-gray-300">
        {name.substring(0, 2)}
      </span>
    </div>
  );
}
