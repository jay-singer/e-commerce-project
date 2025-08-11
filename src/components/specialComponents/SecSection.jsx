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
  const [duration, setDuration] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;

      if (width <= 380) {
        setSlidesToShow(2.5);
        setDuration(1);
      } else if (width <= 500) {
        setSlidesToShow(3);
        setDuration(1);
      } else if (width <= 800) {
        setSlidesToShow(5);
        setDuration(1);
      } else {
        setSlidesToShow(5);
        setDuration(10);
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  return (
    <div className="w-11/12 lg:w-3/4 justify-self-center my-4">
      <h1 className="text-center font-semibold">Trending brand</h1>
      <Slide
        indicators={false}
        arrows={false}
        autoplay={true}
        slidesToShow={slidesToShow}
        duration={duration * 1000}
        transitionDuration={700}
        infinite={true}
        pauseOnHover={false}
        cssClass="mt-2"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="each-slide-effect flex items-center justify-center lg:p-4 lg:mt-0"
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
