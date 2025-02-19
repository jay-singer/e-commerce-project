import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardTable = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-backend-b8fd.onrender.com/api/getProducts"
      );
      setProducts(response.data);
    } catch (error) {
      toast.error("Error fetching products.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto ">
      <ToastContainer />
      <div className="flex flex-col md:flex-row  text-[14px] text-[rgb(85,85,85)] mt-4 gap-2">
        {/* Wished Products Table */}
        <div className="flex-auto">
          <h2 className=" font-medium text-[#555555] mb-4">Wished Products</h2>
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="text-[13px]">
                <th className="px-1 text-start ">Name</th>
                <th className="px-1 text-start me-2">Unit Price</th>
                <th className="px-1 me-1">Quantity</th>
                <th className="px-1 me-1">Status</th>
                <th className="px-1 text-end">Date</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className=" ">
                  <td className=" px-1  text-start flex  gap-2 mb-2 items-end text-[13px]">
                    <img
                      className="w-[30px]"
                      src={product.productImage}
                      alt=""
                    />
                    <span>{product.productName}</span>
                  </td>
                  <td className="px-1 mb-2 text-start text-[13px] text-navColor">
                    ${product.price}
                  </td>
                  <td className="px-1 mb-2 text-center text-[13px]">3</td>
                  <td className="px-1 ">
                    <span
                      className={`px-2 py-1 rounded text-white  ${
                        product.status === "Accepted"
                          ? "bg-green-500 text-[12px]"
                          : "bg-yellow-500 text-[9px]"
                      }`}
                    >
                      {product.status || "Pending"}
                    </span>
                  </td>
                  <td className="px-1 mb-2 text-end text-[11px]">
                    28 Mar 2023
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="bg-[#d1d0d0] w-[2px]"></span>

        {/* Expired Products Table */}
        <div className=" flex-auto">
          <h2 className="font-medium text-[#555555] mb-4 ">Expired Products</h2>
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-1 text-start">Name</th>
                <th
                  className="px-1 text-start
                "
                >
                  Unit Price
                </th>
                <th className="px-1 text-start">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="text-start">
                  <td className=" px-1  text-start flex  gap-2 mb-2 items-end text-[13px]">
                    <img
                      className="w-[30px]"
                      src={product.productImage}
                      alt=""
                    />
                    <span> {product.productName}</span>
                  </td>
                  <td className="px-1 mb-2 text-start text-[13px] text-navColor">
                    ${product.price}
                  </td>
                  <td className="px-1 mb-2 text-center text-[13px]">3</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
