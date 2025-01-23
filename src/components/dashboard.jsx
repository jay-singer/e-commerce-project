import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardTable = () => {
  const [products, setProducts] = useState([]);
  const [addingPost, setAddingPost] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch products from the API
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

  // Add a new product
  const handleAddProduct = async (data) => {
    try {
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("price", data.price);
      formData.append("productDescription", data.productDescription);
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "https://e-commerce-backend-b8fd.onrender.com/api/createProduct",
        formData
      );

      // Log the API response for debugging
      console.log("API Response:", response.data);

      // Update state with the new product details
      setProducts((prev) => [...prev, response.data]);
      toast.success("Product added successfully!");
      reset();
      setAddingPost(false);
    } catch (error) {
      toast.error("Error adding product.");
    }
  };

  // Delete a product by ID
  const handleDeleteProduct = async (_id) => {
    try {
      await axios.delete(
        `https://e-commerce-backend-b8fd.onrender.com/api/deleteProduct/${_id}`
      );
      setProducts((prev) => prev.filter((product) => product._id !== _id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Error deleting product.");
    }
  };

  return (
    <div className="container mx-auto p-8 border border-black">
      <ToastContainer />
      <div className={`relative ${addingPost ? "blur-sm" : ""}`}>
        <h2 className="text-2xl font-bold mb-6 md:text-start text-center">
          Product Dashboard
        </h2>
        <div className="mb-6">
          <button
            onClick={() => setAddingPost(true)}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
          >
            Create new product
          </button>
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-navColor text-white">
            <tr>
              <th className="py-2 px-4 border-e border-white">#</th>
              <th className="py-2 px-4 border-e border-white">Image</th>
              <th className="py-2 px-4 border-e border-white">Product Name</th>
              <th className="py-2 px-4 border-e border-white">Price</th>
              <th className="py-2 px-4 border-e border-white">Description</th>
              <th className="py-2 px-4 border-e border-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product._id}
                className="border-e border-gray-400 hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-e border-gray-400 text-end">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-e border-gray-400">
                  <img
                    src={product.productImage || "https://via.placeholder.com/150"}
                    alt={product.productName}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-e border-gray-400">
                  {product.productName}
                </td>
                <td className="py-2 px-4 border-e border-gray-400">
                  ${product.price}
                </td>
                <td className="py-2 px-4 border-e border-gray-400">
                  {product.productDescription}
                </td>
                <td className="py-2 px-4 flex space-x-2 justify-end">
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {addingPost && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
              <input
                type="text"
                placeholder="Product Name"
                {...register("productName", {
                  required: "Product name is required",
                })}
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
              />
              {errors.productName && (
                <p className="text-red-500">{errors.productName.message}</p>
              )}
              <input
                type="text"
                placeholder="Product Price"
                {...register("price", {
                  required: "Product price is required",
                })}
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
              <textarea
                placeholder="Product Description"
                {...register("productDescription", {
                  required: "Product description is required",
                })}
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
              />
              {errors.productDescription && (
                <p className="text-red-500">
                  {errors.productDescription.message}
                </p>
              )}
              <input
                type="file"
                {...register("image", {
                  required: "Product image is required",
                })}
                className="block w-full mb-4"
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={() => setAddingPost(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTable;
