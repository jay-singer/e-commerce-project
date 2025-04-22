import React from "react";

const UpperHeader = () => {
  return (
    <div
      className={`bg-navColor max-w-[1440px]  h-navHeight flex items-center fixed right-0 top-0 left-0 lg:pl-navHeight md:pl-10 text-white md:font-semibold lg:text-lg text-base mx-auto z-50`}
    >
      <h3>Welcome to our online shop</h3>
    </div>
  );
};

export default UpperHeader;
