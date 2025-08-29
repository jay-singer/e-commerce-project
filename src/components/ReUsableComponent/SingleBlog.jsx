import { Link } from "react-router-dom";

const SingleBlog = ({ items }) => {
  return (
    <div className="h-full w-full flex flex-col space-y-7 overflow-hidden">
      {/** top section */}
      <Link
        to={`/Blog/${items._id}`}
        state={{
          blogStore: {
            id: items._id,
            period: items.period,
            BlogThumbnail: items.blogThumbnail,
            blogTitle: items.blogTitle,
            blogDescription: items.blogDescription,
          },
        }}
        className="overflow-hidden block"
      >
        {" "}
        <img
          className=" object-center object-cover h-[320px] max-h-[350px] w-full lg:hover:rotate-[3deg] lg:hover:scale-[1.09] transition-transform duration-300 ease-in-out"
          src={items.blogThumbnail}
          alt=""
        />
      </Link>

      <div>
        <h1 className=" font-semibold text-gray-800 lg:text-[16px] text-[15px]">
          {items.blogDescription}
        </h1>
        <p className="text-gray-400">
          <span>{items.period}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
