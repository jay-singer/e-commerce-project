import { Link, useLocation, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const blog = location.state?.ProductStore || {
    id,
    period: "June 17, 2025",
    BlogThumbnail:
      "/assets/blogImage/eb7ebb42e593ed398ce0d66312bc26e866b96247.jpg",
    blogTitle: "White Drawer unit",
    blogDescription:
      "Modern texas home is beautiful and completely kid-friendly",
  };

  return (
    <div className=" md:mt-[166px] mt-[60px] md:mb-0 mb-[60px] bg-white min-h-screen  overflow-hidden rounded-lg md:flex flex-col  justify-center items-center  ">
      {/* Back Button */}
      <div className="px-10 place-self-start">
        <Link
          to="/"
          className="flex items-center text-gray-500 hover:text-gray-700 text-sm bg-slate-300 w-fit rounded py-1 px-2 "
        >
          ← Go Back
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-8  shadow-lg rounded-lg p-6 lg:p-10  overflow-hidden  md:w-2/3">
        {/* Left: Product Image */}
        <div className="">
          <img
            src={blog.blogThumbnail}
            alt={blog.blogTitle}
            className="w-full  h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right: Product Information */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="">
            <p className="text-gray-500 mt-4 text-[14px] md:text-base">
              {blog.blogDescription}
            </p>
            <div className="flex gap-3 mt-2">
              <h1>{blog.period}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
