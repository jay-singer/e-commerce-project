import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navibar";
import Product from "../components/Product";
import SignForm from "../components/signIn";
import UpperHeader from "../components/upHeader";
import UpperHeader1 from "../components/upHeader1";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCategory, setShowCategory] = useState(true);

  const displayingForm = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative">
      {/* Blur the background elements when the form is shown */}
      <div
        className={`${
          showForm ? "filter blur-sm" : ""
        } transition duration-300 ease-in-out`}
      >
        <UpperHeader />
        <UpperHeader1 displayingForm={displayingForm} />
        <NavBar showCategory={showCategory} setShowCategory={setShowCategory} />
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 md:flex md:items-center justify-center bg-black bg-opacity-25">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-[70rem] md:p-4 h-full lg:h-fit">
            <SignForm formStatus={showForm} hideForm={hideForm} />
          </div>
        </div>
      )}
      <Outlet />
      <div
        className={`bg-indigo-300 ${
          showCategory && "absolute right-0   left-[14%] "
        }`}
      >
        <Product showCategory={showCategory} />
      </div>
    </div>
  );
};

export default LandingPage;
