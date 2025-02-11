import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import SlideShow1 from "./specialComponents/slideShow1";
import SlideShow2 from "./specialComponents/slideShow2";

function Product({ showCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionTime, setTransitionTime] = useState(400); // Default transition time

  // Adjust transition speed based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTransitionTime(600); // Faster transitions on smaller screens
      } else if (window.innerWidth < 1024) {
        setTransitionTime(400);
      } else {
        setTransitionTime(600); // Slower transitions on larger screens
      }
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="w-full flex flex-col items-center h-fit md:mt-[8.2rem]  mt-[5rem] mb-9 ">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        selectedItem={activeIndex}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false} // Keeps autoplay running when hovered
        onChange={setActiveIndex}
        transitionTime={transitionTime}
        className="w-full "
      >
        <div className="flex w-full bg-slate-50 justify-center h-full">
          <SlideShow2 />
        </div>
        <div className="flex w-full bg-slate-50 justify-center h-full">
          <SlideShow1 />
        </div>

        <div className="flex w-full bg-slate-50 justify-center h-full">
          <SlideShow1 />
        </div>
      </Carousel>

      {/* Custom Indicators */}
      <div className="indicators flex items-center justify-center gap-2 p-2">
        {Array.from({ length: 3 }, (_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-green-500 w-8" : "bg-green-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Product;
