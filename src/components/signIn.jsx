import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import LoginForm from "./logIn";

const SignForm = ({ hideForm, formStatus }) => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherForm, setshowOtherForm] = useState(false);
  // Zod schema for validation
  const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    secondName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  // Submit handler
  const onSubmit = async (data) => {
    console.log(data, "data");
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://e-commerce-backend-b8fd.onrender.com/api/signUp",
        data
      );

      if (response.status === 201) {
        toast.success("Sign-up successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        reset();
        hideForm();
        navigate("/sellerDashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close form on outside click
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

  // Go Back handler
  const handleGoBack = () => {
    hideForm();
    navigate("/");
  };

  return (
    <div className="bg-white rounded-lg w-full md:p-8 overflow-hidden h-full lg:h-fit p-4">
      {formStatus && showOtherForm ? (
        <LoginForm
          logInFormStat={showOtherForm}
          setshowOtherForm={setshowOtherForm}
        />
      ) : (
        <div ref={formRef}>
          <div className="flex w-full justify-between md:flex-row flex-col-reverse">
            <div className="flex items-center justify-around lg:max-w-[600px] relative md:w-[30%] w-full flex-1">
              <div className="h-full flex flex-col gap-2 lg:gap-0 justify-center flex-1 pt-3 md:pt-0 items-center lg:items-start">
                <h2 className="text-2xl font-bold md:block hidden">Sign Up</h2>
                <p>Already a user?</p>
                <button
                  onClick={() => {
                    setshowOtherForm(true);
                  }}
                  className="text-secondary"
                >
                  Sign In!
                </button>
              </div>
              <img
                className="w-[10rem] md:w-[17rem] max-w-[300px] z-50 lg:block hidden"
                src="./assets/illustration/_Group_.png"
                alt="Illustration"
              />
            </div>

            {/* Form Section */}
            <div className="md:p-4 flex-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-6"
              >
                {/* Mobile Header */}
                <div className="border text-center text-2xl block md:hidden">
                  Sign Up
                </div>

                {/* First Name */}
                <div className="relative rounded-md">
                  <input
                    id="firstName"
                    {...register("firstName")}
                    type="text"
                    placeholder=" "
                    className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
                    ariaLabel="firstName"
                  />
                  <label htmlFor="firstName" className="labelClass">
                    First Name
                  </label>
                  <p className="text-red-500">{errors.firstName?.message}</p>
                </div>

                {/* Last Name */}
                <div className="relative rounded-md">
                  <input
                    id="Secondname"
                    {...register("secondName")}
                    type="text"
                    placeholder=" "
                    className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
                    ariaLabel="secondName"
                  />
                  <label htmlFor="secondName" className="labelClass">
                    Last Name
                  </label>
                  <p className="text-red-500">{errors.secondName?.message}</p>
                </div>

                {/* Email */}
                <div className="relative rounded-md">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder=" "
                    className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
                    ariaLabel="email"
                  />
                  <label htmlFor="email" className="labelClass">
                    Email
                  </label>
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>

                {/* Password */}
                <div className="relative rounded-md border border-red-600 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <input
                      autocomplete="section-blue shipping address-level2"
                      id="password"
                      {...register("password")}
                      type="password"
                      placeholder=""
                      className="peer appearance-none border-none w-full py-3 px-4 bg-slate-800 text-gray-700 leading-tight focus:outline-none rounded-md"
                      ariaLabel="password"
                    />
                    <span className="p-1 bg-white absolute right-0 h-full w-1/12">
                      <IoEyeOutline />
                      <FaRegEyeSlash />
                    </span>
                  </div>

                  <label htmlFor="password" className="labelClass">
                    password
                  </label>
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center justify-center ">
                  <button
                    type="submit"
                    className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </button>
                  <span className="bg-white  rounded-full p-2 shadow-md shadow-gray-400 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#fff"
                        d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                      />
                      <path
                        fill="#e33629"
                        d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                      />
                      <path
                        fill="#f8bd00"
                        d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                      />
                      <path
                        fill="#587dbd"
                        d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                      />
                      <path
                        fill="#319f43"
                        d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                      />
                    </svg>
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Go Back */}
          <div className="flex md:justify-start justify-center mt-4">
            <button
              onClick={handleGoBack}
              className="bg-gray-500 py-2 rounded-md text-white px-3"
              ariaLabel="Go Back"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignForm;
