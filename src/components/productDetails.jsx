import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.ProductStore || {
    id,
    image: "/assets/products/Container (7).png",
    name: "Sample Product",
    price: "$300",
    productDesc:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    star: 4, // Default rating out of 5
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-navColor" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
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
            src={product.image}
            alt={product.name}
            className="w-full  h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right: Product Information */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-blue-600 font-semibold mt-2">
              ${product.price}
            </p>
            <p className="text-gray-500 mt-4 text-[14px] md:text-base">
              {product.productDesc}
            </p>
            <div className="flex items-center mt-4 ">
              {renderStars(product.star)}
              <span className="text-sm text-gray-500 ml-2">
                ({product.star}/5)
              </span>
            </div>
            <div className="flex gap-3 mt-2">
              <button className=" flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="gray"
                    strokeDasharray="32"
                    strokeDashoffset="32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.7s"
                      values="32;0"
                    />
                  </path>
                </svg>
              </button>
              <Link
                to={"*"}
                className=" bg-[#7AC751] flex justify-center items-center px-[3px] py-[3px] w-fit rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" />
                    <path d="M9 11V6a3 3 0 0 1 6 0v5" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4 ">
            <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm px-2 py-1 md:py-2 md:px-3 lg:px-6 lg:py-2 rounded-lg shadow transition">
              Add to Cart
            </button>
            <button className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-2 py-1 md:py-2 md:px-3 lg:px-6 lg:py-2 rounded-lg shadow transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-6  ps-5 md:ps-0">
          Reviews
        </h2>
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-6 mb-4 border text-[14px] md:text-base"
          >
            <h3 className="font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
