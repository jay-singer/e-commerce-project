import { useEffect, useRef, useState } from "react";
import "../../allCSS/newArrival.css";

// List of product objects to display in the slider
const productObject = [
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
  {
    mode: "New",
    like: "💗",
    title: "Fruit Ball",
    price: "$29.99",
    picture: "/assets/products/fruitStore/Rectangle 10@3x.png",
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
    title: "Racer Water",
    price: "$19.99",
    picture: "/assets/products/fruitStore/Rectangle 12.png",
  },
  {
    mode: "New",
    like: "💗",
    title: "Runner Snack",
    price: "$9.99",
    picture: "/assets/products/fruitStore/Rectangle 13.png",
  },
];

// Function to get number of slides shown based on window width
const getSlidesToShow = () => {
  if (window.innerWidth >= 1024) return 4; // Desktop
  if (window.innerWidth >= 768) return 3; // Tablet
  if (window.innerWidth >= 470) return 2; // max mobile
  return 1; // Mobile
};

const NewArrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const sliderRef = useRef(null);

  // Extend product list for infinite looping
  const extendedProducts = [
    ...productObject.slice(-slidesToShow),
    ...productObject,
    ...productObject.slice(0, slidesToShow),
  ];

  const slideWidth = 100 / extendedProducts.length;
  //hh
  // Update slidesToShow on screen resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  });

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset position when reaching end or start for infinite loop
  const handleTransitionEnd = () => {
    if (currentIndex >= productObject.length) {
      setCurrentIndex(0);
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${
        slideWidth * slidesToShow
      }%)`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sliderRef.current.style.transition = "transform 0.5s ease";
        });
      });
    }

    if (currentIndex < 0) {
      setCurrentIndex(productObject.length - 1);
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${
        slideWidth * productObject.length
      }%)`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sliderRef.current.style.transition = "transform 0.5s ease";
        });
      });
    }
  };

  // Go to specific slide when clicking dot
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="new-arrival mt-16 w-[95%]  justify-self-center relative ">
      <div className=" mt-2 mb-5 flex justify-between ms-5">
        <h2 className=" font-semibold text-gray-800 ">New Arrival</h2>
        {/* Dots */}
        <div className="indicators ">
          {productObject.map((_, i) => (
            <span
              key={i}
              className={`dot w-[7px] h-[7px] md:w-[8px] md:h-[8px] rounded-full ${
                currentIndex === i ? "active" : ""
              }`}
              onClick={() => handleDotClick(i)}
            ></span>
          ))}
        </div>
      </div>
      <div className=" mx-2 md:mx-0 w-full justify-self-center">
        {/* Slide container */}
        <div className="slide-viewport">
          <div
            className="slider-track"
            ref={sliderRef}
            style={{
              width: `${extendedProducts.length * (100 / slidesToShow)}%`,
              transform: `translateX(-${
                (currentIndex + slidesToShow) * slideWidth
              }%)`,
              transition: "transform 0.5s ease",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedProducts.map((item, index) => (
              <div
                key={index}
                className="slide-item"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="slide-card justify-center items-center flex flex-col">
                  <div className="flex justify-between w-full mb-2 ">
                    {item.mode && (
                      <span className="bg-black text-white px-2 py-1 text-xs rounded">
                        {item.mode}
                      </span>
                    )}
                    <span>{item.like}</span>
                  </div>
                  <img src={item.picture} alt={item.title} className="" />
                  <button className="bg-black text-white md:w-2/3 md:justify-self-start w-3/5   rounded my-2 hover:bg-gray-800 cursor-pointer whitespace-nowrap px-2">
                    Add to cart
                  </button>
                  <div className="text-sm w-full  flex flex-col md:items-start items-center">
                    <div className="text-yellow-500">★★★★★</div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Buttons */}

        <button
          className="slider-buttons p-[8px] flex justify-center items-center border border-black lg:left-5 md:left-4 -left-1 top-1/2"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="slider-buttons p-[8px] flex justify-center items-center border border-black lg:right-5  md:right-4 -right-1 top-1/2 left"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
