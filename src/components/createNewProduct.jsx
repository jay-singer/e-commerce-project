import React, { useState } from "react";

function CreateNewProducts({ createProductDataObject }) {
  const { changeSection, setChangeSection } = createProductDataObject;
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

  // Handle form submission (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data Submitted:", formData);
    // Optionally, you can call an API to submit the form data
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:space-x-10">
=======
    <div className="flex space-x-10">
>>>>>>> 3cfe856068a3aeaeb1e5193d4bef1066a0bb2e6b
      {/* Navigation Button to return to All Products */}
      <button
        onClick={() => {
          setChangeSection("allProducts");
        }}
<<<<<<< HEAD
        className="bg-navColor p-1 rounded self-start text-white flex gap-1 text-nowrap items-center ms-4 md:ms-0 justify-center"
=======
        className="bg-navColor p-1 rounded self-start text-white flex gap-1 text-nowrap items-center justify-center"
>>>>>>> 3cfe856068a3aeaeb1e5193d4bef1066a0bb2e6b
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
        All Product
      </button>

      {/* Product Creation Form */}
<<<<<<< HEAD
      <div className="flex md:justify-center justify-start ">
        <form
          onSubmit={handleSubmit}
          className=" space-y-4 p-5 lg:w-[500px] border border-gray-300 shadow-lg rounded w-full"
=======
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" space-y-4 p-5 lg:w-[500px] border border-gray-300 shadow-lg rounded "
>>>>>>> 3cfe856068a3aeaeb1e5193d4bef1066a0bb2e6b
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
              className="w-full p-[4px] border border-gray-300 rounded "
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
              placeholder="  Product Bonus"
              name="bonus"
              value={formData.bonus}
              onChange={handleInputChange}
              className="w-full p-[4px] border border-gray-300 rounded"
            />
          </div>

          <div className=" flex items-center gap-2">
            <label
              htmlFor="expireDate"
              className="block text-nowrap text-gray-400"
            >
              Product Expiry Date
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
              className="bg-blue-500 text-white p-2 rounded"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
      <div>
        {" "}
        {formData.image && (
          <div className="mt-2">
            <p className="text-sm text-gray-500">Selected Image:</p>
            <img
              src={URL.createObjectURL(formData.image)} // Display the selected image
              alt="Product Preview"
              className="mt-2 w-32  object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNewProducts;
