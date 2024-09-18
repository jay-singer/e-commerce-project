import React from "react";
import { LuChevronDown, LuSearch } from "react-icons/lu";
const SearchComp = ({ setInput }) => {
  return (
    <>
      <div
        className={`flex items-center border border-navColor bg-navColor h-10 rounded-md overflow-hidden pe-3 gap-3 md:gap-0 ${
          setInput && "absolute -bottom-10 left-2 right-2"
        }`}
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
