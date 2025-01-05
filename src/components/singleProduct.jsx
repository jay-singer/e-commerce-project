import React from "react";

const SingleProduct = ({ items }) => {
  return (
    <div
      style={{
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
      }}
      className=" mt-3 shadow-sm md:w-full lg:w-[300px] border border-black  md:mt-0 xl:w-[250px] sm:w-full md:shadow-none  shadow-gray-400 flex flex-col   space-y-4 overflow-hidden  text-center "
    >
      <img src={items.pic} alt={items.ProName} />
      <h3 className="whitespace-nowrap w-full hit-fit object-cover">
        {items.ProName}
      </h3>
      <p className=" text-navColor ">{items.price}</p>
    </div>
  );
};

export default SingleProduct;
