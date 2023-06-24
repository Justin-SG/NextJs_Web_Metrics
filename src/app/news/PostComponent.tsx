interface Props {
  post: Post;
}

interface Post {
  title: string;
  description: string;
  image: string;
  continent: string;
}

export default function PostComponent({ post }: Props) {
  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <div className="flex flex-row sm:block hover-img">
        <a href="#top">
          <img
            className="max-w-full w-full mx-auto"
            src={post.image}
            alt="alt title"
          />
        </a>
        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 className="text-lg font-bold leading-tight mb-2">
            <a href="#top">{post.title}</a>
          </h3>
          <p className="hidden md:block text-gray-600 leading-tight mb-1">
            {post.description}
          </p>
          <a className="text-gray-500" href="#top">
            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
            {post.continent}
          </a>
        </div>
      </div>
    </div>
  );
}
