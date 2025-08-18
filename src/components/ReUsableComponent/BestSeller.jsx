import { Link } from "react-router-dom";

const BestSeller = () => {
  const productObject = [
    {
      mode: "Hot",
      like: "💗",
      title: "Studio Table",
      price: "$149.99",
      picture: "/assets/products/furnitureProduct/Container (1).png",
    },
    {
      mode: "Hot",
      like: "💗",
      title: "Modern Chair",
      price: "$89.99",
      picture: "/assets/products/furnitureProduct/Container (2).png",
    },
    {
      mode: "Hot",
      like: "💗",
      title: "Work Desk",
      price: "$179.99",
      picture: "/assets/products/furnitureProduct/Container (3).png",
    },
    {
      mode: "New",
      like: "💗",
      title: "Classic Sofa",
      price: "$299.99",
      picture: "/assets/products/furnitureProduct/Container (4).png",
    },
    {
      mode: "New",
      like: "💗",
      title: "Energy Pack",
      price: "$34.99",
      picture: "/assets/products/fruitStore/Rectangle 11.png",
    },
    {
      mode: "New",
      like: "💗",
      title: "Beats Studio Pro",
      price: "$349.99",
      picture:
        "/assets/products/ElectronicImage/07ca3a2a3603c0f59f5fd17c2cf6ee8d3342fafd.png",
    },
    {
      mode: "New",
      like: "💗",
      title: "Sony WH-CH720N",
      price: "$149.99",
      picture:
        "/assets/products/ElectronicImage/0a7c71fe198f8a151916c6fc9755e6971e67962d.png",
    },
    {
      mode: "Hot",
      like: "💗",
      title: "Skullcandy ANC 2",
      price: "$209.99",
      picture:
        "/assets/products/ElectronicImage/71afd395b628dddf967efb911899b4f87fe5b2ef.png",
    },
    {
      mode: "Hot",
      like: "💗",
      title: "Beats Pro",
      price: "$229.49",
      picture:
        "/assets/products/ElectronicImage/78de0895a3b1564d603be3ebdd3d781e7db79590.png",
    },
    {
      mode: "Hot",
      like: "💗",
      title: "Runner Snack",
      price: "$9.99",
      picture: "/assets/products/fruitStore/Rectangle 13.png",
    },
    {
      mode: "Hot",
      like: "💗",
      title: "Fruit Ball",
      price: "$29.99",
      picture: "/assets/products/fruitStore/Rectangle 10@3x.png",
    },
  ];
  return (
    <div className=" mt-10 max-w-[1280px] justify-self-center flex flex-col items-center w-full sm:w-[100%]">
      <h2 className="lg:text-2xl md:text-lg text-base font-bold mb-4  text-primary text-nowrap w-[85%] justify-self-center ">
        Best seller
      </h2>

      {/* Loop over each category */}
      <div className=" flex flex-wrap w-[85%] justify-self-center gap-2 lg:gap-2 lg:col-span-4 md:col-span-3 col-span-2 justify-center">
        {productObject.slice(0, 8).map((Product, index) => (
          <Link
            to={`/product/${Product.title.replace(/\s+/g, "-").toLowerCase()}`}
            key={index}
            className="lg:p-2 lg:hover:scale-[1.01]  transition  flex flex-auto flex-col items-center rounded relative shadow-gray-300 md:shadow-[8px_10px_20px_rgba(0,0,0,0.13)] shadow-[0px_10px_20px_rgba(0,0,0,0.13)]"
          >
            <div className="absolute px-2 bg-slate-700 text-white font-semibold rounded-md top-1 left-2 ">
              Hot
            </div>
            <img
              className="object-cover mb-2  justify-self-center w-full max-w-[250px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[220px]"
              src={Product.picture}
              alt={Product.title}
            />
            <div className=" w-full flex flex-col items-center md:items-start">
              <div className="text-yellow-500">★★★★★</div>
              <h4 className="text-md font-medium">{Product.title}</h4>
              <p className="text-sm text-gray-600">{Product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="justify-self-center mt-5 lg:text-lg text-base text-gray-700">
        <span> For more interactive products </span>{" "}
        <Link
          className="font-semibold underline text-navColor decoration-navColor"
          to={`/shop`}
        >
          Visit Shop
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
