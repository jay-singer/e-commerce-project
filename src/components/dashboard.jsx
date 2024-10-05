import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const DashboardTable = () => {
  const [products, setProducts] = useState([]);
  const [addingPost, setAddingPost] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProduct, setEditingProduct] = useState({ name: "", price: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      toast.error("Error fetching products.");
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product (POST request with image)
  const handleAddProduct = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name ", data.name);
      formData.append("price", data.price);
      formData.append("image", data.image[0]); // Assuming the server accepts the image as 'image'

      const response = await axios.post(
        "http://localhost:3000/products",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setProducts((prev) => [...prev, response.data]);
      setAddingPost(false);
      reset();
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error(
        "Error adding product: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error adding product:", error);
    }
  };

  // Delete product by ID (DELETE request)
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Error deleting product.");
      console.error("Error deleting product:", error);
    }
  };

  // Edit product by ID (PUT request)
  const handleEditProduct = async (id) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, editingProduct);
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id ? { ...product, ...editingProduct } : product
        )
      );
      setEditingProductId(null);
      toast.success("Product updated successfully!");
    } catch (error) {
      toast.error("Error updating product.");
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 border border-black">
      {/* Toastify Container */}
      <ToastContainer />

      {/* Overlay for form and blur background */}
      <div className={`relative ${addingPost ? "blur-sm" : ""}`}>
        <h2 className="text-2xl font-bold mb-6 md:text-start text-center">
          Product Dashboard
        </h2>

        {/* Create new Product Button */}
        <div className="mb-6">
          <button
            onClick={() => setAddingPost(true)}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
          >
            Create new product
          </button>
        </div>

        {/* Products Table */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-navColor text-white">
            <tr>
              <th className="py-2 px-4 border-e border-white">ID</th>
              <th className="py-2 px-4 border-e border-white">Product Name</th>
              <th className="py-2 px-4 border-e border-white">Price</th>
              <th className="py-2 px-4 border-e border-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-e border-gray-400 hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-e border-gray-400 text-end">
                  {product.id}
                </td>
                <td className="py-2 px-4 border-e border-gray-400 text-end">
                  {product.name}
                </td>
                <td className="py-2 px-4 border-e border-gray-400 text-end">
                  ${product.price}
                </td>
                <td className="py-2 px-4 flex space-x-2 justify-end">
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
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

      {/* Add Product Form Modal */}
      {addingPost && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
              <input
                type="text"
                placeholder="Product Name"
                {...register("name", { required: "Product name is required" })}
                className="block w-full mb-4 p-2 border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
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
