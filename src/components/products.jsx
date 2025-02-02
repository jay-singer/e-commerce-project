// import axios from "axios";
// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import SingleProduct from "./singleProduct";

const Products = () => {
  const [screenResing, setScreenResizing] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setScreenResizing(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set state

    return () => window.removeEventListener("resize", handleResize);
  });

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="lg:size-4 size-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
  const proStore = [
    {
      id: 1,
      ProName: "Minimal LCD chair",
      price: "$180",
      pic: "/assets/products/Container.png",
      star: star,
    },
    {
      id: 2,
      ProName: "Modern Sofa",
      price: "$103",
      pic: "/assets/products/Container (7).png",
      star: star,
    },
    {
      id: 3,
      ProName: "Microfiber Sofa",
      price: "$130",
      pic: "/assets/products/Container (1).png",
      star: star,
    },
    {
      id: 4,
      ProName: "Wood Coffee Tables",
      price: "$100",
      pic: "/assets/products/Container (2).png",
      star: star,
    },
    {
      id: 5,
      ProName: "Acacia Wood Club ",
      price: "$100",
      pic: "/assets/products/Container (3).png",
      star: star,
    },
    {
      id: 6,
      ProName: "Amalia Cowhide Bench ",
      price: "$130",
      pic: "/assets/products/Container (4).png",
      star: star,
    },
    {
      id: 7,
      ProName: "Juno-Hinged Lid Storage",
      price: "$180",
      pic: "/assets/products/Container (5).png",
      star: star,
    },
    {
      id: 8,
      ProName: "Delicia 3 Piece Living Room",
      price: "$120",
      pic: "/assets/products/Container (6).png",
      star: star,
    },
  ];
  // State to store products
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false); // Loading state for button

  // Function to fetch products
  // const loadingProduct = async () => {
  //   setLoading(true); // Set loading to true when fetching begins
  //   try {
  //     const response = await axios.get(
  //       `https://e-commerce-backend-b8fd.onrender.com/signup/`
  //     );
  //     setProducts(response.data);
  //     console.log(response); // Update state with fetched data
  //     toast.success("Products loaded successfully!"); // Success toast
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     toast.error("Failed to load products. Please try again!"); // Error toast
  //   } finally {
  //     setLoading(false); // Reset loading state after fetch completes
  //   }
  // };

  return (
    <div className=" mb-10">
      <div className=" w-full md:grid md:grid-cols-3 md:gap-4 md:p-4    lg:flex flex-wrap  lg:gap-5 lg:p-5 lg:justify-center  xl:grid xl:grid-cols-4  xl:p-5  lg:w-[1020px] max-w-[1440px]   xl:gap-5 mb-4">
        {proStore.map((item) => (
          <div className="" key={item.id}>
            <SingleProduct items={item} />
          </div>
        ))}
      </div>
      {screenResing && (
        <div className=" w-full flex justify-around items-center">
          <div className="flex">
            <Button
              data={"Next Page"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 font-semibold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              }
            />
          </div>
          <div className=" lg:px-4 py-2 flex justify-center gap-2">
            <span className="text-center text-slate-400">Page</span>
            <span className="text-center text-slate-400">1</span>
            <span className="text-center text-slate-400">of</span>
            <span className="text-center text-slate-400">100</span>
            <span className="bg-navColor flex justify-center items-center px-1 gap-1 text-white font-semibold rounded">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      )}
      {!screenResing && (
        <Link to={`*`} className=" flex justify-center mt-2">
          <Button width={` w-[40%]`} data={`Explore More`} />
        </Link>
      )}
    </div>
  );
};

export default Products;
