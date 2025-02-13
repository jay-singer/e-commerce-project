import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const SignForm = ({ hideForm, formStatus }) => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <>
      {formStatus && (
        <div
          ref={formRef}
          className="bg-white rounded-lg w-full md:p-8 overflow-hidden h-full lg:h-fit p-4"
        >
          <div className="flex w-full justify-between md:flex-row flex-col-reverse">
            <div className="flex items-center justify-around lg:max-w-[600px] relative md:w-[30%] w-full flex-1">
              <div className="h-full flex flex-col gap-2 lg:gap-0 justify-center flex-1 pt-3 md:pt-0 items-center lg:items-start">
                <h2 className="text-2xl font-bold md:block hidden">Sign Up</h2>
                <p>Already a user?</p>
                <Link to="/logIn" className="text-secondary">
                  Sign In!
                </Link>
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
                <div className="relative rounded-md">
                  <input
                    autocomplete="section-blue shipping address-level2"
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder=""
                    className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
                    ariaLabel="password"
                  />
                  <label htmlFor="password" className="labelClass">
                    password
                  </label>
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-secondary hover:opacity-75 transition-all duration-300 ease-in-out text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </button>
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
    </>
  );
};

export default SignForm;
