import React, { useEffect, useRef, useState } from "react";

const UpperHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true); // Show on scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-navColor h-navHeight flex items-center fixed right-0 top-0 left-0 lg:pl-navHeight md:pl-10 pl-5 text-white md:font-semibold lg:text-lg text-base mx-auto z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h3>Welcome to our online shop</h3>
    </div>
  );
};

export default UpperHeader;
