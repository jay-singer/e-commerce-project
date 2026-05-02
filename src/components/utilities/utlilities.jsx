import { useEffect, useState } from "react";
import Products from './../products';
import axios from "axios";

// Get token from sessionStorage safely
export const getSessionToken = () => {
  try {
    const token = sessionStorage.getItem("authToken");

    // Handle null, undefined, or empty string
    if (!token || token === "undefined" || token === "null") {
      return null;
    }

    return token;
  } catch (error) {
    console.error("Error accessing sessionStorage:", error);
    return null;
  }
};

export const formHiding = (funct) => {
  funct();
  return;
};

export const getSellerIdFromToken = () => {
  const token = localStorage.getItem("authToken");

  if (!token) return null;

  try {
    return token;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const useCart = () => {
  // Ensure localStorage is initialized correctly
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("productId"));
    if (!Array.isArray(existing) || typeof existing[0] === "string") {
      localStorage.setItem("productId", JSON.stringify([]));
    }
  }, []);

  const addProductIdToCart = (id, quantity) => {
    const existingItems = JSON.parse(localStorage.getItem("productId")) || [];
    console.log(id, quantity);
    // Check if the item already exists in the cart
    const index = existingItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      // Update quantity if it exists
      existingItems[index].quantity += quantity;
    } else {
      // Add as new item
      existingItems.push({ id, quantity });
    }

    localStorage.setItem("productId", JSON.stringify(existingItems));
  };

  const clearCart = () => {
    localStorage.setItem("productId", JSON.stringify([]));
  };

  return { addProductIdToCart, clearCart };
};

// fetching products form all categories without any condition
export const useFetchAllProducts = (token) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-backend-b8fd.onrender.com/api/getProducts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
 
    console.log("there is no token")
    if (token) fetchProducts();
  }, [token]);

  return { products, loading };
};

//Adding and managing wishlist products
const WISHLIST_KEY = "wishlist";

// Get wishlist
export const getWishlist = () => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : { userId: null, items: [] };
};

// Save helper
const saveWishlist = (wishlist) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

// 🔥 Call this AFTER login
export const mergeWishlistOnLogin = (userId) => {
  const wishlist = getWishlist();

  // Just attach userId, keep items
  wishlist.userId = userId;

  saveWishlist(wishlist);
  return wishlist;
};
// Add item (guest + logged in)
export const addToWishlist = (userId, item) => {
  const wishlist = getWishlist();

  // Upgrade guest → user (without losing items)
  if (userId && wishlist.userId !== userId) {
    wishlist.userId = userId;
  }

  const exists = wishlist.items.some((product) => product._id === item._id);

  if (!exists) {
    wishlist.items.push(item);
    saveWishlist(wishlist);
  }

  return wishlist;
};
// Remove item
export const removeFromWishlist = (itemId) => {
  const wishlist = getWishlist();

  wishlist.items = wishlist.items.filter((item) => item._id !== itemId);

  saveWishlist(wishlist);
  return wishlist;
};
// Toggle item
export const toggleWishlistItem = (userId, item) => {
  const wishlist = getWishlist();

  // Upgrade guest → user
  if (userId && wishlist.userId !== userId) {
    wishlist.userId = userId;
  }

  const exists = wishlist.items.some((i) => i.id === item.id);

  if (exists) {
    wishlist.items = wishlist.items.filter((i) => i.id !== item.id);
  } else {
    wishlist.items.push(item);
  }

  saveWishlist(wishlist);
  return wishlist;
};
// Check
export const isInWishlist = (itemId) => {
  const wishlist = getWishlist();

  if (!wishlist?.items) return false;

  return wishlist.items.some(
    (item) => String(item._id) === String(itemId)
  );
};



const BASE_URL = "https://e-commerce-backend-b8fd.onrender.com/api";

// helper to get token
const getToken = getSessionToken ()

// ✅ UPDATE FUNCTION
export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/updateProduct/${productId}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Update error:", error);
    throw error;
  }
};

// ✅ DELETE FUNCTION
export const deleteProduct = async (productId) => {
  console.log(productId, "this and that")
  try {
    const response = await axios.delete(
      `${BASE_URL}/deleteProduct/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};