import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ items }) => {
  return (
    <Link
      to={`/products/${items._id}`}
      state={{
        ProductStore: {
          id: items._id,
          name: items.productName,
          price: items.price,
          image: items.productImage,
          productDesc: items.productDescription,
        },
      }}
      className="mx-2 mb-3 md:m-0  shadow-md md:w-full lg:w-[300px] xl:w-[230px] 
                 flex flex-col space-y-3 overflow-hidden text-center rounded-lg 
                 bg-white transition-transform transform md:hover:scale-105 md:hover:shadow-xl"
    >
      <img
        src={items.productImage}
        alt={items.productName}
        className="w-full object-center  object-cover transition-transform duration-300"
      />
      <h3 className="text-start w-full md:text-lg text-[12px] font-semibold  text-gray-700">
        {items.productName}
      </h3>
      <div className="text-gray-700 flex justify-around items-center pb-4">
        <span className="text-md font-medium text-navColor">
          ${items.price}
        </span>
        <div className="flex space-x-1 text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={
                index < items.star ? "text-yellow-500" : "text-gray-300"
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
