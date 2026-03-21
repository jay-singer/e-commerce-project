import axios from "axios";
import { useEffect, useState } from "react";
import {
  MdLogout,
  MdSettings,
  MdShoppingBag,
  MdShoppingCart,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "../allCSS/dashboard.css";
import Products from "./../components/products";
import UpdatedNumbers from "./../components/ReUsableComponent/availableNumber";
import Button from "./../components/ReUsableComponent/button";
import DashboardTable from "./../components/ReUsableComponent/dashboard";
import CreateNewProducts from "./../components/UserComponents/SellerStaff/createNewProduct";
const SellerDashboard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [componentChange, setComponentChange] = useState("dashboard"); // Default to Dashboard
  const [changeSection, setChangeSection] = useState("");
  const [productsNumber, setProductNumber] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    countNumberOfProduct();
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
  const countNumberOfProduct = (productsNumber) => {
    setProductNumber(productsNumber);
  };

  // ✅ Get and decode the token
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.warn("No token found in localStorage");
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          // "https://e-commerce-backend-b8fd.onrender.com/api/Products/seller",
          "https://e-commerce-backend-b8fd.onrender.com/api/getProducts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const fetchedProducts = response.data;
        setProducts(fetchedProducts);
        countingNumberProduct(fetchedProducts); // Call after setting products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchProducts();
  }, [token]);

  {
    /** function that counting the product numbers */
  }
  const countingNumberProduct = (products) => {
    const count = products.length;
    console.log("Number of products fetched:", count);
    setProductNumber(count);
  };

  return (
    <div className=" flex">
      {/** Sidebar */}

      <div
        className={`bg-white
            ${
              isMobile
                ? "fixed bottom-0 left-0 right-0 flex justify-around py-2 z-50 "
                : `sidebar fixed z-20   ${isHovered ? "" : "collapsedSideBar"}`
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
            className={` sideBarButton p-2 rounded transition-all duration-200 ${
              componentChange === "dashboard"
                ? "bg-gray-300 text-black"
                : "hover:bg-gray-300 hover:text-white"
            }`}
          >
            <MdSpaceDashboard
              className={`md:size-6 size-6 transition-all duration-200`}
            />
            {!isMobile && <span className={`sideBarLabel`}>Dashboard</span>}
          </button>

          {/* Sales */}
          <button
            onClick={() => setComponentChange("order")}
            className={`sideBarButton p-2 rounded sideBarButton transition-all duration-200 text-black ${
              componentChange === "order"
                ? "bg-gray-300 text-black"
                : "hover:bg-gray-300 hover:text-white"
            }`}
          >
            <MdShoppingCart className={`md:size-6 size-6 `} />
            {!isMobile && <span className={`sideBarLabel`}>Order</span>}
          </button>
          {/*Products */}
          <button
            onClick={() => setComponentChange("products")}
            className={` sideBarButton p-2 rounded  transition-all duration-200 text-black ${
              componentChange === "products"
                ? "bg-gray-300 text-black"
                : "hover:bg-gray-300 hover:text-white"
            }`}
          >
            <MdShoppingBag className={`md:size-6 size-6`} />
            {!isMobile && <span className={`sideBarLabel`}>Products</span>}
          </button>
          {/* Settings */}
          <Link
            to="/settings"
            className="p-2 rounded sideBarButton transition-all duration-200  hover:text-white hover:bg-gray-300 text-black"
          >
            <MdSettings className="md:size-6 size-6 " />
            {!isMobile && <span className={`sideBarLabel`}>Settings</span>}
          </Link>

          {/* Log Out */}
          <Link
            to="/logout"
            className="p-2 rounded sideBarButton transition-all hover:bg-gray-300 text-red-400"
          >
            <MdLogout className="md:size-6 size-6" />
            {!isMobile && <span className={`sideBarLabel`}>Log Out</span>}
          </Link>
        </nav>
      </div>
      {/* Main Content */}
      <div className=" flex-1 pb-96 md:ml-[56px] ml-2 me-2 max-w-[1440px]">
        {/* Header */}
        <div
          className={`bg-slate-100 max-w-[1440px] min-w-64 flex sticky top-0 z-10 justify-end pe-10 py-2 gap-4 items-center text-primary   transition-shadow ${
            shadow ? "shadow-md" : ""
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
        <div className="flex  ">
          {/* Main Content */}
          <div className="flex-1  md:p-6">
            {changeSection === "createProduct" ? (
              <div>
                <CreateNewProducts
                  changeSection={changeSection}
                  setChangeSection={setChangeSection} // Pass the setter function here
                />
              </div>
            ) : (
              <>
                <div>
                  <UpdatedNumbers availableNumber={productsNumber} />
                </div>
                <section>
                  {componentChange === "dashboard" && (
                    <DashboardTable productsData={products} loading={loading} />
                  )}
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
                        conditionState={"Dashboard"}
                        productsData={products}
                        componentStyleData={{
                          componentName: " ",
                          componentMarginLarg: " ",
                        }}
                      />
                    </div>
                  )}
                  {componentChange === "order" && (
                    <>
                      <DashboardTable
                        productsData={products}
                        loading={loading}
                      />
                    </>
                  )}
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
