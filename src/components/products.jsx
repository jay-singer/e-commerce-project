import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import SingleProduct from "./singleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure the initial value is set

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-backend-b8fd.onrender.com/api/getProducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className={`mb-10 flex flex-col justify-center items-center ${
        !isLargeScreen ? "mt-[4rem]" : "mt-0"
      }`}
    >
      <h1 className="mb-3 text-[#555555] lg:text-[25px] md:text-xl text-base font-semibold">
        OUR PRODUCTS
      </h1>
      <div className="w-full grid grid-cols-2  md:grid-cols-3 md:gap-4 md:p-4 lg:flex flex-wrap lg:gap-5 lg:p-5 lg:justify-center xl:grid xl:grid-cols-4 xl:p-5 lg:w-[1020px] max-w-[1440px] xl:gap-5 mb-4">
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <span className="loader"></span>
          </div>
        ) : (
          products.map((product, index) => (
            <div key={product.id || index}>
              <SingleProduct items={product} />
            </div>
          ))
        )}
      </div>
      {isLargeScreen ? (
        <div className="w-full flex justify-around items-center">
          <Button
            data="Next Page"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 font-semibold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
          />
        </div>
      ) : (
        <Link to="*" className="flex justify-center mt-2">
          <Button width="w-fit" data="Explore More" />
        </Link>
      )}
    </div>
  );
};

export default Products;
