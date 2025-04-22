import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner"; // Importing the spinner
import { Link } from "react-router-dom";
import AddToCartForm from "./ReUsableComponent/addCartProduct";
import Button from "./ReUsableComponent/button";
import SingleProduct from "./singleProduct";

const Products = ({ productDataObject }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [openCartForm, setOpeningCartForm] = useState(false);
  const [productDeta, setProductDeta] = useState({});
  // ✅ Track window size for responsive design
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Get and decode the token
  // const token = sessionStorage.getItem("authToken");

  // ✅ Fetch products with Bearer token
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

  {
    /* OpeningCartForm */
  }

  const OpeningCartForm = (data) => {
    setProductDeta(data);
    setOpeningCartForm((prevState) => !prevState);
  };
  return (
    <div
      className={`flex flex-col justify-center items-center lg:w-full  bg-white ${
        !isLargeScreen
          ? productDataObject.componentMarginSmall
          : productDataObject.componentMarginLarge
      }`}
    >
      <>
        {openCartForm && (
          <AddToCartForm
            product={productDeta}
            openingCartForm={OpeningCartForm}
          />
        )}
      </>
      <h1 className="mb-3 text-[#555555] lg:text-[25px] md:text-xl text-base font-semibold">
        {productDataObject.componentName}
      </h1>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 md:gap-4 md:p-4 lg:flex flex-wrap lg:gap-5 lg:p-5 lg:justify-center xl:grid xl:grid-cols-4 xl:p-5 lg:w-[1020px] max-w-[1440px] xl:gap-5 mb-4 relative ">
        {loading ? (
          <div className="absolute inset-0   flex justify-center items-center">
            <TailSpin
              height="50"
              width="50"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              visible={true}
            />
          </div>
        ) : (
          products.map((product, index) => (
            <div key={product.id || index}>
              <SingleProduct
                items={product}
                openingCartForm={OpeningCartForm}
              />
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
