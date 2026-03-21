import { FaColumns, FaList, FaTh, FaThLarge } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AllBlogs from "../components/ReUsableComponent/AllBlogs";
import { DropDown } from "../components/specialComponents/dropDown";

const Blog = () => {
  const SortingBlog = [
    { value: "", label: "Sort by", placeholder: true },
    { value: "date", label: "Date" }, // Newest → Oldest or vice versa
    { value: "title", label: "Title" }, // A → Z or Z → A
    { value: "popularity", label: "Popularity" }, // Based on views, likes, reads
    { value: "comments", label: "Most comments" },
  ];
  const baseStyle =
    "lg:text-[15px] md:text-sm mb-1 lg:hover:underline underline-offset-2 lg:hover:text-navColor duration-100 transition-all";

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
  const iconSize =
    "lg:size-5 md:size-4 text-gray-600 cursor-pointer md:block hidden";
  return (
    <div className="md:mt-[130px] ">
      {/* First Section */}
      <section className=" md:bg-[url('/assets/frame/BlogFram.png')] bg-[url('/assets/frame/BlogFramPhone.jpg')] w-full h-[400px] bg-cover bg-center bg-no-repeat backdrop-blur-[20px]   ">
        {" "}
        <div className="w-full h-full  flex items-center flex-col gap-2 justify-center backdrop-blur-[20px] bg-black opacity-45 ">
          <div className="text-3xl mt-5 md:mt-0 font-semibold text-white">
            Shop Page
          </div>
          <p className="text-lg font-medium text-white">
            Let's design the place you always imagined.
          </p>
        </div>
      </section>
      <section className=" pt-10 py-5 flex justify-center ">
        <div className=" xl:max-w-[1120px] xl:w-full lg:w-[95%] w-[90%]">
          {/** top side of second section */}

          <div className=" flex flex-col md:flex-row justify-between gap-3 md:gap-0 md:items-center">
            {/** Right side */}
            <div className=" flex flex-col md:flex-row md:gap-5 gap-3">
              {/** first selection */}
              <div>
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    isActive
                      ? `text-navColor ${baseStyle}`
                      : `text-textColor ${baseStyle}`
                  }
                >
                  All Blogs
                </NavLink>
                {/* <DropDown
                  dataObject={categories}
                  label={"--Select your wish"}
                  width={"lg:w-60 md:w-48"}
                /> */}
              </div>
              {/** Second selection */}
              <div>
                <NavLink
                  to="/Blog/b"
                  className={({ isActive }) =>
                    isActive
                      ? `text-navColor ${baseStyle}`
                      : `text-textColor ${baseStyle}`
                  }
                >
                  Featured
                </NavLink>
              </div>
            </div>
            {/** Left side */}
            <div className=" flex items-center space-x-3 ">
              {/** Sorting accordingly */}
              <DropDown
                dataObject={SortingBlog}
                label={"--Sort by"}
                width={"lg:w-[140px] w-fit"}
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
        </div>
      </section>
      {/** Blog view section */}
      <section className="  flex justify-center ">
        <div className="xl:max-w-[1120px] xl:w-full lg:w-[95%] w-[90%] ">
          <AllBlogs />
        </div>
      </section>
    </div>
  );
};

export default Blog;
