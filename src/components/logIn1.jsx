import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MobileLogIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="p-2">
      {/* Upper section */}
      <div>
        <img
          src="/assets/Logo.svg"
          alt="Buy Quality Product"
          className="w-[122px] p-0 m-0"
        />
      </div>
      {/* Middle section */}
      <div className="relative bg-white">
        <p className="backDrop w-[226px] h-1/2 rounded-full -left-10 -top-2 absolute opacity-10"></p>
        <p className="backDrop1 w-[300px] h-[300px] -right-10 -bottom-10 absolute opacity-10 rounded-full"></p>
        <p className="backDrop2 w-full h-[100px] -bottom-24 absolute opacity-25"></p>

        <div className="md:p-4 flex-1">
          <form className="flex flex-col space-y-6">
            {/* Header for small devices */}
            <div className="block md:hidden">
              <p className="text-center text-primary text-2xl font-bold text-shadow-md">
                Log In
              </p>
              <div>
                <p className="text-specialColor font-medium text-shadow-DEFAULT">
                  If you don't have an account you can
                </p>
                <Link
                  to="/signIn1"
                  className="text-navColor font-semibold text-shadow-md z-50"
                >
                  Register here!
                </Link>
              </div>
            </div>

            {/* Email input */}
            <div className="relative rounded-md">
              <input
                id="loginEmail"
                name="email"
                type="email"
                autoComplete="username"
                placeholder=" "
                className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
              />
              <label htmlFor="email" className="labelClass">
                Email
              </label>
            </div>

            {/* Password input */}
            <div className="relative rounded-md">
              <input
                id="loginPassword"
                name="password"
                type={passwordVisible ? "text" : "password"}
                autoComplete="current-password"
                placeholder=" "
                className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
              />
              <span className="p-1 bg-slate-200 absolute right-0 h-full w-1/12">
                <span className="flex justify-center items-center h-full w-full">
                  {passwordVisible ? (
                    <IoEyeOutline
                      size={20}
                      cursor="pointer"
                      onClick={() => setPasswordVisible(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      size={20}
                      cursor="pointer"
                      onClick={() => setPasswordVisible(true)}
                    />
                  )}
                </span>
              </span>
              <label htmlFor="password" className="labelClass">
                Password
              </label>
            </div>

            <div className="flex justify-end">
              <Link className="text-navColor text-end" to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Down section */}
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <p className="flex w-full items-center gap-1">
          <span className="flex-1 bg-slate-400 h-[1px]"></span>
          <span className="text-primary">Or Continue with</span>
          <span className="flex-1 bg-slate-400 h-[1px]"></span>
        </p>
        <Link
          to="/auth/google"
          className="p-2 rounded-full shadow-md shadow-gray-400"
        >
          <FcGoogle size={30} />
        </Link>
      </div>
    </div>
  );
}

export default MobileLogIn;
