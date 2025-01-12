import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import SearchComp from "./search";
const Navbar = ({ showCategory, setShowCategory }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle window resize for showing/hiding search on small screens
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 500);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle category list visibility
  const toggleCategoryMenu = () => setShowCategory(!showCategory);

  // Toggle mobile navigation menu visibility
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const Style =
    "text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className=" left-0 right-0 shadow-md fixed w-full z-10 top-[98px] max-w-[1440px] mx-auto bg-white">
      <div className=" mx-auto px-2">
        <div className="flex  items-center  md:h-[60px] h-[30px]  my-1 md:m-0 ">
          <div className="flex  md:space-x-1 space-x-3">
            {/* Toggle Category List Button */}
            <button
              onClick={toggleCategoryMenu}
              className="bg-green-500 text-white md:p-2 md:gap-1  gap-[3px] rounded-lg flex items-center hover:bg-green-600  p-[3px]"
            >
              <span>
                {" "}
                <FaBarsStaggered size={15} />
              </span>

              <span className="text-[10px] md:text-base whitespace-nowrap">
                All Category
              </span>
            </button>

            {/* Search Component for small screens */}
            {isSmallScreen && <SearchComp size={15} />}
          </div>

          <div className=" ml-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className={Style}>
                Home
              </Link>
              <Link to="about" className={Style}>
                About
              </Link>
              <Link to="contactUs" className={Style}>
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-center ml-[12px] ">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 focus:outline-none"
              >
                {isMenuOpen ? (
                  <IoMdClose size={20} />
                ) : (
                  <FaBarsStaggered size={20} />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute left-0 right-0 bg-white z-50 top-[50px] ">
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

      {/* Category List */}
      {!showCategory && (
        <div className="bg-white border border-secondary  px-2 absolute md:left-14">
          <ul className="space-y-2 text-gray-800">
            {[
              { name: "All", path: "/" },
              { name: "New Arrivals", path: "/new-arrivals" },
              { name: "Hot Sale", path: "/hot-sale" },
              { name: "Furniture", path: "/furniture" },
              { name: "Amarture", path: "/amarture" },
              { name: "Table", path: "/table" },
              { name: "Chair", path: "/chair" },
              { name: "Sofa", path: "/sofa" },
              { name: "Mirrors", path: "/mirrors" },
              { name: "Stools", path: "/stools" },
              { name: "Benches", path: "/benches" },
            ].map((item) => (
              <li
                key={item.name}
                className="py-1 px-4 hover:bg-selected rounded-lg"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
