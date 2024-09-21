import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center mx-auto p-10 justify-center lg:gap-10 md:flex-row flex-col">
      <div className="self-start">
        <Link
          to="/"
          className="bg-gray-500 text-white px-3 py-2 rounded-lg whitespace-nowrap"
        >
          Back Home
        </Link>
      </div>
      <div className="">
        <img
          src="./assets/illustration/404.jpg"
          className="lg:size-[300px] object-cover object-center"
          alt="Not found"
        />
      </div>
    </div>
  );
};

export default NotFound;
