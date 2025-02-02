import React, { useEffect, useState } from "react";
import { BsBagDash, BsBell, BsPerson } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchComp from "./search";

const UpperHeader1 = ({ displayingForm }) => {
  const [screen, setScreen] = useState(window.innerWidth < 500);
  const [isUpperHeaderVisible, setIsUpperHeaderVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth < 500);
    const handleScroll = () => {
      setIsUpperHeaderVisible(window.scrollY < 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex items-center justify-between lg:px-7 md:px-3 md:pe-3 pe-1 gap-2 sm:gap-0 max-w-[1990px] mx-auto right-0 left-0 bg-white 0 z-50 transition-all duration-100 ${
        isUpperHeaderVisible ? "top-navHeight shadow-md" : "top-0 "
      }`}
    >
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img
            className="md:w-[8rem] w-[100px]"
            src="/assets/Logo.svg"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Search Bar Section */}
      <div className={`${screen ? "hidden" : "block"}`}>
        <SearchComp setInput={screen} />
      </div>

      {/* Header Icons */}
      <div
        className={`flex items-center gap-3 ${
          screen ? "rounded-full bg-navColor p-2 text-white" : "bg-white"
        }`}
      >
        <Link to="/sellerDashboard">
          <BsBagDash size={20} color={screen ? "white" : "black"} />
        </Link>
        <BsBell size={20} className="md:block hidden" />
        <BsPerson size={20} className="md:block hidden" />
        <MdOutlineInsertComment size={20} className="md:block hidden" />
      </div>

      {/* Language & Sign Up */}
      <div className="flex items-center gap-2 md:flex-row">
        <select className="outline-none w-12">
          <option defaultValue="selected">English</option>
          <option>Kinyarwanda</option>
          <option>France</option>
        </select>
        <Link className="text-secondary" onClick={displayingForm}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default UpperHeader1;
