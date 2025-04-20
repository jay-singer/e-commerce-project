import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSellerIdFromToken } from "../../utilities/utlilities";

function CreateNewProducts({ changeSection, setChangeSection }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    productDescription: "",
    category_id: "",
    stock: "",
    productImage: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-backend-b8fd.onrender.com/api/getSidebarCategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        productImage: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = getSellerIdFromToken();
      const formDataToSend = new FormData();
      formDataToSend.append("productName", formData.productName);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("productDescription", formData.productDescription);
      formDataToSend.append("category_id", formData.category_id);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("productImage", formData.productImage);

      console.log(formData, "hello");
      const response = await axios.post(
        "https://e-commerce-backend-b8fd.onrender.com/api/createProduct",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Product created:", response.data);
      setChangeSection && setChangeSection("allProducts");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mb-5">
      <button
        onClick={() => changeSection && setChangeSection("allProducts")}
        className="bg-navColor p-1 rounded self-start text-white flex gap-1 text-nowrap items-center justify-center ms-4 md:ms-0"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </span>
        All Products
      </button>

      <div className="flex justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-5 lg:w-[60%] border border-gray-300 shadow-lg rounded w-full"
        >
          <input
            type="text"
            name="productName"
            value={formData.productName}
            placeholder="Product Name"
            onChange={handleInputChange}
            required
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="Price"
            onChange={handleInputChange}
            required
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            required
            className="w-full p-[4px] border border-gray-300 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            placeholder="Stock"
            onChange={handleInputChange}
            required
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <textarea
            name="productDescription"
            value={formData.productDescription}
            placeholder="Product Description"
            onChange={handleInputChange}
            className="w-full p-[4px] border border-gray-300 rounded"
          ></textarea>

          <input
            type="file"
            name="productImage"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded text-gray-300"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Create Product
          </button>
        </form>
      </div>

      {formData.productImage && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Selected Image:</p>
          <img
            src={URL.createObjectURL(formData.productImage)}
            alt="Preview"
            className="mt-2 w-32 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default CreateNewProducts;
