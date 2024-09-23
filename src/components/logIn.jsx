import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

// Zod schema definition
const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  // Use `useForm` from react-hook-form and Zod for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (loginData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginData
      );
      if (response.status === 200) {
        navigate("/sell");
        toast.success("Logged in successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        reset(); // Reset form after successful submission
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
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
              {...register("email")}
              className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
            />
            <label htmlFor="email" className="labelClass">
              Email
            </label>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password input */}
          <div className="relative rounded-md">
            <input
              id="loginPassword"
              name="password"
              type="password"
              placeholder=" "
              {...register("password")}
              className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
            />
            <label htmlFor="password" className="labelClass">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
