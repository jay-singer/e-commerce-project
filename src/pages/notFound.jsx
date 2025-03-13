import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const backWordLink = useNavigate();
  return (
    <div className="flex items-center mx-auto p-10 justify-center lg:gap-10 md:flex-row flex-col gap-4">
      <div className="self-start">
        <button
          onClick={() => backWordLink(-1)}
          className="bg-gray-500 text-white px-3 py-2 rounded-lg whitespace-nowrap"
        >
          Back Home
        </button>
      </div>
      <div className="">
        <img
          src="/assets/illustration/404.jpg"
          className="lg:size-[300px] object-cover object-center"
          alt="Not found"
        />
      </div>
    </div>
  );
};

export default NotFound;
