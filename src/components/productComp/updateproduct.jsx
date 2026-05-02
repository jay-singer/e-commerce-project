import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Updateproduct = ({
  setShowUpdateForm,
  setEditingProduct,
  editingProduct,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const [attributes, setAttributes] = useState([{ key: "", value: "" }]);
  const [image, setImage] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);

  // ================= LOAD PRODUCT =================
  useEffect(() => {
    if (editingProduct) {
      reset({
        productName: editingProduct.productName,
        price: editingProduct.price,
        brand: editingProduct.brand,
        discount: editingProduct.discount,
        stock: editingProduct.stock,
        productDescription: editingProduct.productDescription,
        variants: editingProduct.variants,
      });

      // Convert attributes object → array
      if (
        editingProduct.attributes &&
        typeof editingProduct.attributes === "object"
      ) {
        const formatted = Object.entries(
          editingProduct.attributes
        ).map(([key, value]) => ({ key, value }));

        setAttributes(formatted.length ? formatted : [{ key: "", value: "" }]);
      }
    }
  }, [editingProduct, reset]);

  // ================= CLEANUP =================
  useEffect(() => {
    return () => {
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImages]);

  // ================= ATTRIBUTE =================
  const addAttribute = () =>
    setAttributes([...attributes, { key: "", value: "" }]);

  const removeAttribute = (index) =>
    setAttributes(attributes.filter((_, i) => i !== index));

  const handleAttributeChange = (index, field, value) => {
    const updated = [...attributes];
    updated[index][field] = value;
    setAttributes(updated);
  };

  // ================= IMAGE =================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreviewImages([URL.createObjectURL(file)]);
  };

  // ================= UPDATE =================
  const handleUpdate = async (id, data) => {
    try {
      const updated = await updateProduct(id, data);
      const updatedList = products.map((p) =>
        p._id === id ? updated : p
      );
      setProducts(updatedList);
    } catch (err) {
      console.error(err);
    }
  };

	//InputStyle
	const InputStyle = "w-full px-4 py-3 border-2 border-gray-400 bg-white text-gray-800 rounded-lg outline-none focus:border-navColor focus:ring-2 focus:ring-navColor/20 transition"
  return (
    // OVERLAY
    <div
      onClick={() => setShowUpdateForm(false)}
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* ================= LEFT FORM ================= */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 relative">
          {/* HEADER */}
		
						<button onClick={()=>setShowUpdateForm(false)} className="absolute top-0 left-0 w-[60px] bg-slate-500 h-[60px] flex items-center justify-center rounded-ee-[30px] text-4xl text-warning">X</button>
					
          <h2 className="text-3xl font-bold text-navColor mb-6 text-center">
            Update Product
          </h2>

         <form
  onSubmit={handleSubmit(onsubmit)}
  className="space-y-6"
>
  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* PRODUCT NAME */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">
        Product Name
      </label>
      <input {...register("productName")} className={InputStyle} />
    </div>

    {/* PRICE */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">
        Price
      </label>
      <input type="number" {...register("price")} className={InputStyle}  />
    </div>

    {/* BRAND */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">
        Brand
      </label>
      <input {...register("brand")} className={InputStyle}  />
    </div>

    {/* DISCOUNT */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">
        Discount (%)
      </label>
      <input type="number" {...register("discount")} className={InputStyle}  />
    </div>

    {/* STOCK */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">
        Stock
      </label>
      <input type="number" {...register("stock")} className={InputStyle}  />
    </div>

    {/* VARIANTS */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-700">
        Variants
      </label>
      <input {...register("variants")}className={InputStyle}  />
    </div>
  </div>

  {/* DESCRIPTION (FULL WIDTH FIX) */}
  <div className="flex flex-col">
    <label className="mb-2 text-sm font-semibold text-gray-700">
      Description
    </label>
    <textarea
      {...register("productDescription")}
      className={`${InputStyle} form-input min-h-[120px] resize-none`}
      placeholder="Write product description..."
    />
  </div>

  {/* ATTRIBUTES */}
  <div className="space-y-3">
    <h3 className="font-semibold text-navColor text-lg">
      Attributes
    </h3>

    {attributes.map((attr, index) => (
      <div key={index} className="grid grid-cols-2 gap-3 items-center">
        <input
          value={attr.key}
          onChange={(e) =>
            handleAttributeChange(index, "key", e.target.value)
          }
          placeholder="Key:"
         className={InputStyle} 
        />

        <div className="flex gap-2">
          <input
            value={attr.value}
            onChange={(e) =>
              handleAttributeChange(index, "value", e.target.value)
            }
            placeholder="Value:"
           className={InputStyle} 
          />

          <button
            type="button"
            onClick={() => removeAttribute(index)}
            className="px-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      </div>
    ))}

    <button
      type="button"
      onClick={addAttribute}
      className="text-sm text-navColor font-medium hover:underline"
    >
      + Add Attribute
    </button>
  </div>

  {/* IMAGE */}
  <div className="flex flex-col">
    <label className="mb-2 text-sm font-semibold text-gray-700">
      Upload Image
    </label>
    <input type="file" onChange={handleImageChange} className="input" />
  </div>

  {/* BUTTONS */}
  <div className="flex justify-end gap-4 pt-4">
    <button
      type="button"
      onClick={() => setShowUpdateForm(false)}
      className="px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="px-6 py-2 rounded-xl bg-navColor text-white hover:opacity-90"
    >
      Update Product
    </button>
  </div>
</form>
        </div>

        {/* ================= RIGHT PREVIEW ================= */}
        <div className="w-full md:w-[320px] border-t md:border-t-0 md:border-l p-5 bg-gray-50 ">
          <h3 className="font-semibold text-lg text-navColor mb-4">
            Image Preview
          </h3>
          
          {/* CURRENT IMAGE */}
          {editingProduct?.productImage && (
            <div className="mb-4">
              <p className="text-sm text-gray-500">Current</p>
              <img
                src={editingProduct.productImage}
                alt="product"
                className="rounded-xl mt-2 w-full h-40 object-cover shadow"
              />
            </div>
          )}

          {/* NEW IMAGE */}
          {previewImages.length > 0 && (
            <div>
              <p className="text-sm text-gray-500">New</p>
              <img
                src={previewImages[0]}
                alt="preview"
                className="rounded-xl mt-2 w-full h-40 object-cover shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* ================= REUSABLE STYLES ================= */}
      <style>
        {`
.input {
  @apply w-full  px-4 py-3 border-2 border-gray-300 bg-black rounded-lg outline-none transition;
}

.input:focus {
  @apply border-navColor ring-2 ring-navColor/20;
}
        `}
      </style>
    </div>
  );
};

export default Updateproduct;