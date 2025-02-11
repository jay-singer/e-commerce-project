import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ items }) => {
  return (
    <Link
      to={`/products/${items.id}`}
      state={{
        ProductStore: {
          id: items.id,
          name: items.ProName,
          price: items.price,
          image: items.productImage,
          productDesc: items.productDescription,
        },
      }}
      className="mx-2 mb-3 md:m-0  shadow-md md:w-full lg:w-[300px] xl:w-[230px] sm:w-full 
                 flex flex-col space-y-3overflow-hidden text-center rounded-lg 
                 bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <img
        src={items.productImage}
        alt={items.ProName}
        className="w-full  object-cover transition-transform duration-300"
      />
      <h3 className="whitespace-nowrap w-full text-lg font-semibold text-gray-800">
        {items.ProName}
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
