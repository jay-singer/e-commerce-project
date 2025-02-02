import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import SearchComp from "./search";

const Navbar = ({ showCategory, setShowCategory }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 500);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 50) {
        // Scrolling down & passed UpperHeader1, show Navbar
        setIsNavbarVisible(true);
      } else {
        // Scrolling up, hide Navbar
        setIsNavbarVisible(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-0 right-0 shadow-md w-full z-10 max-w-[1440px] mx-auto bg-white transition-transform duration-300 ${
        isNavbarVisible
          ? "md:translate-y-[78px] translate-y-[62px]"
          : "translate-y-[0]"
      }`}
    >
      <div className="px-2 mx-auto">
        <div className="flex items-center h-[30px] md:h-[60px] my-1 md:m-0">
          <div className="flex space-x-3 md:space-x-1">
            <button
              onMouseEnter={() => setShowCategory(false)}
              onMouseLeave={() => setShowCategory(true)}
              className="bg-green-500 text-white p-[3px] md:p-2 md:gap-1 rounded-lg flex items-center hover:bg-green-600 z-50"
            >
              <FaBarsStaggered size={15} />
              <span className="text-[10px] md:text-base whitespace-nowrap">
                All Category
              </span>
            </button>
            {isSmallScreen && <SearchComp size={15} />}
          </div>

          <div className="ml-4">
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contactUs"
                className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>

            <div className="md:hidden flex items-center justify-center ml-[12px]">
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

      {!showCategory && (
        <div
          id="categoryId"
          className="bg-slate-100 absolute left-[1px] right-[1px] transform -translate-y-full opacity-0 transition-transform duration-300 ease-in-out md:top-[49px] top-[33px] w-full shadow-lg"
          onMouseEnter={() => setShowCategory(false)}
          onMouseLeave={() => setShowCategory(true)}
          style={{
            opacity: !showCategory ? 1 : 0,
            transform: !showCategory ? "translateY(0)" : "-translate-y-full",
          }}
        >
          <ul className="text-gray-800 w-fit items-center p-[2px]">
            {[
              "All",
              "New Arrivals",
              "Hot Sale",
              "Furniture",
              "Sports Staff",
              "Table",
              "Chair",
              "Food Products",
              "Kitchen Staff",
              "Electronics Materials",
              "Benches",
            ].map((name) => (
              <li
                key={name}
                className="hover:bg-selected rounded-sm mt-[2px] flex"
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
          <Outlet />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
