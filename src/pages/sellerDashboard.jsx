import { useEffect, useState } from "react";
import {
  MdLogout,
  MdSettings,
  MdShoppingBag,
  MdShoppingCart,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";
import UpdatedNumbers from "../components/availableNumber";
import Button from "../components/button";
import CreateNewProducts from "../components/createNewProduct";
import DashboardTable from "../components/dashboard";
import Products from "../components/products";
const SellerDashboard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [componentChange, setComponentChange] = useState("dashboard"); // Default to Dashboard
  const [changeSection, setChangeSection] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    const handleScroll = () => {
      setShadow(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <div
        className={`bg-slate-100 flex justify-end pe-10 py-2 gap-4 items-center text-primary fixed top-0 left-0 right-0 z-50 transition-shadow ${
          shadow ? "shadow-md" : "border-b-[1px] border-gray-300"
        }`}
      >
        <Link to="/">Back</Link>
        <Link to="/">Home</Link>
        <Link>
          <img
            src="./assets/profile/profile1.jpeg"
            alt="Profile pic"
            className="size-10 rounded-full object-cover object-center"
          />
        </Link>
      </div>

      {/* Main Section */}
      <div className="flex mt-[58px]">
        {/* Sidebar */}
        <div
          className={`bg-white transition-all duration-500 ease-in-out 
            ${
              isMobile
                ? "fixed bottom-0 left-0 right-0 flex justify-around py-2 z-50"
                : `h-screen ${isHovered ? "md:w-48 w-48" : "w-20"}`
            }`}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <nav
            className={`${
              isMobile
                ? "flex justify-evenly w-full bg-white"
                : "flex flex-col space-y-2 py-10 px-2 "
            }`}
          >
            {/* Dashboard */}
            <button
              onClick={() => setComponentChange("dashboard")}
              className={`p-2 rounded flex justify-center items-center transition-all ${
                componentChange === "dashboard"
                  ? "bg-gray-300 text-black"
                  : "hover:bg-gray-300"
              }`}
            >
              <MdSpaceDashboard
                className={`md:size-6 size-6 transition-all text-black ${
                  componentChange === "dashboard" ? "text-black" : "text-black "
                }`}
              />
              {!isMobile && (
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "inline opacity-100 text-black"
                      : "hidden opacity-0"
                  }`}
                >
                  Dashboard
                </span>
              )}
            </button>

            {/* Sales */}
            <button
              onClick={() => setComponentChange("sales")}
              className={`p-2 rounded flex items-center justify-center transition-all text-black ${
                componentChange === "sales"
                  ? "bg-gray-300 text-black"
                  : "hover:bg-gray-300 text-white"
              }`}
            >
              <MdShoppingCart
                className={`md:size-6 size-6 transition-all ${
                  componentChange === "sales"
                    ? "text-black"
                    : "text-black group-hover:text-white"
                }`}
              />
              {!isMobile && (
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "inline opacity-100 text-black"
                      : "hidden opacity-0"
                  }`}
                >
                  Sales
                </span>
              )}
            </button>
            {/*Products */}
            <button
              onClick={() => setComponentChange("products")}
              className={`p-2 rounded flex items-center justify-center transition-all text-black ${
                componentChange === "products"
                  ? "bg-gray-300 text-black"
                  : "hover:bg-gray-300 text-white"
              }`}
            >
              <MdShoppingBag
                className={`md:size-6 size-6 transition-all ${
                  componentChange === "products"
                    ? "text-black"
                    : "text-black group-hover:text-white"
                }`}
              />
              {!isMobile && (
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "inline opacity-100 text-black"
                      : "hidden opacity-0"
                  }`}
                >
                  Pruducts
                </span>
              )}
            </button>
            {/* Settings */}
            <Link
              to="/settings"
              className="p-2 rounded flex items-center justify-center transition-all hover:bg-gray-300 text-black"
            >
              <MdSettings className="md:size-6 size-6 transition-all hover:text-white" />
              {!isMobile && (
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "inline opacity-100 text-black"
                      : "hidden opacity-0"
                  }`}
                >
                  Settings
                </span>
              )}
            </Link>

            {/* Log Out */}
            <Link
              to="/logout"
              className="p-2 rounded flex items-center justify-center transition-all hover:bg-gray-300 text-red-400"
            >
              <MdLogout className="md:size-6 size-6 transition-all hover:text-white" />
              {!isMobile && (
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "inline opacity-100 text-red-400"
                      : "hidden opacity-0"
                  }`}
                >
                  Log Out
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 md:p-6">
          >>>>>>>>> Temporary merge branch 2
          {changeSection === "createProduct" ? (
            <div>
              <CreateNewProducts
                createProductDataObject={{
                  changeSection: changeSection,
                  setChangeSection: setChangeSection, // Pass the setter function here
                }}
              />
            </div>
          ) : (
            <>
              <div>
                <UpdatedNumbers />
              </div>
              <section>
                {/* Conditionally render components based on state */}
                {componentChange === "dashboard" && <DashboardTable />}
                {componentChange === "products" && (
                  <div className=" mt-4">
                    <button
                      onClick={() => {
                        console.log("hello");
                        setChangeSection("createProduct");
                      }}
                      className="  justify-self-end flex justify-end overflow-hidden"
                    >
                      <Button data={"+ Add product"} width={"w-fit"} />
                    </button>
                    <Products
                      productDataObject={{
                        componentName: "",
                      }}
                    />
                  </div>
                )}

                {componentChange === "sales" && <></>}
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
