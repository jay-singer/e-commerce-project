import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getSellerIdFromToken } from "../../utilities/utlilities";

function CreateNewProducts({ changeSection, setChangeSection }) {
  const [categories, setCategories] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  // ✅ NEW: attribute state
  const [attributes, setAttributes] = useState([
    { key: "", value: "" },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const selectedImage = watch("images");

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

  // ✅ attribute handlers
  const handleAttributeChange = (index, field, value) => {
    const updated = [...attributes];
    updated[index][field] = value;
    setAttributes(updated);
  };

  const addAttribute = () => {
    setAttributes([...attributes, { key: "", value: "" }]);
  };

  const removeAttribute = (index) => {
    const updated = attributes.filter((_, i) => i !== index);
    setAttributes(updated);
  };

  const onSubmit = async (data) => {
    try {
      const token = getSellerIdFromToken();

      const formDataToSend = new FormData();

      formDataToSend.append("productName", data.productName);
      formDataToSend.append("price", Number(data.price));
      formDataToSend.append(
        "productDescription",
        data.productDescription
      );
      formDataToSend.append("categoryId", data.categoryId);
      formDataToSend.append("stock", Number(data.stock));
      formDataToSend.append("brand", data.brand);
      formDataToSend.append("discount", Number(data.discount || 0));

      // variants
      const variantsArray = data.variants
        ? data.variants.split(",").map((v) => v.trim())
        : [];
      formDataToSend.append("variants", JSON.stringify(variantsArray));

      // ✅ attributes (key-value → object)
      const attributesObject = {};
      attributes.forEach((attr) => {
        if (attr.key && attr.value) {
          attributesObject[attr.key] = attr.value;
        }
      });

      formDataToSend.append(
        "attributes",
        JSON.stringify(attributesObject)
      );

      // image
      if (data.images && data.images[0]) {
        formDataToSend.append("images", data.images[0]);
      }

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

      reset();
      setImageFile(null);
      setAttributes([{ key: "", value: "" }]); // reset attributes
      setChangeSection && setChangeSection("allProducts");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setValue("images", e.target.files);
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
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-5 lg:w-[60%] border border-gray-300 shadow-lg rounded w-full"
        >
          <input
            {...register("productName", { required: true })}
            placeholder="Product Name"
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <input
            {...register("brand", { required: true })}
            placeholder="Brand"
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <input
            type="number"
            {...register("discount")}
            placeholder="Discount (%)"
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <select
            {...register("categoryId", { required: true })}
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
            {...register("stock", { required: true })}
            placeholder="Stock"
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          <textarea
            {...register("productDescription")}
            placeholder="Product Description"
            className="w-full p-[4px] border border-gray-300 rounded"
          ></textarea>

          <input
            {...register("variants")}
            placeholder="Variants (e.g. red, blue, large)"
            className="w-full p-[4px] border border-gray-300 rounded"
          />

          {/* ✅ ATTRIBUTES UI */}
          <div className="space-y-2">
            {attributes.map((attr, index) => (
              <div key={index} className="flex gap-2">
                <input
                  value={attr.key}
                  onChange={(e) =>
                    handleAttributeChange(
                      index,
                      "key",
                      e.target.value
                    )
                  }
                  placeholder="Key (e.g. color)"
                  className="w-full p-[4px] border border-gray-300 rounded"
                />

                <input
                  value={attr.value}
                  onChange={(e) =>
                    handleAttributeChange(
                      index,
                      "value",
                      e.target.value
                    )
                  }
                  placeholder="Value (e.g. red)"
                  className="w-full p-[4px] border border-gray-300 rounded"
                />

                <button
                  type="button"
                  onClick={() => removeAttribute(index)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  X
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addAttribute}
              className="bg-gray-300 px-2 py-1 rounded"
            >
              + Add Attribute
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            {...register("images")}
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

      {imageFile && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Selected Image:</p>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Preview"
            className="mt-2 w-32 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default CreateNewProducts;