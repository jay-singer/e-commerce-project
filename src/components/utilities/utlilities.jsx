import { useEffect } from "react";

export const formHiding = (funct) => {
  funct();
  return;
};

export const getSellerIdFromToken = () => {
  const token = sessionStorage.getItem("authToken");

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
