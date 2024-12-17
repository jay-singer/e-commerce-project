import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product({ showCategory }) {
  const [screen, setScreen] = useState(false);
  useEffect(() => {
    const screenResizing = () => {
      if (window.innerWidth < 500) {
        setScreen((screen) => {
          screen = true;
        });
      } else {
        setScreen((screen) => {
          screen = false;
        });
      }
    };

    window.addEventListener("resize", screenResizing);

    return () => {
      window.removeEventListener("resize", screenResizing);
    };
  }, []);

  return (
    <div
      className={`  mt-[10.1rem] flex justify-center p-4 gap-4
 ${showCategory ? "w-full " : "w-full"} `}
    >
      <div className=" w-[200px] flex flex-col gap-4 self-center">
        <h1 className="text-navColor text-sm">TOP COLLECTIONS 2023</h1>
        <p className=" text-xl font-semibold relative z-20 ">
          We Serve Your Dream Furniture
          <span className=" ">
            <img
              className=" bg-navColor absolute bottom-1 -z-10 "
              src="/public/assets/frame/Rectangle.png"
              alt=""
            />
          </span>
        </p>
        <div className="text-white flex gap-3">
          <Link
            to="*"
            className="bg-navColor flex items-center px-2 rounded text-[14px]"
          >
            SHOP NOW
          </Link>
          <span className="bg-navColor py-[8px] px-[5px] text-[14px] flex items-center justify-center rounded-full">
            50%
          </span>
        </div>
      </div>
      <div className="w-[374px]">
        <img src="/assets/products/Furniture 1.png" className="w-full" alt="" />
      </div>
      <div className=" space-y-3 text-[14px] flex flex-col justify-center items-center">
        <div className="">
          <img src="/assets/products/Rectangle.png" alt="" />
          <div className="flex flex-col">
            {" "}
            <span className="text-navColor"></span>
            <span>Office Desk Chair</span>
          </div>
        </div>
        <div>
          <img src="/assets/products/Rectangle (1).png" alt="" />
          <div className="flex flex-col justify-center items-center">
            <span className="text-navColor">$180</span>
            <span>Home Alisa Sofa</span>
          </div>
        </div>
        <div>
          <img src="/assets/products/Rectangle (2).png" alt="" />
          <div className="flex flex-col items-center">
            <span className="text-navColor">$250</span>
            <span>Modern Chair</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
