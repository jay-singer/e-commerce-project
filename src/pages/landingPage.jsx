import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SignForm from "../components/signIn";
import UpperHeader from "../components/upHeader";
import UpperHeader1 from "../components/upHeader1";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

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
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 ">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[70rem] w-full">
            <SignForm formState={showForm} hideForm={hideForm} />
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default LandingPage;
