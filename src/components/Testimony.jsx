import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import TestimonyComp from "./specialComponents/testimonySlide";
import TestimonComp2 from "./specialComponents/TestimonySlide2";
import TestimonyComp4 from "./specialComponents/testimonySlide3";

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
  const testimonyComponents = [TestimonyComp, TestimonComp2, TestimonyComp4];

  // Handle forward and back navigation
  const goToNext = () => {
    if (activeIndex < testimonyComponents.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonyComponents.length) %
          testimonyComponents.length
      );
    }
  };

  return (
    <div className="text-center text-textColor pb-2 bg-gray-100 mx-1 mt-4 relative">
      {/* Right Arrow */}
      <div
        className={`absolute flex justify-center items-center md:right-0 md:left-[60rem] left-0 md:top-[0%] bottom-7 bg-gray-100 h-full z-10 cursor-pointer ${
          activeIndex === testimonyComponents.length - 1
            ? " cursor-not-allowed"
            : ""
        }`}
        onClick={goToNext}
      >
        <span>
          <IoIosArrowForward size={30} />
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
        className="w-full overflow-hidden"
      >
        {testimonyComponents.map((Component, index) => (
          <div key={index}>
            <Component data={arrObject[index]} />
          </div>
        ))}
      </Carousel>

      {/* Left Arrow */}
      <div
        className={`absolute flex justify-center items-center md:left-0 md:right-[60rem] left-0 md:top-[0%] bottom-7 bg-gray-100 h-full cursor-pointer ${
          activeIndex === 0 ? " cursor-not-allowed" : ""
        }`}
        onClick={goToPrevious}
      >
        <span>
          <IoIosArrowBack size={30} />
        </span>
      </div>
    </div>
  );
};

export default Testimony;
