import React, { useEffect, useState } from "react";
import { BsBagDash, BsBell, BsPerson } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchComp from "./search";

const UpperHeader1 = ({ displayingForm }) => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    const screenResizing = () => {
      if (window.innerWidth < 500) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };

    window.addEventListener("resize", screenResizing);

    return () => {
      window.removeEventListener("resize", screenResizing);
    };
  }, []);

  return (
    <>
      <div className="fixed top-navHeight h-navHeight flex items-center justify-between  lg:px-7 md:px-3  pe-3 gap-2 sm:gap-0 max-w-[1990px] mx-auto right-0 left-0 bg-white">
        {/* log section*/}
        <div>
          <img
            className="md:w-[8rem] w-[100px] "
            src="./assets/Logo.svg"
            alt="LogImage"
          />
        </div>
        {/* Search BarSection */}
        <SearchComp setInput={screen} />
        {/** Header Icon */}
        <div
          className={`flex items-center gap-3  ${
            screen ? " rounded-full bg-navColor p-2" : " bg-white "
          }`}
        >
          <BsBagDash size={20} className="md:block hidden" />
          <BsBell size={20} className="md:block hidden" />
          <BsPerson size={20} className="md:block hidden" />
          <MdOutlineInsertComment
            size={20}
            color={`${screen ? "white" : "black"}`}
          />
        </div>

        <div className=" flex items-center gap-2 md:flex-row ">
          <select className="outline-non w-12   outline-none">
            <option defaultValue="selected">English</option>
            <option>Kinyarwanda</option>
            <option>France</option>
          </select>
          <Link className="text-secondary" onClick={displayingForm}>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpperHeader1;
