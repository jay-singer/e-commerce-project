import React, { useState } from "react";

function CreateNewProducts({ createProductDataObject }) {
  const { changeSection, setChangeSection } = createProductDataObject || {}; // Ensure object exists
  console.log(setChangeSection);

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    bonus: "",
    expireDate: "",
    image: null, // State for product image
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data Submitted:", formData);
    // Add API call here to submit formData
  };

  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-10">
      {/* Navigation Button to return to All Products */}
      <button
        onClick={() => setChangeSection && setChangeSection("allProducts")}
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

      {/* Product Creation Form */}
      <div className="flex justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-5 lg:w-[500px] border border-gray-300 shadow-lg rounded w-full"
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Product Name"
              onChange={handleInputChange}
              required
              className="w-full p-[4px] border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              placeholder="Product Price"
              className="w-full p-[4px] border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Product Category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full p-[4px] border border-gray-300 rounded"
            />
          </div>

          <div>
            <input
              type="text"
              id="bonus"
              placeholder="Product Bonus"
              name="bonus"
              value={formData.bonus}
              onChange={handleInputChange}
              className="w-full p-[4px] border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="expireDate" className="block text-gray-400">
              Expiry Date:
            </label>
            <input
              type="date"
              id="expireDate"
              name="expireDate"
              value={formData.expireDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-gray-400"
            />
          </div>

          {/* Product Image Upload */}
          <div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // Allow only images
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded text-gray-300"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>

      {/* Image Preview */}
      {formData.image && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Selected Image:</p>
          <img
            src={URL.createObjectURL(formData.image)}
            alt="Product Preview"
            className="mt-2 w-32 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default CreateNewProducts;
