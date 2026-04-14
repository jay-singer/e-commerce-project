import { Link } from "react-router-dom";

const UpperHeader = () => {
  return (
    <div
      className={`bg-navColor max-w-[1910px]  h-navHeight flex items-center fixed right-0 top-0 left-0 lg:pl-navHeight md:pl-10 text-white md:font-semibold lg:text-lg text-base mx-auto z-50`}
    >
      <h3>
        Welcome to our{" "}
        <Link
          to={"/shop"}
          className="bg-white text-navColor py-1 px-2 rounded-md"
        >
          {" "}
          online shop
        </Link>{" "}
      </h3>
    </div>
  );
};

export default UpperHeader;
