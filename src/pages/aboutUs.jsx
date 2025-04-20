import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ReUsableComponent/button";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        About YOUbuy.com
      </h1>
      <p className="text-gray-700 text-lg text-center mb-6">
        YOUbuy.com is an innovative online marketplace that connects buyers and
        sellers with ease and security. Our goal is to provide a seamless
        shopping experience while ensuring trust, transparency, and efficiency
        for all users.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">For Buyers</h2>
          <p className="text-gray-600 mt-2">
            Explore a wide range of products, enjoy secure transactions, and
            experience hassle-free shopping.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">For Sellers</h2>
          <p className="text-gray-600 mt-2">
            Easily list products, manage orders, and grow your business with our
            seller-friendly tools.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-500">
            Secure & Efficient
          </h2>
          <p className="text-gray-600 mt-2">
            With role-based access control and secure payments, we ensure a safe
            and efficient marketplace for everyone.
          </p>
        </div>
      </div>
      <Link to="/">
        <Button data={"Home"} width={"w-fit"} />
      </Link>
    </div>
  );
};

export default AboutUs;
