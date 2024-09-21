import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    } else if (loginData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setLoading(true);

      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          loginData
        ); // replace with your endpoint

        if (response.status === 200) {
          toast.success("Logged in successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          // Handle successful login (e.g., redirect to dashboard or store token)
        } else {
          toast.error("Login failed. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Invalid credentials. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        } else {
          toast.error("An error occurred. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex w-full justify-between md:flex-row flex-col-reverse">
      {/* Left Section */}
      <div className="flex items-center justify-around lg:max-w-[600px] relative md:w-[30%] w-full flex-1">
        <div className="h-full z-50 flex flex-col gap-2 lg:gap-0 justify-center ps-2 flex-1 pt-3 md:pt-0 items-center lg:items-start">
          <h2 className="text-2xl font-bold md:block hidden">Sign In</h2>
          <p>New here?</p>
          <Link to="/notFound" className="text-secondary">
            Create an Account
          </Link>
        </div>
        <img
          className="w-[10rem] md:w-[17rem] max-w-[300px] z-50 lg:block hidden"
          src="./assets/illustration/_Group_.png"
          alt="Illustration"
        />
        <div className="absolute md:block hidden bg-gradient-to-r from-blue-100 to-slate-200 filter blur-lg h-[200px] w-[200px] rounded-full z-0 left-10 top-20 opacity-75"></div>
        <div className="absolute md:block hidden bg-gradient-to-r from-blue-100 to-slate-200 filter blur-lg h-[200px] w-[200px] rounded-full z-0 left-[130px] top-[250px] opacity-75"></div>
      </div>

      {/* Right Section (Form) */}
      <div className="md:p-4 flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Header for small devices */}
          <div className="border text-center text-2xl block md:hidden">
            Sign In
          </div>

          {/* Email input */}
          <div className="relative rounded-md">
            <input
              id="loginEmail"
              name="email"
              type="email"
              placeholder=" "
              value={loginData.email}
              onChange={handleChange}
              className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
            />
            <label htmlFor="email" className="labelClass">
              Email
            </label>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Password input */}
          <div className="relative rounded-md">
            <input
              id="loginPassword"
              name="password"
              type="password"
              placeholder=" "
              value={loginData.password}
              onChange={handleChange}
              className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
            />
            <label htmlFor="password" className="labelClass">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
