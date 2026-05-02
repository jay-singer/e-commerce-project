import React, { useEffect, useState } from "react";
import { useFetchAllProducts } from "../../utilities/utlilities";
import {
  getWishlist,
  removeFromWishlist,
} from "../../utilities/utlilities";

const WishList = () => {
  const token = sessionStorage.getItem("authToken");
  const { products, loading } = useFetchAllProducts(token);

  const [wishlistProducts, setWishlistProducts] = useState([]);

  // Get product that are added to wishid
useEffect(() => {
  const wishlist = getWishlist();

  // normalize wishlist ids
  const wishlistIds = wishlist.items.map(
    (item) => String(item._id) 
    );
    //Filtering products according to their id
  const filtered = products.filter((product) =>
    wishlistIds.includes(String(product._id))
  );
  setWishlistProducts(filtered);
}, [products]);

  const handleRemove = (id) => {
  removeFromWishlist(id);

  setWishlistProducts((prev) =>
    prev.filter((item) => item._id !== id)
  );
};

// Loading if we are waiting to get product from backend
  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="animate-pulse text-gray-400 text-lg">
          Loading wishlist...
        </div>
      </div>
    );

  return (
    <div className="md:mt-[130px]  min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-100 px-4 sm:px-6 lg:px-12 pt-[20px] pb-10">
      
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary">
          My Wishlist
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Save your favorite products in one place
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlistProducts.map((item) => (
   
          <div
            key={item._id}
            className="group relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-2xl transition duration-500"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-full h-[240px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
                  ❤️
                </button>
                <button className="bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
                  🛒
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <button className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium shadow-lg hover:bg-navColor hover:text-white transition">
                  Quick View
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-green-600 transition">
                {item.productName}
              </h3>

              <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                ★★★★☆
                <span className="text-gray-400 text-xs ml-1">(120)</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button className="text-sm px-4 py-2 rounded-lg bg-secondary text-white hover:bg-navColor transition">
                  Add to Cart
                </button>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border border-green-400/30" />
          </div>
        ))}
      </div>

      {wishlistProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <div className="text-6xl mb-4">💔</div>
          <p className="text-lg">Your wishlist feels empty</p>
          <p className="text-sm">Start adding products you love</p>
        </div>
      )}
    </div>
  );
};

export default WishList;