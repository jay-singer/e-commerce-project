import { Link } from "react-router-dom";

const BlogSection = () => {
  const products = [
    {
      title: "Studio Table",
      picture: "/assets/products/furnitureProduct/Container (1).png",
    },
    {
      title: "Modern Chair",
      picture: "/assets/products/furnitureProduct/Container (2).png",
    },
    {
      title: "Work Desk",
      picture: "/assets/products/furnitureProduct/Container (3).png",
    },
  ];
  return (
    <div className=" md:w-10/12 w-[100%]   justify-self-center pb-2 mt-3  flex flex-col items-center ">
      {/**first section */}
      <div className="flex justify-between w-[90%] justify-self-center mb-3 ">
        <span className="text-gray-700">Latest Articles</span>
        <Link
          className="flex gap-1 text-sm items-center text-navColor"
          to={`#`}
        >
          View More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
      {/** Body */}
      <div className="flex justify-evenly flex-wrap items-center gap-2 lg:gap-0 w-full ">
        {products.map((product, index) => (
          <Link
            to={"/Blog"}
            key={index}
            className=" max-w-[280px] rounded-md overflow-hidden md:shadow-[8px_10px_20px_rgba(0,0,0,0.13)] shadow-[0px_10px_20px_rgba(0,0,0,0.13)] lg:hover:scale-105 transition-all duration-300 "
          >
            <img
              className=" w-full object-center object-cover"
              src={product.picture}
              alt={product.title}
            />
            <div className=" flex flex-col gap-2 ms-1 mb-1">
              {" "}
              <p className="text-gray-800">{product.title}</p>
              <Link
                className="flex gap-1 items-center text-sm text-navColor"
                to={`Blog`}
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
