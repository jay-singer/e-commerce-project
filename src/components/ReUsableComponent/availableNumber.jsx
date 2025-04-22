import React from "react";
import { FaTruck } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
function UpdatedNumbers({ availableNumber }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Available Products */}
        <div
          className=" w-full h-[100px] md:w-[260px] lg:w-[304px] lg:h-[120px] bg-gradient-to-r rounded-lg relative "
          style={{
            background:
              " linear-gradient(98.86deg, rgba(15, 98, 206, 0.5) 0%, rgba(100, 185, 55, 0.7) 99.69%)",
          }}
        >
          <FaTruck
            className=" opacity-25 -rotate-[20deg] absolute left-1 bottom-0 size-[75px] ] "
            fill="white"
          />
          <p className="text-white absolute lg:left-[20px] left-5 top-[17px] font-semibold">
            Available
          </p>
          <p className="text-white absolute right-[30px] bottom-0 lg:text-[3rem] text-[2rem]">
            {availableNumber}
          </p>
        </div>
        {/* Wished Products */}
        <div
          className=" w-full h-[100px] md:w-[260px] lg:w-[304px] lg:h-[120px] bg-gradient-to-r rounded-lg relative "
          style={{
            background:
              "linear-gradient(98.86deg, rgba(163, 7, 37, 0.5) 0%, rgba(100, 185, 55, 0.7) 100%)",
          }}
        >
          <IoMdCart
            className=" opacity-25 -rotate-[20deg] absolute left-1 bottom-0 size-[75px]  "
            fill="white"
          />

          <p className="text-white absolute left-[20px] top-[17px] font-semibold">
            Wished
          </p>
          <p className="text-white absolute right-[30px] bottom-0 lg:text-[3rem] text-[2rem]">
            {availableNumber}
          </p>
        </div>
        {/* Expired Products */}
        <div
          className=" w-full h-[100px] md:w-[260px] lg:w-[304px] lg:h-[120px] bg-gradient-to-r rounded-lg relative "
          style={{
            background:
              " linear-gradient(98.86deg, rgba(83, 0, 101, 0.5) 0%, rgba(100, 185, 55, 0.7) 100%)",
          }}
        >
          <MdShoppingBag
            className=" opacity-15 -rotate-[20deg] absolute left-1 bottom-0"
            fill="white"
            size={75}
          />

          <p className="text-white absolute left-[20px] top-[17px] font-semibold">
            Expired
          </p>
          <p className="text-white absolute right-[30px] bottom-0 lg:text-[3rem] text-[2rem]">
            {availableNumber}
          </p>
        </div>
      </div>
    </>
  );
}

export default UpdatedNumbers;
