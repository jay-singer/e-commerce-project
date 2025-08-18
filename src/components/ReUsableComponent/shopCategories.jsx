import { Link } from "react-router-dom";

const ShopCategory = () => {
  const productObject = {
    FurnitureProduct: [
      {
        mode: "New",
        like: "💗",
        title: "Studio Table",
        price: "$149.99",
        picture: "/assets/products/furnitureProduct/Container (1).png",
      },
      {
        mode: "New",
        like: "💗",
        title: "Modern Chair",
        price: "$89.99",
        picture: "/assets/products/furnitureProduct/Container (2).png",
      },
      {
        mode: "New",
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
    ],
    ElectronicProduct: [
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
        mode: "New",
        like: "💗",
        title: "Skullcandy ANC 2",
        price: "$209.99",
        picture:
          "/assets/products/ElectronicImage/71afd395b628dddf967efb911899b4f87fe5b2ef.png",
      },
      {
        mode: "New",
        like: "💗",
        title: "Beats Pro",
        price: "$229.49",
        picture:
          "/assets/products/ElectronicImage/78de0895a3b1564d603be3ebdd3d781e7db79590.png",
      },
    ],
    SportProducts: [
      {
        mode: "New",
        like: "💗",
        title: "Runner Snack",
        price: "$9.99",
        picture: "/assets/products/fruitStore/Rectangle 13.png",
      },
      {
        mode: "New",
        like: "💗",
        title: "Fruit Ball",
        price: "$29.99",
        picture: "/assets/products/fruitStore/Rectangle 10@3x.png",
      },
    ],
  };

  return (
    <div className=" mt-10 max-w-[1280px] justify-self-center w-full sm:w-[100%] flex md:block flex-col justify-center items-center">
      <h2 className="lg:text-2xl md:text-lg text-base font-bold mb-4 text-center text-primary text-nowrap">
        Shop By Categories
      </h2>

      {/* Loop over each category */}
      <div className=" flex flex-wrap w-[85%] justify-self-center justify-center ">
        {Object.entries(productObject).map(([categoryName, products]) => (
          <div
            key={categoryName}
            className="mb-8 lg:w-1/2 w-full flex flex-col items-center"
          >
            {/* Category Title */}
            <h3 className="lg:text-xl md:text-lg text-sm text-primary underline underline-offset-4 font-semibold mb-2  text-center ">
              {categoryName.replace(/([A-Z])/g, " $1")}s
            </h3>

            {/* Show only first 2 products */}
            <div className="flex gap-4 justify-around boder  lg:flex-wrap w-full h-full">
              {products.slice(0, 2).map((product, index) => (
                <Link
                  to={`/product/${product.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  key={index}
                  className=" p-2 w-[200px] hover:scale-105 transition shadow-gray-300 md:shadow-[8px_10px_20px_rgba(0,0,0,0.13)] shadow-[0px_10px_20px_rgba(0,0,0,0.13)]"
                >
                  <img
                    className="w-full  object-cover mb-2"
                    src={product.picture}
                    alt={product.title}
                  />
                  <h4 className="text-md font-medium">{product.title}</h4>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
