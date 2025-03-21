"use client";

import React, { useState, useEffect } from "react";
import MuiPhone from "@/app/_components/phoneInput";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Signup from "@/app/_components/Signup";

import Logo from "@/assets/gt-logo-light.webp";

import { SiMaildotru } from "react-icons/si";
import { HiOutlineLockClosed } from "react-icons/hi";

const Signin = ({ isOpen, onClose, openSignup, isOpenSlider, openSignin }: any) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("phone");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (activeTab === "email") {
      console.log({ email, password, rememberMe });
    } else {
      console.log({ phone, otp, rememberMe });
    }
  };


  const handleSendOtp = () => {
    if (phone.length >= 10) {
      setOtpSent(true);
      // Logic to send OTP would go here
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[25%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
     <div className="w-full mx-auto p-2 flex items-center  h-full">
        <div className="overflow-hidden bg-white w-full">
          {/* Decorative header */}
          <div className="relative">
            <div className="flex flex-col items-center justify-center">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          <div className="mt-8 mx-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-medium">
                  Don't have an account?{" "}
                  <button
                    onClick={openSignup}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign Up
                  </button>
                </span>
              </div>
            </div>
          </div>

          {/* Form content */}
          <div className="p-6 pt-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {activeTab === "email" ? (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 relative flex items-center border border-gray-300 rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                        <SiMaildotru className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 block w-full px-4 py-3 focus:outline-none text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-1 relative flex items-center border border-gray-300 rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 block w-full px-4 py-3 focus:outline-none text-sm"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </label>
                    <MuiPhone
                      value={phone}
                      onChange={(phone: any) => setPhone(phone)}
                      otpSent={otpSent}
                      handleSendOtp={handleSendOtp}
                    />
                  </div>

                  {otpSent && (
                    <div>
                      <label
                        htmlFor="otp"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Enter OTP
                      </label>
                      <div className="mt-1 flex justify-between items-center space-x-2">
                        {[0, 1, 2, 3, 4, 5].map((idx) => (
                          <input
                            key={idx}
                            type="text"
                            maxLength={1}
                            className="w-12 h-12 text-center text-xl rounded border border-gray-200 focus:outline-none focus:border-indigo-500"
                            onChange={(e) => {
                              const newOtp = otp.split("");
                              newOtp[idx] = e.target.value;
                              setOtp(newOtp.join(""));

                              if (
                                e.target.value &&
                                e.target.nextElementSibling
                              ) {
                                (
                                  e.target
                                    .nextElementSibling as HTMLInputElement
                                ).focus();
                              }
                            }}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-center text-gray-500">
                        Didn't receive OTP?{" "}
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-500 cursor-pointer"
                          onClick={handleSendOtp}
                        >
                          Resend OTP
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium text-sm transition-all duration-200 transform hover:scale-[1.01]"
                >
                  Sign in
                </button>
              </div>

              <div className="mt-1 text-center">
                <h3 className="text-sm font-medium text-gray-700">
                  Sign in with{" "}
                  {activeTab === "email" ? (
                    <button
                      onClick={() => setActiveTab("phone")}
                      className="text-sm text-gray-500 font-semibold hover:text-indigo-600 cursor-pointer"
                    >
                      Phone
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab("email")}
                      className="text-sm text-gray-500 font-semibold hover:text-indigo-600 cursor-pointer"
                    >
                      Email
                    </button>
                  )}
                </h3>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              <button
                className="text-sm relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-black focus:outline-none"
                type="button"
              >
                <span className="mr-2 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

            <Signup isOpen={isOpenSlider === "signup"} onClose={onClose} openSignin={openSignin} />
    </>
  );
};

export default Signin;
