import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import TestimonyComp from "../components/specialComponents/testimonySlide";
const Testimony = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionTime, setTransitionTime] = useState(600);

  // Adjust transition speed based on screen width
  useEffect(() => {
    const handleResize = () => setTransitionTime(600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Testimonials data
  const arrObject = [
    {
      imageUrl: "/assets/profile/profile1.jpeg",
      testimony:
        "I like Furniking.com and compared to other companies, its policies and customer support are very good. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
      customerName: "Angelina Jay",
      customerTitle: "Co-founder",
    },
    {
      imageUrl: "/assets/profile/Screenshot 2025-02-15 153705.png",
      testimony:
        "I like Furniking.com and compared to other companies, its policies and customer support are very good. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
      customerName: "John Stones",
      customerTitle: "CTO",
    },
    {
      imageUrl: "/assets/profile/Screenshot 2025-02-15 153829.png",
      testimony:
        "I like Furniking.com and compared to other companies, its policies and customer support are very good. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
      customerName: "Emily Smith",
      customerTitle: "Designer",
    },
  ];

  // Components to render dynamically

  // Handle forward and back navigation
  const goToNext = () => {
    if (activeIndex < arrObject.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + arrObject.length) % arrObject.length
      );
    }
  };

  return (
    <div className="text-center w-full  text-textColor pb-2 bg-gray-100 mt-4 flex justify-center items-center">
      {/* Left Arrow */}
      <div
        className={`   cursor-pointer flex-1 ${
          activeIndex === 0 ? " cursor-not-allowed" : ""
        }`}
        onClick={goToPrevious}
      >
        <span className=" lg:justify-center justify-end flex w-full">
          <IoIosArrowBack size={40} />
        </span>
      </div>

      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        showIndicators={false}
        selectedItem={activeIndex}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        swipeable={false}
        onChange={setActiveIndex}
        transitionTime={transitionTime}
        className="w-[50%] max-w-[1440px]  bg-slate-50"
      >
        {arrObject.map((_, index) => (
          <div key={index}>
            <TestimonyComp data={arrObject[index]} />
          </div>
        ))}
      </Carousel>
      {/* Right Arrow */}
      <div
        className={`  z-10 cursor-pointer flex-1 ${
          activeIndex === arrObject.length - 1 ? " cursor-not-allowed" : ""
        }`}
        onClick={goToNext}
      >
        <span className=" h-full w-full flex lg:justify-center">
          <IoIosArrowForward className="" size={40} />
        </span>
      </div>
    </div>
  );
};

export default Testimony;
