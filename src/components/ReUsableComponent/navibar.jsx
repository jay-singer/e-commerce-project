import { useCallback, useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import SearchComp from "./search";

const Navbar = ({ showCategory, setShowCategory }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("");

  const location = useLocation();

  // Resize handler
  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 760);
  }, []);

  // Scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsNavbarVisible(scrollY > lastScrollY && scrollY > 10);
    setLastScrollY(scrollY);
  }, [lastScrollY]);

  // Listen for scroll and resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  // Handle category toggle
  const toggleCategory = () => {
    if (isSmallScreen) setShowCategory(!showCategory);
  };

  // Dynamically update navbar background color based on route
  useEffect(() => {
    if (location.pathname.startsWith("/elecronicmaterial")) {
      setBgColor("bg-[#FFC95C]");
    } else {
      setBgColor("bg-white"); // default or reset if not matched
    }
  }, [location.pathname]);

  const categoryLinks = [
    "Furniture products",
    "Electronic products",
    "Sport products",
  ];

  return (
    <nav
      className={`fixed left-0 right-0 shadow-md w-full max-w-[1440px] -translate-y-[70px] mx-auto transition-all duration-300 flex  ${
        isNavbarVisible
          ? `md:-translate-y-[51px] -translate-y-[80px] z-50 ${bgColor}`
          : "translate-y-[-100%] opacity-0 pointer-events-none z-20"
      }`}
    >
      <div className=" flex-1 ms-10">
        <div className="px-2 mx-auto ">
          <div className="flex md:py-3 h-[30px] md:h-[60px] my-1 md:m-0  ">
            <div className="flex space-x-3 md:space-x-1">
              <button
                onClick={toggleCategory}
                onMouseEnter={() =>
                  window.innerWidth > 500 && setShowCategory(false)
                }
                onMouseLeave={() =>
                  window.innerWidth > 500 && setShowCategory(true)
                }
                className="bg-green-500 text-white p-1 md:p-2 gap-1 rounded-lg flex items-center hover:bg-green-600 z-50"
              >
                <FaBarsStaggered size={15} />
                <span className="text-[10px] md:text-base whitespace-nowrap">
                  All Category
                </span>
              </button>
              {isSmallScreen && <SearchComp size={15} />}
            </div>

            <div className="ml-4 h-full">
              <div className=" flex items-center space-x-4  h-full text-">
                <Link
                  to="/"
                  className="text-gray-800  hover:bg-gray-200 px-3 h-full rounded-md text-sm font-medium flex items-center"
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

              {/* <div className="md:hidden bg-black flex items-center justify-center ml-[12px]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {isMenuOpen ? (
                  <IoMdClose size={20} />
                ) : (
                  <FaBarsStaggered size={20} />
                )}
              </button>
            </div> */}

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
            className="bg-slate-100 absolute left-[1px] right-[1px] transform -translate-y-full opacity-0 transition-transform duration-300 ease-in-out md:top-[49px] top-[33px] w-full shadow-lg py-3 ps-3"
            onMouseEnter={() =>
              window.innerWidth > 500 && setShowCategory(false)
            }
            onMouseLeave={() =>
              window.innerWidth > 500 && setShowCategory(true)
            }
            style={{
              opacity: !showCategory ? 1 : 0,
              transform: !showCategory ? "translateY(0)" : "-translate-y-full",
            }}
          >
            <ul className="text-gray-800 w-fit items-center p-[2px]">
              {categoryLinks.map((name) => (
                <li
                  key={name}
                  className="hover:bg-selected rounded-sm mt-[3px] flex"
                >
                  <Link
                    className="px-4 w-full"
                    to={`/${name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Link
        to={"/shop"}
        className=" me-7 flex justify-center items-center text-secondary hover:underline text"
      >
        {" "}
        Shop now!
      </Link>
    </nav>
  );
};

export default Navbar;
