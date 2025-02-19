import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FooterComp from "../components/footer";
import MobileFooter from "../components/mobileComponent/mobileFooter";
import NavBar from "../components/navibar";
import Product from "../components/ProductDisplay";
import Products from "../components/products";
import SignForm from "../components/signIn";
import Testimony from "../components/Testimony";
import UpperHeader from "../components/upHeader";
import UpperHeader1 from "../components/upHeader1";

// Lazy-loaded component

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  const lastScrollY = useRef(window.scrollY);

  const displayingForm = () => setShowForm(true);
  const hideForm = () => setShowForm(false);

  const isProductPage = location.pathname.startsWith(`/products`);

  // Handle scroll event to hide the UpperHeader on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 10) {
        setIsHeaderVisible(false); // Hide when scrolling down
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsHeaderVisible(true); // Show when scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const computerView = (
    <div className="relative max-w-[1440px] w-full">
      {/* Blur effect when form is open */}
      <div
        className={`transition duration-300 ease-in-out ${
          showForm ? "filter blur-sm" : ""
        }`}
      >
        {/* Upper Header (hides on scroll down, shows on scroll up) */}
        <div
          className={`fixed top-0 left-0 right-0 z-20 bg-white shadow-md transition-transform duration-300 ${
            isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <UpperHeader />
          <UpperHeader1 displayingForm={displayingForm} />
        </div>

        {/* Navbar (always visible) */}
        <NavBar showCategory={showCategory} setShowCategory={setShowCategory} />
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-[70rem] p-4 h-full lg:h-fit">
            <SignForm formStatus={showForm} hideForm={hideForm} />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex flex-col justify-center items-center">
        {!isProductPage && (
          <>
            <Product showCategory={showCategory} />
            <Products />
          </>
        )}

        <Outlet />
        <Testimony />
        <FooterComp />
      </div>
    </div>
  );

  const phoneView = (
    <div className="mb-[69px] ">
      <UpperHeader1 />
      {!isProductPage && (
        <>
          <Products />
        </>
      )}
      <Outlet />
      <MobileFooter />
    </div>
  );
  return <>{screenWidth >= 768 ? computerView : phoneView}</>;
};

export default LandingPage;
