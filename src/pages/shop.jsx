import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaColumns,
  FaList,
  FaTh,
  FaThLarge,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SingleProduct from "./../components/singleProduct";
import { DropDown } from "./../components/specialComponents/dropDown";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products") // GET request
      .then((response) => {
        setProducts(response.data); // response.data contains products array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  const categories = [
    { value: "", label: "--Select your wish", placeholder: true },
    { value: "Furniture", label: "Furniture products " },
    { value: "Electronic", label: "Electronic products" },
    { value: "Sport", label: "Sport products" },
  ];
  const Price = [
    { value: "", label: "--Select your wish--", placeholder: true },
    { value: "3000-5000", label: "3000-5000 Rfw" },
    { value: "5000-7000", label: "5000-7000 Rfw" },
    { value: "7000-10000", label: "7000-10000 Rfw" },
  ];
  const SortingProducts = [
    { value: "", label: "Sort by", placeholder: true },
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "rating", label: "Rating" },
  ];

  const iconSize =
    "lg:size-5 md:size-4 text-gray-600 cursor-pointer md:block hidden";
  return (
    <div className=" md:mt-[130px]">
      {/* First Section */}
      <section className=" md:bg-[url('/assets/frame/Placeholder.jpg')] bg-[url('/assets/frame/phonePlaceholder.jpg')] w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center flex-col md:justify-center justify-start gap-2">
        {" "}
        <div className="text-3xl mt-5 md:mt-0 font-semibold ">Shop Page</div>
        <p className="text-lg font-medium text-black ">
          Let's design the place you always imagined.
        </p>
      </section>
      {/*Second section */}
      <section className=" pt-10 py-5 flex justify-center ">
        <div className=" xl:max-w-[1120px] xl:w-full lg:w-[95%] w-[90%]">
          {/** top side of second section */}

          <div className=" flex flex-col md:flex-row justify-between gap-3 md:gap-0 md:items-center">
            {/** Right side */}
            <div className=" flex flex-col md:flex-row md:gap-5 gap-3">
              {/** first selection */}
              <div>
                <h1 className="text-textColor lg:text-[15px] md:text-sm mb-1">
                  CATEGORIES
                </h1>
                <DropDown
                  dataObject={categories}
                  label={"--Select your wish"}
                  width={"lg:w-60 md:w-48"}
                />
              </div>
              {/** Second selection */}
              <div>
                <h1 className="text-textColor text-[15px] mb-1">PRICE</h1>
                <DropDown
                  dataObject={Price}
                  label={"--Select your Price"}
                  width={"lg:w-60 md:w-48"}
                />
              </div>
            </div>
            {/** Left side */}
            <div className=" flex items-center space-x-3 ">
              {/** Sorting accordingly */}
              <DropDown
                dataObject={SortingProducts}
                label={"--Sort by"}
                width={"lg:w-[130px] w-fit"}
              />
              {/** Display arrangement */}
              <div className="flex gap-2">
                <button>
                  <FaTh className={iconSize} />
                </button>
                <button>
                  <FaThLarge className={iconSize} />
                </button>
                <button>
                  <FaColumns className={iconSize} />
                </button>
                <button>
                  <FaList className={iconSize} />
                </button>
              </div>
            </div>
          </div>
          {/** bottom side of second section */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch justify-center lg:gap-0 md:gap-2 gap-1 overflow-hidden  mt-10 py-3  ">
            {products.map((items, index) => (
              <div key={index} className="">
                <SingleProduct items={items} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/** view more*/}
      <div className="flex justify-center items-center">
        <Link
          to={"#"}
          className="py-[3px] px-3 rounded-md bg-navColor text-white flex items-center justify-center gap-2"
        >
          View More <FaArrowRight className="xl:size-3" />
        </Link>
      </div>
    </div>
  );
};

export default Shop;
