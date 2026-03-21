import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { formHiding } from "../utilities/utlilities";
import LoginForm from "./logIn";

const SignForm = ({ hideForm, formStatus }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherForm, setshowOtherForm] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    secondName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    role: z.enum(["Admin", "Seller", "Buyer"], {
      required_error: "Role is required",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting form with data:", data); // log data before sending

      const response = await axios.post(
        "https://e-commerce-backend-b8fd.onrender.com/api/signUp",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("Data submitted successfully:", response.data); // ✅ success log

        toast.success("Sign-up successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        formHiding(hideForm);
        reset();
        hideForm();
      } else {
        console.log("Unexpected response:", response); // edge case log
      }
    } catch (error) {
      console.error("Error submitting form:", error); // ❌ error log
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleGoBack = () => {
    if (innerWidth === 400) {
      hideForm();
    }
    navigate("/");
  };

  return (
    <div className=" rounded-lg w-full md:p-8 overflow-hidden h-full lg:h-fit p-4">
      {formStatus && showOtherForm ? (
        <LoginForm
          hideForm={hideForm}
          logInFormStat={showOtherForm}
          setshowOtherForm={setshowOtherForm}
        />
      ) : (
        <div>
          <div className="flex w-full justify-between md:flex-row flex-col-reverse ">
            <div className="flex items-center justify-around lg:max-w-[600px] relative md:w-[30%] w-full flex-1 ">
              <div className="h-full flex flex-col gap-2 lg:gap-0 justify-center flex-1 pt-3 md:pt-0 items-start lg:items-start ">
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
                    autoComplete="email"
                    placeholder=" "
                    className="peer appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
                  />
                  <label htmlFor="email" className="labelClass">
                    Email
                  </label>
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>

                {/* Password */}
                <div className="relative rounded-md  ">
                  <div className="flex items-center bg-slate-200 rounded-md">
                    <input
                      id="loginPassword"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder=" "
                      {...register("password")}
                      className="peer appearance-none border-none w-full py-3 px-4 bg-transparent text-gray-700 leading-tight focus:outline-none "
                    />
                    <span className="p-1   h-full w-1/12">
                      <span className="flex justify-center items-center h-full w-full">
                        {passwordVisible ? (
                          <IoEyeOutline
                            size={20}
                            cursor={"pointer"}
                            onClick={() => {
                              setPasswordVisible(false);
                            }}
                          />
                        ) : (
                          <FaRegEyeSlash
                            size={20}
                            cursor={"pointer"}
                            onClick={() => {
                              setPasswordVisible(true);
                            }}
                          />
                        )}
                      </span>
                    </span>
                    <label htmlFor="password" className="labelClass">
                      Password
                    </label>
                  </div>

                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>

                {/* Role Dropdown */}
                <div className="relative rounded-md ">
                  <select
                    id="role"
                    {...register("role")}
                    className="appearance-none border-none w-full py-3 px-4 bg-slate-200 text-gray-700 leading-tight focus:outline-none rounded-md"
                    defaultValue="Buyer"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.role.message}
                    </p>
                  )}
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
                </div>
              </form>
            </div>
          </div>

          {/* Go Back */}
          <div className="flex md:justify-start justify-center mt-4">
            <button
              onClick={() => {
                handleGoBack();
                hideForm();
              }}
              className="bg-gray-500 py-2 rounded-md text-white px-3"
              aria-label="Go Back"
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
