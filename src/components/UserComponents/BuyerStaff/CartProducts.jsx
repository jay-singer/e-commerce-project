import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../../singleProduct"; // adjust the path as needed

const CartProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-backend-b8fd.onrender.com/api/getProducts"
        );
        const allProducts = response.data;

        const storedCart = JSON.parse(localStorage.getItem("productId")) || [];

        // Merge quantity into matched products
        const matchedProducts = storedCart
          .map((cartItem) => {
            const matchedProduct = allProducts.find(
              (product) => product._id === cartItem.id
            );

            if (matchedProduct) {
              return {
                ...matchedProduct,
                quantity: cartItem.quantity,
              };
            }

            return null;
          })
          .filter(Boolean); // Remove nulls

        setProducts(matchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <div className="px-10 place-self-start">
        <Link
          to="/"
          className="flex items-center text-gray-500 hover:text-gray-700 text-sm bg-slate-300 w-fit rounded py-1 px-2 "
        >
          ← Go Back
        </Link>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 md:gap-4 md:p-4 lg:flex flex-wrap lg:gap-5 lg:p-5 lg:justify-center xl:grid-cols-4 xl:p-5 lg:w-[1020px] max-w-[1440px] xl:gap-5 mb-4">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products in your cart.
          </p>
        ) : (
          products.map((product) => (
            <SingleProduct key={product._id} items={product} />
          ))
        )}
      </div>
    </>
  );
};

export default CartProducts;
