import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="flex items-center mb-4">
              <img
                src="/assets/Logo.svg"
                alt="Vikings Logo"
                className="h-8 mr-2"
              />
              <h2 className="text-lg font-bold">
                B.<i className="text-[12px]">quality</i>
              </h2>
            </div>
            <p className="text-sm text-gray-500">
              Vikings is the popular Ecommerce site. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        dur="0.4s"
                        values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"
                      />
                    </path>
                    <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.4s"
                        dur="0.4s"
                        values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"
                      />
                    </path>
                    <path d="M18.5 2h3.5L22 2h-3.5z">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.5s"
                        dur="0.4s"
                        values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
                      />
                    </path>
                  </g>
                </svg>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="17"
                    cy="7"
                    r="1.5"
                    fill="currentColor"
                    fill-opacity="0"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.3s"
                      dur="0.15s"
                      values="0;1"
                    />
                  </circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      stroke-dasharray="72"
                      stroke-dashoffset="72"
                      d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="72;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="28"
                      stroke-dashoffset="28"
                      d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.6s"
                        values="28;0"
                      />
                    </path>
                  </g>
                </svg>
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="-4.5 -2 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="w-full sm:w-1/2 md:w-1/3">
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-delivery" className="hover:underline">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:underline">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/2 md:w-1/3">
            <h3 className="font-semibold text-lg mb-4">Supports</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/feedback" className="hover:underline">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/download-app" className="hover:underline">
                  Download App
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2023 Vikings - All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:underline"
              >
                Privacy
              </Link>
              <Link
                to="/security"
                className="text-sm text-gray-600 hover:underline"
              >
                Security
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 hover:underline"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
