import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToWishlist, isInWishlist } from "./utilities/utlilities";

const SingleProduct = ({ items, Opening_Cart_Form, conditionState }) => {
  // Function to render star rating
const [cartProductsInformation, setcartProductsInformation] = useState([])

  useEffect(()=>{
 localStorage.setItem("productsInf",JSON.stringify(cartProductsInformation)
 )
 
},[cartProductsInformation]);

// Adding to wishlist by liking and add to wish list
const [liked, setLiked] = useState(false);

//useEffect with adding to wishlis
useEffect(() => {
  setLiked(isInWishlist(items._id));
}, [items]);

//Wishlist adding 
const filterProductOnWhichlist = (data) => {
            setcartProductsInformation((prev) => {
                const exists = prev.find((item) => item.product_id === data.product_id);

             if (exists) {
      // remove if exists
          return prev.filter((item) => item.product_id !== data.product_id);
       } else {
      // add if not exists
      return [...prev, data];
           }
             });
                };
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-navColor" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className={`${conditionState == "Dashboard" ? "  h-full" : "mx-2 mb-3 md:m-0 shadow-md lg:w-full h-full flex gap-2 overflow-hidden text-center rounded-lg  bg-white transition-transform transform md:hover:scale-[1.01] md:hover:shadow-xl shadow-gray-300 -z-1"}`}
    >
      {/** First section */}
      <div
        className={` ${conditionState == "Dashboard" ? " w-full  h-[200px] " : "w-[300px]"}`}
      >
        {/** Thumbnail image */}
        <Link
          className=" block h-full w-full"
         /* to={`/products/${items._id}`}
          state={{
            ProductStore: {
              id: items._id,
              name: items.productName,
              price: items.price,
              image: items.productImage,
              productDesc: items.productDescription,
              star: items.rating || 4, // Pass the star rating
            },
          }}*/
        >
          <img
            src={items.productImage}
            alt={items.productName}
            className="object-covertransition-transform object-cover object-center duration-300 h-full w-full "
          />
        </Link>
        {/*like and add to cart button*/}
        {conditionState === "Dashboard" ? (
          ""
        ) : (
          <span className="absolute bg-white top-0 left-0 h-fit rounded-ee-lg px-1 py-1 gap-1 flex flex-col justify-evenly">
            {/** add to like or whichlish */}
            <button onClick={() => {
             addToWishlist(null, items);

              // re-check AFTER update
              setLiked((prev) => !prev);
            }} className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="gray"
                  strokeDasharray="32"
                  strokeDashoffset="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.7s"
                    values="32;0"
                  />
                </path>
              </svg>
            </button>
            {/* add to cart button*/}
            <button
              onClick={() => {
                const data = {
                  product_id: items._id,
                  productName: items.productName,
                };
               
                
                filterProductOnWhichlist(data)
                Opening_Cart_Form(data);
              }}
              className="bg-[#7AC751] flex justify-center items-center px-[3px] py-[3px] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" />
                  <path d="M9 11V6a3 3 0 0 1 6 0v5" />
                </svg>
              </svg>
            </button>
          </span>
        )}
      </div>
      <div className="px-1">
        <h3 className="text-start w-full md:text-lg text-[12px] font-semibold text-gray-700">
          {items.productName}
        </h3>
        <p className="text-start w-full md:text-sm text-[12px]  text-gray-700">
          {items.productDescription.substring(0, 50) + "..."}
        </p>
        {/* Star rating display */}

        <div
          className={`${conditionState === "Dashboard" ? " flex flex-row gap-4 items-center justify-between" : "flex flex-col items-start mb-4"}`}
        >
          <span className="text-md text-start font-medium text-navColor">
            {items.price} Rwf
          </span>
          <span className="flex justify-center items-center">
            {renderStars(items.rating || 4)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
