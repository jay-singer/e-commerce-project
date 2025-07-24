import { useRef, useState } from "react";

const logos = [
  "assets/electonicImage/paternersLogo/LogoIpsum.png",
  "assets/electonicImage/paternersLogo/Logoipsum2.png",
  "assets/electonicImage/paternersLogo/LogoIpsum3.png",
  "assets/electonicImage/paternersLogo/LogoIpsum4.png",
  "assets/electonicImage/paternersLogo/LogoIpsum5.png",
  "assets/electonicImage/paternersLogo/LogoIpsum6.png",
];

const SecSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const imgStyle =
    "object-contain  transition-transform duration-700 ease-in-out";

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const childWidth = container?.children[0]?.offsetWidth || 0;
    container.scrollTo({
      left: index * childWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < logos.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-h-[144px] max-w-[1442px] md:py-10 md:px-20 mx-auto relative">
      {/* Arrows visible from tablet down (md and below) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl font-bold z-10 bg-white px-2 py-1 rounded-full shadow md:block hidden"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl font-bold z-10 bg-white px-2 py-1 rounded-full shadow md:block hidden"
      >
        &gt;
      </button>

      {/* Logo scroll container */}
      <div
        ref={containerRef}
        className=" flex overflow-x-auto scroll-smooth no-scrollbar gap-4  items-center justify-between"
      >
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className={imgStyle}
          />
        ))}
      </div>

      {/* Dots for mobile/tablet only */}
      <div className="flex justify-center mt-2 md:flex hidden">
        {logos.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SecSection;
