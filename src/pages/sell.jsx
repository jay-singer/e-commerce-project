import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const SellComp = () => {
  return (
    <>
      <div className="h-screen md:mt-[100px] mt-[140px] bg-white">
        {" "}
        <nav className="bg-gray-50 py-4 px-6 flex justify-between items-center">
          {/* Left: All Categories Button */}
          <div className="flex items-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600">
              <span className="mr-2">&#9776;</span> All Categories
            </button>
          </div>

          {/* middle: Navigation Links and Contact Info */}
          <div className="flex items-center">
            {/* Navigation Links */}
            <ul className="flex lg:space-x-8 space-x-4 lg:text-lg text-base font-semibold">
              <li>
                <Link to="/" className="hover:text-green-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="*" className="hover:text-green-500 hidden">
                  About
                </Link>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-500 hidden">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          {/** Right navigation */}
          <div>
            <Link to="/sellerDashboard">
              <MdSpaceDashboard className="lg:size-10 size-7" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SellComp;
