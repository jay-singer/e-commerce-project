import { useEffect, useState } from "react";
import {
  MdLogout,
  MdSettings,
  MdShoppingBag,
  MdShoppingCart,
  MdSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";
import DashboardTable from "../components/dashboard";

const SellerDashboard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
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
          className={`bg-slate-100 text-primary transition-all duration-500 ease-in-out ${
            isHovered ? "md:w-48 w-48" : "w-20"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <nav className="flex flex-col space-y-2 py-10 px-2">
            {[
              {
                to: "/sellerDashboard",
                icon: <MdSpaceDashboard />,
                label: "Dashboard",
              },
              { to: "#products", icon: <MdShoppingCart />, label: "Sales" },
              { to: "#orders", icon: <MdShoppingBag />, label: "Products" },
              { to: "#settings", icon: <MdSettings />, label: "Settings" },
              {
                to: "#logout",
                icon: <MdLogout />,
                label: "Log Out",
                className: "text-[#C5C5C5]",
              },
            ].map(({ to, icon, label, className = "" }) => (
              <Link
                key={label}
                to={to}
                className={`p-2 hover:bg-selected rounded flex gap-2 items-center ${className}`}
              >
                <span className="md:size-6 size-4 shrink-0">{icon}</span>
                <span
                  className={`sideBarLink transition-all duration-300 ease-in-out ${
                    isHovered ? "inline opacity-100" : "hidden opacity-0"
                  }`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          <section id="dashboard">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <DashboardTable />
          </section>

          <section id="products" className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <p>
              Manage your products here. Add, edit, or remove items from your
              product list.
            </p>
          </section>

          <section id="orders" className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <p>
              Track and manage your orders here. View order details, update
              status, and more.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
