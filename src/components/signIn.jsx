import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import LoginForm from "./logIn";
("");

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

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/formData", data);

      if (response.status === 201) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        reset();
        navigate("/sell");
        hideForm();
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

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
      } bg-white rounded-lg  w-full md:p-8 overflow-hidden h-full lg:h-fit p-4`}
    >
      <div className="flex w-full justify-between lg:flex-row flex-col-reverse">
        {/* Left Section */}
        <div className="flex items-center flex-1 justify-around w-full lg:max-w-[600px] relative">
          <div className="h-full z-50 flex flex-col gap-2 lg:gap-0 justify-center ps-2 flex-1 pt-3 md:pt-0 items-center lg:items-start">
            <h2 className="text-2xl font-bold lg:block hidden">Sign Up</h2>
            <p>Already a user?</p>
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
        <div className="md:p-4 w-full ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            {/* First Name input */}
            <div className="relative rounded-md">
              <input
                id="firstName"
                {...register("firstName")}
                type="text"
                placeholder=" "
                className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
              />
              <label htmlFor="firstName" className="labelClass">
                First Name
              </label>
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>

            {/* Last Name input */}
            <div className="relative rounded-md">
              <input
                id="lastName"
                {...register("lastName")}
                type="text"
                placeholder=" "
                className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
              />
              <label htmlFor="lastName" className="labelClass">
                Last Name
              </label>
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>

            {/* Email input */}
            <div className="relative rounded-md">
              <input
                id="signUpEmail"
                {...register("email")}
                type="email"
                placeholder=" "
                className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
              />
              <label htmlFor="email" className="labelClass">
                Email
              </label>
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            {/* Password input */}
            <div className="relative rounded-md">
              <input
                id="signUpPassword"
                {...register("password")}
                type="password"
                placeholder=" "
                className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
              />
              <label htmlFor="password" className="labelClass">
                Password
              </label>
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Go Back Button */}
      <div className="mt-4 flex justify-center pe-2 lg:justify-start">
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
