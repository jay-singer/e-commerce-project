import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ items, openingCartForm }) => {
  // Function to render star rating

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-navColor" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className="mx-2 mb-3 md:m-0 shadow-md  lg:w-[300px] xl:w-[230px] 
                 flex flex-col gap-2 overflow-hidden text-center rounded-lg 
                 bg-white transition-transform transform md:hover:scale-105 md:hover:shadow-xl shadow-gray-400 -z-1"
    >
      <div className="relative">
        <Link
          className=" "
          to={`/products/${items._id}`}
          state={{
            ProductStore: {
              id: items._id,
              name: items.productName,
              price: items.price,
              image: items.productImage,
              productDesc: items.productDescription,
              star: items.rating || 4, // Pass the star rating
            },
          }}
        >
          <img
            src={items.productImage}
            alt={items.productName}
            className="object-center object-covertransition-transform duration-300 object-cover md:h-[200px] w-full h-[150px]"
          />
        </Link>

        <span className="absolute bg-white top-0 left-0 h-fit rounded-ee-lg px-1 py-1 gap-1 flex flex-col justify-evenly">
          <button className="flex justify-center items-center">
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
          <button
            onClick={() => {
              const data = {
                product_id: items._id,
                productName: items.productName,
              };
              openingCartForm(data);
            }}
            className="bg-[#7AC751] flex justify-center items-center px-[3px] py-[3px] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <svg
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" />
                <path d="M9 11V6a3 3 0 0 1 6 0v5" />
              </svg>
            </svg>
          </button>
        </span>
      </div>
      <div className="px-1">
        <h3 className="text-start w-full md:text-lg text-[12px] font-semibold text-gray-700">
          {items.productName}
        </h3>

        {/* Star rating display */}

        <div className="flex justify-between mb-4">
          <span className="text-md text-start font-medium text-navColor">
            ${items.price}
          </span>
          <span className="flex justify-center items-center">
            {renderStars(items.rating || 4)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
