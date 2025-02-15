import React, { useEffect, useState } from "react";
import { BsBagDash, BsBell, BsPerson } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchComp from "./search";

const UpperHeader1 = ({ displayingForm }) => {
  const [screen, setScreen] = useState(window.innerWidth < 500);
  const [isUpperHeaderVisible, setIsUpperHeaderVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth < 500);
      setIsSmallScreen(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!isSmallScreen) {
        setIsUpperHeaderVisible(window.scrollY < 50);
      }
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleResize();
    handleScroll();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  return (
    <div
      className={`fixed flex items-center justify-between lg:px-7 md:px-3 md:pe-3 pe-1 gap-1 max-w-[1990px] mx-auto right-0 left-0 bg-white z-50 transition-all duration-100 ${
        isSmallScreen
          ? "top-0"
          : isUpperHeaderVisible
          ? "top-navHeight shadow-md"
          : "top-0"
      }`}
    >
      {/* Logo Section */}
      <div className="">
        <Link to="/">
          <img
            className="md:w-[8rem] w-[80px]"
            src="/assets/Logo.svg"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Search Bar Section */}
      <div className={` w-fi`}>
        <SearchComp setInput={screen} />
      </div>

      {/* Header Icons */}
      <div className={`flex items-center gap-3 `}>
        <BsBagDash
          className={`md:block hidden ${screen ? " size-4" : "black"}`}
        />
        <BsBell className={`md:block hidden ${screen ? " size-4" : "black"}`} />
        <BsPerson
          className={`md:block hidden ${screen ? " size-4" : "black"}`}
        />
        <Link
          className={`${
            screen
              ? "rounded-full bg-navColor p-2 text-white"
              : "text-black flex justify-center items-center"
          }`}
          to="/sellerDashboard"
        >
          <MdOutlineInsertComment
            className={` ${screen ? " size-4" : "black"}`}
          />
        </Link>
      </div>

      {/* Language & Sign Up */}
      <div
        className={`flex items-center gap-2 md:flex-row ${
          screen ? "hidden" : "block"
        }`}
      >
        <select className="outline-none w-12">
          <option defaultValue="selected">English</option>
          <option>Kinyarwanda</option>
          <option>France</option>
        </select>
        <Link
          className={`text-secondary ${screen ? "hidden" : "block"}`}
          onClick={displayingForm}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default UpperHeader1;
