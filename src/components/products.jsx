import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCartForm from "./ReUsableComponent/addCartProduct";
import Button from "./ReUsableComponent/button";
import SingleProduct from "./singleProduct";


const Products = ({ onDelete, onUpdate, componentStyleData, productsData, conditionState }) => {
  const [loading, setLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [openCartForm, setOpeningCartForm] = useState(false);

  //  Track window size for responsive design
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div
      className={`flex flex-col justify-center items-center lg:w-full  bg-white ${
        !isLargeScreen
          ? componentStyleData.componentMarginSmall
          : componentStyleData.componentMarginLarge
      }`}
    >
      <>

      </>
      <h1 className=" mb-3 text-[#555555] lg:text-[25px] md:text-xl text-base font-semibold">
        {componentStyleData.componentName}
      </h1>

      <div className=" w-full">
       
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product,index) => (
   
          <div
            key={product._id || index}
            className="group   relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-2xl transition duration-500"
          >
            <div className=" relative overflow-hidden">
           
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-[240px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-0 right-0 flex gap-2 z-10">
                <button onClick={() => onDelete(product._id)}  className="cursor-pointer backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
                <img className="size-[30px]" src="/assets/IconImages/fluent--delete-32-filled.png"/>
                 
                </button>
                <button onClick={() => onUpdate( product)} className=" cursor-pointer backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
                 <img className="size-[30px]" src="/assets/IconImages/carbon--update-now.png"/>
               
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <Link
                 to={`/products/${product._id}`}
          state={{
            ProductStore: {
              id: product._id,
              name: product.productName,
              price: product.price,
              image: product.productImage,
              productDesc: product.productDescription,
              star: product.rating || 4, // Pass the star rating
            },
          }}
                 className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium shadow-lg hover:bg-navColor hover:text-white transition">
                  Quick View
                </Link>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-green-600 transition">
                {product.productName}
              </h3>

              <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                {product.rating} this is rating
                <span className="text-gray-400 text-xs ml-1">(120)</span>
              </div>

             
            </div>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border border-green-400/30" />
          </div>
        ))}
      </div>
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
