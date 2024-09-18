import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import LoginForm from "./logIn";

const SignForm = ({ formStatus, hideForm }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Zod schema for validation
  const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle form submit
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/formData", data);

      if (response.status === 201) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
        reset(); // Reset the form after successful submission
        navigate("/sell"); // Navigate to the sell page
        hideForm(); // Hide the form
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      console.error(error);
    }
  };

  // Handle clicks outside the form to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        hideForm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideForm]);

  return (
    <div
      ref={formRef}
      className={`${
        !formStatus ? "hidden" : "block"
      } bg-white rounded-lg shadow-lg w-full p-8`}
    >
      <div className="flex w-full justify-between">
        {/* Left Section */}
        <div className="flex items-center flex-1 justify-around w-full max-w-[600px] relative">
          <div className="h-full z-50 flex lg:flex-col flex-row gap-2 lg:gap-0 justify-center ps-2 flex-1">
            <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
            <p className="mb-4">Already a user?</p>
            <Link to="/login" className="text-secondary">
              Sign In!
            </Link>
          </div>
          <img
            className="w-[10rem] md:w-[17rem] max-w-[300px] z-50 lg:block hidden"
            src="./assets/illustration/_Group_.png"
            alt="Illustration"
          />
          <div className="absolute lg:block hidden bg-gradient-to-r from-blue-100 to-slate-200 filter blur-lg h-[200px] w-[200px] rounded-full z-0 left-10 top-20 opacity-75"></div>
        </div>

        {/* Right Section (Form) */}
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First Name */}
            <div className="relative rounded-md bg-slate-200 mb-4">
              <input
                id="firstName"
                {...register("firstName")}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First name"
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>

            {/* Last Name */}
            <div className="relative rounded-md bg-slate-200 mb-4">
              <input
                id="lastName"
                {...register("lastName")}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last name"
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>

            {/* Email */}
            <div className="relative rounded-md bg-slate-200 mb-4">
              <input
                id="email"
                {...register("email")}
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            {/* Password */}
            <div className="relative rounded-md bg-slate-200 mb-4">
              <input
                id="password"
                {...register("password")}
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[70%]"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Go Back Button */}
      <div className="mt-4">
        <button
          type="button"
          className="text-white font-bold py-2 px-4 rounded focus:outline-none flex items-center bg-slate-500"
          onClick={hideForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 transform transition-all duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Go Back
        </button>
      </div>

      {/* Login Form Component */}
      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignForm;
