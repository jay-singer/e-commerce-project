import React, { useState } from "react";
import {
  MdLogout,
  MdSettings,
  MdShoppingBag,
  MdShoppingCart,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" bg-black">
      {/** upper */}

      <div className="bg-slate-100  flex justify-end pe-10 py-2 gap-4 items-center text-primary fixed top-0 left-0 right-0 border border-black">
        <Link to="/sell">Back</Link>
        <Link to="/">Home</Link>

        <Link>
          <img
            src="../assets/profile/Image Placeholder.png"
            alt="Profile pic"
            className="size-10"
          />
        </Link>
      </div>
      {/** section */}
      <div className="flex mt-[58px]">
        {/* Sidebar */}
        <div
          className={`bg-slate-100 text-primary h-screen transition-all duration-500 ease-in-out ${
            isHovered ? "md:w-48" : "w-20"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <nav
            className={`flex flex-col space-y-2 py-10 px-2 ${
              !isHovered ? "items-center" : "item-start"
            } `}
          >
            <Link
              to="/sellerDashboard"
              className="p-2 hover:bg-selected rounded flex gap-1 md:gap-2 items-center"
            >
              <MdSpaceDashboard className=" md:size-6 size-4 shrink-0" />
              {/* Sidebar link */}
              <span
                className={`sideBarLink transition-all duration-700 ease-in-out ${
                  isHovered ? "inline opacity-100 " : "hidden opacity-0"
                }`}
              >
                Dashboard
              </span>
            </Link>
            <Link
              to="#products"
              className="p-2 hover:bg-selected  rounded flex gap-1 md:gap-2 items-center"
            >
              <MdShoppingCart className=" md:size-6 size-4 shrink-0" />
              {/* Sidebar link */}
              <span
                className={`sideBarLink transition-all duration-300 ease-in-out ${
                  isHovered ? "inline opacity-100" : "hidden opacity-0"
                }`}
              >
                Sales
              </span>
            </Link>
            <Link
              to="#orders"
              className="p-2 hover:bg-selected  rounded flex gap-1 md:gap-2 items-center"
            >
              <MdShoppingBag className=" md:size-6 size-4 shrink-0" />
              {/* Sidebar link */}
              <span
                className={`sideBarLink transition-all duration-300 ease-in-out ${
                  isHovered ? "inline opacity-100 " : "hidden opacity-0"
                }`}
              >
                Products
              </span>
            </Link>
            <Link
              to="#orders"
              className="p-2 hover:bg-selected  rounded flex gap-1 md:gap-2 items-center"
            >
              <MdSettings className=" md:size-6 size-4 shrink-0" />
              {/* Sidebar link */}
              <span
                className={`sideBarLink transition-all duration-300 ease-in-out ${
                  isHovered ? "inline opacity-100 " : "hidden opacity-0"
                }`}
              >
                Settings
              </span>
            </Link>
            <Link
              to="#orders"
              className="p-2 hover:bg-selected text-[#C5C5C5]  rounded flex gap-1 md:gap-2 items-center"
            >
              <MdLogout className=" md:size-6 size-4 shrink-0" />
              {/* Sidebar link */}
              <span
                className={`sideBarLink transition-all duration-700 ease-in-out whitespace-nowrap ${
                  isHovered ? "inline opacity-100 " : "hidden opacity-0"
                }`}
              >
                Log Out
              </span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          <section id="dashboard">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>
              Welcome to your dashboard! Here, you can manage all the important
              aspects of your seller account.
            </p>
          </section>

          <section id="products" className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <p>
              Manage your products here. Add, edit, or remove items from your
              product list.
            </p>
          </section>

          <section id="orders" className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <p>
              Track and manage your orders here. View order details, update
              status, and more.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
