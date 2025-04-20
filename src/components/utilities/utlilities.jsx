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
