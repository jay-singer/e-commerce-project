import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SignForm from "../components/IdentificationsStaff/signIn";
import IntroSection from "../components/IntroSection";
import MobileFooter from "../components/mobileComponent/mobileFooter";
import BlogSection from "../components/ReUsableComponent/BlogSection";
import FooterComp from "../components/ReUsableComponent/footer";
import NavBar from "../components/ReUsableComponent/navibar";
import NewArrival from "../components/ReUsableComponent/newArrival";
import NewsLetter from "../components/ReUsableComponent/NewsLetter";
import ShopCategory from "../components/ReUsableComponent/shopCategories";
import UpperHeader from "../components/ReUsableComponent/upHeader";
import UpperHeader1 from "../components/ReUsableComponent/upHeader1";
import SecSection from "../components/specialComponents/SecSection";
import Testimony from "../components/Testimony";
import CartProducts from "../components/UserComponents/BuyerStaff/CartProducts";
import { formHiding } from "../components/utilities/utlilities";
import BestSeller from "./../components/ReUsableComponent/BestSeller";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  const isProductOrCartPage =
    location.pathname.startsWith("/products") ||
    location.pathname.startsWith("/CartProducts");

  const displayingForm = () => setShowForm(true);
  const hideForm = () => setShowForm(false);

  // Scroll to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 10) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //Function used to determine whether to show the cart component based on the current route
  const handlingShowCartComponent = () => {
    if (
      location.pathname === "/" ||
      location.pathname.startsWith("/products")
    ) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  //Computer view of the landing page
  const computerView = (
    <div className="relative w-full ">
      {/* Blur content if form is open */}
      <div
        className={`transition duration-300 ease-in-out ${
          showForm ? "filter blur-sm" : ""
        }`}
      >
        {/* Headers */}
        <div className="bg-white">
          <UpperHeader />
          <UpperHeader1
            displayingForm={displayingForm}
            handlingShowCartComponent={handlingShowCartComponent}
          />
        </div>

        {/* Navbar */}
        <NavBar showCategory={showCategory} setShowCategory={setShowCategory} />
      </div>

      {/* Sign-in Form Modal */}
      {showForm && (
        <div
          onClick={() => formHiding(hideForm)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-full"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-full max-w-[70rem] p-10 py-7"
          >
            <SignForm formStatus={showForm} hideForm={hideForm} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className=" w-full z-10">
        {/* Home page only */}
        {!isProductOrCartPage && location.pathname === "/" && (
          <>
            <div className=" mt-[130px]">
              <IntroSection showCategory={showCategory} />
            </div>
            {/* <Products
              productDataObject={{
                componentName: "OUR PRODUCTS",
                componentMarginLarge: "0",
              }}
            /> */}
            {/** Second section */}
            <SecSection showCategory={showCategory} />
            {/**New arrival section */}
            <NewArrival />
            {/** shop categoris */}
            <ShopCategory />
            {/* Best Seller product */}
            <BestSeller />
            {showCart && <CartProducts />}
            <div className="w-[90%] place-self-center">
              <div>
                <h3 className=" text-center font-bold text-primary lg:text-[36px] my-4">
                  What our customers say
                  <Testimony />
                </h3>
              </div>

              {/** Latest Articles */}
              <BlogSection />
              {/** News letter section */}
            </div>
          </>
        )}

        {/* Nested routes like /furniture */}
        <Outlet />
        <NewsLetter />

        <FooterComp />
      </div>
    </div>
  );
  //Phone view of the landing page
  const phoneView = (
    <div className="mb-[69px] min-w-[320px]">
      {location.pathname === "/" && (
        <>
          {/**Introduction section */}
          <IntroSection />
          {/** paterner sectionf */}
          <SecSection showCategory={showCategory} />
          {/** New arrival */}
          <NewArrival />
          {/** shop categoris */}
          <ShopCategory />
          {/* Best Seller product */}
          <BestSeller />
          {/** Latest Articles */}
          <BlogSection />
        </>
      )}
      {/** News letter section */}
      <Outlet />
      <NewsLetter />
      <FooterComp />
      <MobileFooter />
    </div>
  );

  return <>{screenWidth >= 768 ? computerView : phoneView}</>;
};

export default LandingPage;
