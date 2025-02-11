import React from "react";
import { Link } from "react-router-dom";

function SlideShow2() {
  return (
    <div
      className="relative w-full h-40vh flex items-center justify-center text-white px-6 md:px-12"
      style={{
        backgroundImage:
          "url('/assets/frame/michael-warf-f8egRYt5RGk-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-navColor">YouBuy</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
          Your one-stop shop for premium products at unbeatable prices. Explore
          the latest trends in fashion, electronics, and home essentials.
        </p>
        <Link
          to="/explore"
          className="relative inline-block px-6 sm:px-8 py-3 text-sm sm:text-lg font-semibold rounded-full bg-white text-black overflow-hidden group mt-6"
        >
          <span className="absolute inset-0 bg-navColor w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-all duration-500">
            Explore More
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SlideShow2;
