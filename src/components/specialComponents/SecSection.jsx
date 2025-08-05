import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const logos = [
  "assets/electonicImage/paternersLogo/LogoIpsum.png",
  "assets/electonicImage/paternersLogo/Logoipsum2.png",
  "assets/electonicImage/paternersLogo/LogoIpsum3.png",
  "assets/electonicImage/paternersLogo/LogoIpsum4.png",
  "assets/electonicImage/paternersLogo/LogoIpsum5.png",
  "assets/electonicImage/paternersLogo/LogoIpsum6.png",
];

const SecSection = () => {
  const [duration, setDuration] = useState(0); // default 2s

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth <= 800) {
        setDuration(1); // 5 seconds for small screens
      } else {
        setDuration(10); // 2 seconds for larger screens
      }
    };

    updateDuration(); // Set initially
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 5,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className=" w-11/12 lg:w-3/4 justify-self-center my-4">
      <h1 className="text-center font-semibold">Trending bland</h1>
      <Slide
        indicators={false}
        arrows={false}
        responsive={responsiveSettings}
        autoplay={true}
        duration={duration} // Almost no delay between slides
        transitionDuration={7000} // Fast transition
        infinite={true}
        pauseOnHover={false}
        cssClass=" mt-2"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="each-slide-effect flex items-center justify-center lg:p-4  lg:mt-0 "
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="object-cover object-center lg:h-10 h-6"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SecSection;
