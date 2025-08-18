import { useState } from "react";
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
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/products") // GET request
  //     .then((response) => {
  //       setProducts(response.data); // response.data contains products array
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     });
  // }, []);
  let products = [
    {
      _id: "1224",
      price: "35000",
      productImage:
        "/assets/products/furnitureProduct/cea62cb63097d74a9f45d2110909ec266f8b0923.jpg",
      productName: "White Drawer unit",
      productDescription:
        "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
      star: 4,
      id: "5165",
    },
    {
      _id: "12349",
      price: "2500",
      productImage:
        "/assets/products/furnitureProduct/c60e8adb369fff6b1b7c7a4f1fbb444053638a8b.jpg",
      productName: "Off-white Pilow",
      productDescription:
        "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
      star: 5,
      id: "cd36",
    },
    {
      _id: "1234",
      price: "30000",
      productImage:
        "/assets/products/furnitureProduct/ace2f9ac12525d0f50e21a75c61e1ec0d64e4aa4.jpg",
      productName: "Cozy sofa",
      productDescription:
        "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
      star: 5,
      id: "8cc4",
    },
    {
      _id: "1234",
      price: "3000",
      productImage:
        "/assets/products/furnitureProduct/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg",
      productName: "Table Lamp",
      productDescription:
        "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
      star: 5,
      id: "86a5",
    },
    {
      _id: "12344",
      price: "6000",
      productImage:
        "/assets/products/furnitureProduct/730da628fa00ebebad3df271f7911cf7595d715e.jpg",
      productName: "Bambo Basket",
      productDescription:
        "With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.",
      star: 3,
      id: "9525",
    },
    {
      _id: "12348",
      price: "8000",
      productImage:
        "/assets/products/furnitureProduct/a40cc85f069a0857fe7da4976ba73bf5db64a055.jpg",
      productName: "Black Tray table",
      productDescription:
        "Easy to love at a price that’s hard to resist. Buy one or buy a few and make every space where you sit more convenient.",
      star: 3,
      id: "061c",
    },
  ];
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
