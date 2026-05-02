import { useCallback, useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import SearchComp from "./search";
import axios from "axios";
import { getSessionToken } from "../utilities/utlilities";

const Navbar = ({ showCategory, setShowCategory }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ NEW: track hovered category
  const [activeCategory, setActiveCategory] = useState(null);

  const location = useLocation();

  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 760);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsNavbarVisible(scrollY > lastScrollY && scrollY > 10);
    setLastScrollY(scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  const toggleCategory = () => {
    if (isSmallScreen) setShowCategory(!showCategory);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/elecronicmaterial")) {
      setBgColor("bg-[#FFC95C]");
    } else {
      setBgColor("bg-white");
    }
  }, [location.pathname]);


  //getting token by using utilities function
  const token = getSessionToken();

useEffect(() => {
  const fetchProductsCategories = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-backend-b8fd.onrender.com/api/getSidebarCategories"
      );

      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProductsCategories(); // always run
}, []);

  return (
    <nav
      className={`fixed left-0 right-0 shadow-md w-full max-w-[1910px] bg-black mx-auto transition-all duration-300 flex ${
        isNavbarVisible
          ? `md:translate-y-[-50px] -translate-y-[80px] z-50 ${bgColor}`
          : "translate-y-[-100%] opacity-0 pointer-events-none z-20"
      }`}
    >
      <div className="flex-1 ms-10">
        <div className="px-2 mx-auto">
          <div className="grid grid-cols-3 md:py-3 h-[30px] md:h-[60px] justify-start my-1 md:m-0">
            <div className="flex space-x-3 md:space-x-1">
              <button
                onClick={toggleCategory}
                onMouseEnter={() =>
                  window.innerWidth > 500 && setShowCategory(false)
                }
                onMouseLeave={() =>
                  window.innerWidth > 500 && setShowCategory(true)
                }
                className="bg-secondary text-white p-1 md:p-2 gap-1 rounded-lg flex items-center hover:bg-navColor z-50"
              >
                <FaBarsStaggered size={15} />
                <span className="text-[10px] md:text-base whitespace-nowrap">
                  All Category
                </span>
              </button>
              {isSmallScreen && <SearchComp size={15} />}
            </div>

            <div className="ml-4 h-full justify-self-center">
              <div className="flex items-center space-x-4 h-full">
                <Link
                  to="/"
                  className="text-gray-800 hover:bg-gray-200 px-3 h-full rounded-md text-sm font-medium flex items-center"
                >
                  Home
                </Link>
                <Link
                  to="/aboutUs"
                  className="text-gray-800 hover:bg-gray-200 px-3 h-full rounded-md text-sm font-medium flex items-center"
                >
                  About
                </Link>
                <Link
                  to="/contactUs"
                  className="text-gray-800 hover:bg-gray-200 px-3 h-full rounded-md text-sm font-medium flex items-center"
                >
                  Contact Us
                </Link>
              </div>

              {isMenuOpen && (
                <div className="md:hidden absolute left-0 right-0 bg-white z-50 top-[38px]">
                  <div className="flex flex-col px-2 py-3 space-y-1">
                    {["Home", "About", "Services", "Contact Us"].map((item) => (
                      <Link
                        key={item}
                        to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                        className="block py-2"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Dropdown */}
        {!showCategory && (
          <div
            id="categoryId"
            className="bg-slate-100 absolute left-[1px] right-[1px] md:top-[49px] top-[33px] w-full shadow-lg py-3 ps-3 flex"
            onMouseEnter={() =>
              window.innerWidth > 500 && setShowCategory(false)
            }
            onMouseLeave={() =>
              window.innerWidth > 500 && setShowCategory(true)
            }
          >
            {/* LEFT: categories */}
            <ul className="text-gray-800 w-fit items-center p-[2px]">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className="hover:bg-selected rounded-sm mt-[3px] flex"
                  onMouseEnter={() => setActiveCategory(category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    className="px-4 w-full"
                    to={`/${category.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* RIGHT: hovered image */}
            <div className="ml-10 flex items-start">
              {activeCategory && (
                <img
                  src={activeCategory.catImage}
                  alt={activeCategory.name}
                  className="w-[200px] h-auto object-cover rounded-md"
                />
              )}
            </div>
          </div>
        )}
      </div>

      <Link
        to={"/shop"}
        className="me-7 flex justify-center items-center text-secondary hover:underline"
      >
        Shop now!
      </Link>
    </nav>
  );
};

export default Navbar;