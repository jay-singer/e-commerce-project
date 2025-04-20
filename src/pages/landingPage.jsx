import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SignForm from "../components/IdentificationsStaff/signIn";
import MobileFooter from "../components/mobileComponent/mobileFooter";
import Product from "../components/ProductDisplay";
import Products from "../components/products";
import FooterComp from "../components/ReUsableComponent/footer";
import NavBar from "../components/ReUsableComponent/navibar";
import UpperHeader from "../components/ReUsableComponent/upHeader";
import UpperHeader1 from "../components/ReUsableComponent/upHeader1";
import Testimony from "../components/Testimony";
import { formHiding } from "../components/utilities/utlilities";

// Lazy-loaded component

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  {
    /** ProductComponet state */
  }
  const [componentState, setComponentState] = useState(false);
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
        <div className={` bg-white`}>
          <UpperHeader />
          <UpperHeader1 displayingForm={displayingForm} />
        </div>

        {/* Navbar (always visible) */}
        <NavBar showCategory={showCategory} setShowCategory={setShowCategory} />
      </div>

      {/* Form Modal */}
      {showForm && (
        <div
          onClick={() => formHiding(hideForm)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-full max-w-[70rem] p-10 h-full lg:h-fit"
          >
            <SignForm formStatus={showForm} hideForm={hideForm} />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex flex-col justify-center items-center max-w-[1400px] ">
        {!isProductPage && (
          <>
            <Product showCategory={showCategory} />
            <Products
              productDataObject={{
                componentName: "OUR PRODUCTS",
                componentMarginLarge: "0",
              }}
            />
          </>
        )}

        <Outlet />
        <div className="  w-[90%]">
          <Testimony />
        </div>
        <FooterComp />
      </div>
    </div>
  );

  const phoneView = (
    <div className="mb-[69px] ">
      {!isProductPage && (
        <>
          <Products
            productDataObject={{
              componentName: "OUR PRODUCTS",
              componentMarginLarge: "0",
              componentMarginSmall: "mt-0",
            }}
          />
        </>
      )}
      <Outlet />
      <MobileFooter />
    </div>
  );
  return <>{screenWidth >= 768 ? computerView : phoneView}</>;
};

export default LandingPage;
