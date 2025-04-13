import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SlideShow1() {
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
    <>
      <div
        className={`container ms-6 flex-row flex justify-center pt-0 gap-4 lg:h-[27rem] w-full h-fit bg-white`}
      >
        <div className="  w-[200px] flex flex-col gap-4 self-center z-0 ">
          <h1 className="text-navColor text-sm">TOP COLLECTIONS 2025</h1>
          <p className=" text-xl font-semibold relative  ">
            <span className="z-50 bg-white  block  h-fit">
              We Serve Your Dream Furniture
            </span>
            <span className=" ">
              <img
                className="  absolute -bottom-1 right-0 -z-10 w-0 h-9 "
                src="/assets/frame/5f27e907fbdca6cab0ba1f7d4c0b7ce9.png"
                alt=""
              />
            </span>
          </p>
          <p className="text-primary">Get of 50% off All Products</p>
          <div className="text-white flex gap-3 ">
            <Link
              to="/signIn1"
              className="bg-navColor flex items-center px-2 rounded text-[14px] text-nowrap"
            >
              SHOP NOW
            </Link>
            <span className="bg-navColor py-[8px] px-[5px] text-[14px] flex items-center justify-center rounded-full">
              50%
            </span>
          </div>
        </div>
        <div className="lg:w-fit flex items-baseline relative justify-center">
          <span className=" h-fit ">
            <img
              src="\assets\products\furnitureProduct\Furniture 1.png"
              className=" "
              alt=""
            />
          </span>
          <span className="text-navColor justify-self-end  absolute sm:right-8 right-7 lg:bottom-[150px] bottom-[50px]">
            $129
          </span>
        </div>
        <div className=" space-y-3 md:text-[14px] text-[10px] flex md:flex-col md:justify-center md:w-[20%] w-full justify-evenly items-center md:gap-0 ">
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
    </>
  );
}

export default SlideShow1;
