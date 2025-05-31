import React, { useState } from "react";
import { useCart } from "./../utilities/utlilities";

const AddToCartForm = ({
  product,
  openingCartForm,
  maxQty = 20,
  productNum = 0,
}) => {
  const [quantity, setQuantity] = useState("");
  const { addProductIdToCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    const qty = parseInt(quantity);
    if (qty > 0 && qty <= maxQty) {
      // Pass product._id and qty directly
      addProductIdToCart(product.product_id, qty);
      console.log(product.product_id);
      openingCartForm(); // close modal
      productNum = qty;
    } else {
      alert(`Please enter a quantity between 1 and ${maxQty}`);
    }
  };

  return (
    <div
      onClick={openingCartForm}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[2px] flex justify-center items-center z-50"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white p-6 rounded-lg w-full max-w-[500px] relative shadow-lg max-h-[281px]"
      >
        <button
          onClick={openingCartForm}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl text-center text-green-600 font-semibold mb-6">
          Purchasing Quantity
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400">PRODUCT NAME:</label>
            <p className="text-lg font-semibold text-gray-900">
              {product.productName}
            </p>
          </div>

          <div className="flex items-center">
            <label className="w-24 text-sm text-gray-500">QUANTITY :</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              max={maxQty}
              min={1}
              required
              className="flex-1 border border-green-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
            />
            <span className="ml-2 text-gray-600">
              MAX <strong>{maxQty}</strong>
            </span>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToCartForm;
