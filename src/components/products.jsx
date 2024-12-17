import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  // State to store products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for button

  // Function to fetch products
  const loadingProduct = async () => {
    setLoading(true); // Set loading to true when fetching begins
    try {
      const response = await axios.get(
        `https://e-commerce-backend-b8fd.onrender.com/signup/`
      );
      setProducts(response.data);
      console.log(response); // Update state with fetched data
      toast.success("Products loaded successfully!"); // Success toast
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to load products. Please try again!"); // Error toast
    } finally {
      setLoading(false); // Reset loading state after fetch completes
    }
  };

  return (
    <div className=" bg-gray-100 ">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
      <div className="text-center">
        <button
          onClick={loadingProduct}
          disabled={loading}
          className={`px-6 py-2 rounded-lg font-medium text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Loading..." : "Fetch Products"}
        </button>
      </div>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-green-600 font-bold mt-2">
                Price: ${product.price}
              </p>
            </li>
          ))
        ) : (
          <p className="text-center col-span-full">
            No products available. Click "Fetch Products" to load data.
          </p>
        )}
      </ul>
      {/* Toastify container to show notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Products;
