import React from "react";
import { BiCategory, BiHome, BiShoppingBag } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

function MobileFooter() {
  return (
    <div className="bg-white flex flex-col  fixed bottom-0 left-0 right-0 py-2 pb-4">
      {/* First section*/}
      <div className="flex justify-center items-center ">
        {/* left Side */}
        <div className="w-1/2 flex justify-evenly items-center">
          <Link to={"/"} className="">
            <BiHome size={20} />
          </Link>
          <Link to={"*"}>
            {" "}
            <BiCategory size={20} />
          </Link>
        </div>
        {/* right Side */}
        <div className="w-1/2 flex justify-evenly items-center">
          {" "}
          <Link className="relative ">
            <BiShoppingBag size={20} />

            <span className=" bg-navColor absolute top-0.5 -right-1 text-white h-1 w-1 flex justify-center items-center rounded-full text-center text-[6px] p-[5px]">
              0
            </span>
          </Link>
          <Link to={"/signIn1"}>
            <CiUser size={20} className=" font-bold" />
          </Link>
        </div>
      </div>
      {/* Second section*/}
      <div className="flex justify-center mt-4">
        <span className=" bg-navColor w-1/2 h-1 rounded"></span>
      </div>
    </div>
  );
}

export default MobileFooter;
