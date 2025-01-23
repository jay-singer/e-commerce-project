import React from "react";

function Button(props) {
  return (
    <div
      className={` bg-navColor flex gap-2 p-2 lg:px-4 items-center justify-center text-white lg:font-semibold lg:text-[17px] rounded text-shadow-sm cursor-pointer text-nowrap sm:text-[14px] ${props.width}`}
    >
      {props.data} {props.icon}
    </div>
  );
}

export default Button;
