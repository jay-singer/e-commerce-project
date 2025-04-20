import React, { useEffect, useState } from "react";
import { BsBagDash, BsBell, BsPerson } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchComp from "./search";

const UpperHeader1 = ({ displayingForm }) => {
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(
    window.innerWidth < 768
  );
  const [showHeaderOnScroll, setShowHeaderOnScroll] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!isTabletOrSmaller) {
        setShowHeaderOnScroll(window.scrollY < 50);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTabletOrSmaller]);

  return (
    <div
      className={`fixed hidden md:flex items-center top-0 justify-between lg:px-7 md:px-3 md:pe-3 z-50 pe-1 gap-1 max-w-[1440px] mx-auto right-0 bg-white left-0 transition-all ease-in-out  ${
        showHeaderOnScroll ? " top-navHeight shadow-md" : "top-0"
      }`}
    >
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img
            className="md:w-[8rem] w-[80px]"
            src="/assets/Logo.svg"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Search Bar Section */}
      <div className="md:w-[40%]">
        <SearchComp />
      </div>

      {/* Header Icons */}
      <div className="flex items-center gap-3">
        <BsBagDash className=" " />
        <BsBell className=" " />
        <BsPerson className=" " />
        <Link
          className="text-black flex justify-center items-center"
          to="/sellerDashboard"
        >
          <MdOutlineInsertComment />
        </Link>
      </div>

      {/* Language & Sign Up */}
      <div className="flex items-center gap-2 md:flex-row  md:flex">
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
