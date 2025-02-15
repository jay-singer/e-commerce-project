import React from "react";
import { LuChevronDown, LuSearch } from "react-icons/lu";
const SearchComp = () => {
  return (
    <>
      <div
        className={` z-50 flex items-center border border-navColor bg-navColor md:h-10 h-7 rounded-md overflow-hidden  md:pe-3 pe-1 gap-2 md:gap-0 `}
      >
        <input
          type="text"
          placeholder="Search here"
          className="outline-none h-full ps-2 pe-2 md:pe-0 text-base lg:text-lg w-[90%]"
        />
        <div className="bg-white h-full md:flex items-center px-2 me-3 gap-1  hidden">
          {" "}
          Category <LuChevronDown />
        </div>

        <LuSearch color="white" size={20} />
      </div>
    </>
  );
};

export default SearchComp;
