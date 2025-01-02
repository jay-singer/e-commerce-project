import React from "react";

const SingleProduct = ({ items }) => {
  return (
    <div
      style={{
        width: "250px",

        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",

        backgroundColor: "#fff",
      }}
      className="flex flex-col space-y-4 p-2"
    >
      <img
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        src={items.pic}
        alt={items.ProName}
      />
      <h3 className="whitespace-nowrap">{items.ProName}</h3>
      <p className=" text-navColor">{items.price}</p>
    </div>
  );
};

export default SingleProduct;
