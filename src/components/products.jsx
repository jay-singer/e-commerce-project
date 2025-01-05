// import axios from "axios";
// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import SingleProduct from "./singleProduct";

const Products = () => {
  const proStore = [
    {
      id: 1,
      ProName: "Minimal LCD chair",
      price: "$180",
      pic: "/assets/products/Container.png",
    },
    {
      id: 2,
      ProName: "Modern Sofa",
      price: "$103",
      pic: "/assets/products/Container (7).png",
    },
    {
      id: 3,
      ProName: "Microfiber Sofa",
      price: "$130",
      pic: "/assets/products/Container (1).png",
    },
    {
      id: 4,
      ProName: "Wood Coffee Tables",
      price: "$100",
      pic: "/assets/products/Container (2).png",
    },
    {
      id: 5,
      ProName: "Acacia Wood Club ",
      price: "$100",
      pic: "/assets/products/Container (3).png",
    },
    {
      id: 6,
      ProName: "Amalia Cowhide Bench ",
      price: "$130",
      pic: "/assets/products/Container (4).png",
    },
    {
      id: 7,
      ProName: "Juno-Hinged Lid Storage",
      price: "$180",
      pic: "/assets/products/Container (5).png",
    },
    {
      id: 8,
      ProName: "Delicia 3 Piece Living Room",
      price: "$120",
      pic: "/assets/products/Container (6).png",
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
    <div className=" w-full md:grid md:grid-cols-3 md:gap-4 md:p-4 lg:grid-cols-4 lg:flex flex-wrap justify-center lg:gap-5 lg:p-36  lg:w-[1160px] max-w-[1440px] p-3 bg-slate-100 ">
      {proStore.map((item) => (
        <div className="" key={item.id}>
          <SingleProduct items={item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
