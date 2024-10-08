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
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  {
    /**UseForm Hook validation */
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  {
    /** Trying to storing information in the localStorage */
  }

  const navigate = useNavigate();

  {
    /**Trying to post data on db server by axios library and make many staff after the data submitted */
  }
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:3000/formData", data);

      if (response.status === 201) {
        navigate("/sell");

        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        reset(); // Reset form after successful submission
        hideForm();
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  {
    /** To make function out side of form that trigged  for removing form*/
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        hideForm(); // Close the form if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideForm]);

  {
    /** go back function help to return to home */
  }
  const handleGoBack = () => {
    hideForm();
    navigate("/"); // Navigate to home
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
              <div className="h-full z-50 flex flex-col gap-2 lg:gap-0 justify-center ps-2 flex-1 pt-3 md:pt-0 items-center lg:items-start">
                <h2 className="text-2xl font-bold md:block hidden">Sign Up</h2>
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
                  Sign Up
                </div>

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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Go Back button */}
          <div className="flex md:justify-start justify-center mt-4">
            <Link
              className="bg-gray-500 py-2 rounded-md text-white px-3"
              onClick={handleGoBack}
            >
              Go Back
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SignForm;
