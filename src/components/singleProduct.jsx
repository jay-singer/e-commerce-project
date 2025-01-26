import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ items }) => {
  console.log(items.ProName);
  return (
    <>
      <Link
        to={`/products/${items.id}`} // Update this to the correct route
        state={{
          ProductStore: {
            id: items.id,
            name: items.ProName,
            price: items.price,
            image: items.pic,
          },
        }}
        style={{
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
        className="mx-2 mt-3 shadow-sm md:w-full lg:w-[300px] md:m-0 xl:w-[230px] sm:w-full md:shadow-none shadow-gray-400 flex flex-col space-y-4 overflow-hidden text-center "
      >
        <img src={items.pic} alt={items.ProName} />
        <h3 className="whitespace-nowrap w-full object-cover">
          {items.ProName}
        </h3>
        <p className="text-navColor flex justify-around items-center">
          {items.price}
          <div className="flex justify-center items-center">
            <span>{items.star}</span>
            <span>{items.star}</span>
            <span>{items.star}</span>
            <span>{items.star}</span>
          </div>
        </p>
      </Link>
    </>
  );
};

export default SingleProduct;
