import { LuSearch } from "react-icons/lu";
const SearchComp = () => {
  return (
    <>
      <div
        className={` z-50 flex items-center  border border-navColor bg-navColor md:h-10 h-7 rounded-full overflow-hidden md:gap-2 pe-1 gap-2  `}
      >
        <input
          type="text"
          placeholder="Search here"
          className="outline-none h-full ps-2 pe-2 md:pe-0 text-base lg:text-lg w-[90%]"
        />
        <button className=" flex-1 h-full flex justify-center items-center ">
          <LuSearch color="white" size={20} />
        </button>
      </div>
    </>
  );
};

export default SearchComp;
