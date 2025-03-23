"use client";

import React from "react";
import Image from "next/image";
import Select from "react-select";
import MuiPhone from "@/app/_components/phoneInput";
import {
  MailIcon,
  User,
  StarIcon,
  MapPin,
  Clock,
  ShieldAlert,
  LogOut,
  Users,
  Calendar,
  CreditCard,
  Building,
  Smartphone,
  CheckCircle,
  ChevronRight,
  AlertCircle,
  Lock,
  QrCode,
  ArrowRight,
} from "lucide-react";
import { BsDashLg } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";

import phonepay from "@/assets/phonepay.webp";
import paytm from "@/assets/paytm.webp";
import googlepay from "@/assets/gpay.webp";
import bhim from "@/assets/bhim.webp";
import qr from "@/assets/qr.webp";

import img1 from "@/assets/Hotels/img-1.webp";
import visa from "@/assets/visa.webp";
import mastercard from "@/assets/mastercard.webp";

export default function page() {
  const [title, setTitle] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [isPayment, setIsPayment] = React.useState(false);
  const [activeMethod, setActiveMethod] = React.useState("card");
  return (
    <>
      <div className="relative w-full h-[15vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-t from-alpine-900/40  to-[#3F4F44]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 border border-gray-200 rounded-lg shadow-sm bg-alpine-900/40 mb-10">
        {/* Hotel header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2
              className="text-3xl font-bold tracking-wider text-gray-600 flex gap-2 items-center"
              style={{ fontFamily: "Losta Masta" }}
            >
              Grand Ocean Resort
              <BsDashLg /> New Delhi
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className="text-amber-400"
                  size={20}
                  fill="#ffb900"
                />
              ))}
            </h2>

            <div className="flex items-center gap-2">
              <div className="bg-amber-200/40 p-2 rounded-lg">
                <MapPin size={20} className="text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm font-semibold leading-5">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 text-gray-700 text-sm font-semibold hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 cursor-pointer">
            <span>Change Hotel</span>
          </button>
        </div>

        {/* Hotel image and booking details */}
        <div className="flex items-start  gap-4 mb-6">
          <div className="w-[40%]">
            <Image
              src={img1}
              alt="Hotel Reception"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-[75%]">
            <div className="bg-[#D5E5D5]/20 rounded-lg shadow-sm border border-blue-100 p-5 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 group">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm group-hover:shadow transition-shadow duration-300">
                    <Calendar size={22} className="text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-medium">
                      Check-In
                    </span>
                    <span className="font-semibold text-gray-800 mt-0.5 text-sm">
                      23 Mar 2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm group-hover:shadow transition-shadow duration-300">
                    <LogOut size={22} className="text-indigo-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-medium">
                      Check-Out
                    </span>
                    <span className="font-semibold text-gray-800 mt-0.5 text-sm">
                      23 Mar 2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm group-hover:shadow transition-shadow duration-300">
                    <Users size={22} className="text-purple-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm font-medium">
                      Guest
                    </span>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-800 mt-0.5">
                        2 Adults
                      </span>
                      <span className="font-semibold text-gray-800 mt-0.5">
                        |
                      </span>
                      <span className="font-semibold text-gray-800 mt-0.5">
                        1 Room
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room details */}
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden mb-6 w-full">
              {/* Header with gradient background */}
              <div className="bg-[#D5E5D5]/20 p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-blue-500" />
                    <h2 className="text-sm font-bold text-gray-800">
                      Day Use Room (Check In 9am - Check Out 5pm)
                    </h2>
                  </div>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-gray-700 text-sm font-semibold hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 cursor-pointer">
                    <span>Change Room</span>
                  </button>
                </div>
                <div className=" ml-6 flex items-center">
                  <span className="bg-[#D5E5D5]/60 text-[#41644A] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    8 Hours stay
                  </span>
                </div>
              </div>

              {/* Cancellation Policy Section */}
              <div className="p-4 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert size={16} className="text-amber-500" />
                  <h3 className="font-medium text-sm text-gray-800">
                    Cancellation Policy
                  </h3>
                </div>
                <div className="ml-2 p-3 bg-amber-50 rounded-md border border-amber-100">
                  <p className="text-gray-700 font-semibold text-sm">
                    Booking is Non Refundable
                  </p>
                  <button className="text-blue-500 text-xs font-medium mt-1 hover:text-blue-700 transition-colors">
                    View More
                  </button>
                </div>
              </div>

              {/* Summary Section */}
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-500" />
                    <p className="text-gray-700 text-sm font-medium">
                      Booking Status
                    </p>
                  </div>
                  <span className="text-[#872341]/70 text-sm font-semibold">
                    Non Refundable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest details section */}
        <div className="border border-gray-200 rounded-lg mb-6">
          <div className="flex items-center gap-2 bg-amber-400/10 rounded-t-lg p-2">
            <div className="bg-amber-400/20 p-2 rounded-full">
              <User size={20} className="text-amber-600" />
            </div>
            <h2 className="font-medium">Primary Guest Details</h2>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-6">
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              {/* Left side with room indicator and progress */}
              <div className="flex md:flex-col items-center justify-center md:justify-start">
                <div className="relative">
                  <div className="bg-gray-100 text-gray-800 font-medium rounded-full w-20 h-20 flex items-center justify-center shadow-2xl transform transition-transform hover:scale-105">
                    <div className="flex flex-col items-center">
                      <User size={20} className="mb-1" />
                      <span className="text-sm">Room 1</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block h-20 w-[0.15rem] mt-4 rounded-full bg-gradient-to-b from-[#292E49] via-[#536976] to-[#BBD2C5]"></div>
              </div>

              {/* Right side with form fields */}
              <div className="flex-1 backdrop-blur-sm bg-white/60 rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-l from-[#292E49] to-[#536976]">
                    Personal Information
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent ml-4"></div>
                </h3>

                <div className="flex items-center  gap-6">
                  <div className="space-y-1 group w-[20%]">
                    <label className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      Title
                    </label>

                    <Select
                      options={[
                        { value: "Mr", label: "Mr" },
                        { value: "Mrs", label: "Mrs" },
                        { value: "Miss", label: "Miss" },
                        { value: "Ms", label: "Ms" },
                      ]}
                      placeholder="Select Title"
                      defaultValue={{ value: "Mr", label: "Mr" }}
                      onChange={(option) => setTitle(option?.value || "")}
                      required
                      className="peer block w-full rounded-md border-2 border-gray-300 bg-transparent text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          backgroundColor: "transparent",
                          border: "none",
                          boxShadow: "none",
                        }),
                        option: (styles, { isFocused, isSelected }) => ({
                          ...styles,
                          backgroundColor: isSelected
                            ? "#FFDAB3"
                            : isFocused
                            ? "#ffe5c9d9"
                            : "transparent",
                          color: isSelected ? "black" : "inherit",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                        }),
                        menu: (styles) => ({
                          ...styles,
                          backgroundColor: "white",
                        }),
                        menuList: (styles) => ({
                          ...styles,
                          overflowY: "auto",
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }),
                        placeholder: (styles) => ({
                          ...styles,
                          color: "darkslategrey",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                        }),
                        singleValue: (styles) => ({
                          ...styles,
                          color: "darkslategrey",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                        }),
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2  w-[80%]">
                    <div className="space-y-1 group w-full">
                      <label className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all"
                      />
                    </div>

                    <div className="space-y-1 group w-full">
                      <label className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="flex-1 backdrop-blur-sm bg-white/60 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-[#292E49] to-[#536976]">
                Contact Details
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent ml-4"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 px-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email ID
                </label>
                <div className="flex items-center gap-2 w-full bg-white border border-gray-300 shadow-sm text-sm text-gray-700 rounded-md py-[0.75rem] px-4 focus:outline-none  transition-all">
                  <MailIcon className="text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="focus:outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile No
                </label>
                <MuiPhone
                  value={contact}
                  onChange={(phone: string) => setContact(phone)}
                />
              </div>
            </div>

            <p className="text-sm text-amber-600/70 ml-4">
              Your booking details will be sent to this email address and mobile
              number.
            </p>
          </div>

          <div className="border-t border-gray-200 rounded-b-lg p-4 mx-4 flex justify-center">
            <button
              onClick={() => setIsPayment(!isPayment)}
              className="w-[30%] bg-gradient-to-r from-[#292E49] to-[#536976] text-white py-2 rounded-md transition-all hover:bg-gradient-to-r hover:from-[#292E49] hover:to-[#536976]"
            >
              Book Now
            </button>
          </div>
        </div>

        {isPayment && (
          <div className="flex flex-col md:flex-row bg-white rounded-lg border border-gray-200 overflow-hidden mx-auto">
            {/* Sidebar */}
            <div className="md:w-80 bg-gradient-to-b from-[#292E49] to-[#536976] text-white">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">Payment Methods</h2>

                <div className="space-y-1">
                  <button
                    onClick={() => setActiveMethod("card")}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                      activeMethod === "card"
                        ? "bg-white/20 bg-opacity-20 font-medium text-white"
                        : "hover:bg-white/20 hover:bg-opacity-10 hover:text-white"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mr-3" />
                    <span>Card Payment</span>
                    {activeMethod === "card" && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveMethod("netbanking")}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                      activeMethod === "netbanking"
                        ? "bg-white/20 bg-opacity-20 font-medium text-white"
                        : "hover:bg-white/20 hover:bg-opacity-10 hover:text-white"
                    }`}
                  >
                    <Building className="w-5 h-5 mr-3" />
                    <span>Netbanking</span>
                    {activeMethod === "netbanking" && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveMethod("upi")}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                      activeMethod === "upi"
                        ? "bg-white/20 bg-opacity-20 font-medium text-white"
                        : "hover:bg-white/20 hover:bg-opacity-10 hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-5 h-5 mr-3" />
                    <span>UPI Payment</span>
                    {activeMethod === "upi" && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                  <div className="bg-white/20 bg-opacity-10 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Secure Payment</h3>
                    <p className="text-sm text-white text-opacity-80">
                      All transactions are encrypted and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-8">
              {/* Card Payment UI */}
              {activeMethod === "card" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">
                      Card Payment
                    </h2>
                    <div className="flex space-x-2">
                      <Image src={visa} alt="Visa" className="w-12" />
                      <Image
                        src={mastercard}
                        alt="Mastercard"
                        className="w-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <div className="flex items-center gap-2 w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="focus:outline-none w-full"
                          />
                          <CiCreditCard1 size={20} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cardholder Name
                        </label>
                        <div className="flex items-center gap-2 w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="focus:outline-none w-full"
                          />
                          <User size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center gap-2 w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all">
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="focus:outline-none w-full"
                            />
                            <Calendar size={20} />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all">
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="focus:outline-none w-full"
                            />
                            <Calendar size={20} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <div className="flex items-center gap-2 w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="focus:outline-none w-full"
                          />
                          <Lock size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="saveCard"
                        className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="saveCard"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Save card for future payments
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Netbanking UI */}
              {activeMethod === "netbanking" && (
                <div className="space-y-6">
                  <h2 className="text-sm font-bold text-gray-800">
                    Netbanking
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "HDFC Bank",
                      "ICICI Bank",
                      "SBI",
                      "Axis Bank",
                      "Kotak Bank",
                      "Yes Bank",
                      "Punjab National Bank",
                      "Bank of Baroda",
                    ].map((bank) => (
                      <div key={bank} className="relative">
                        <input
                          type="radio"
                          id={bank.replace(/\s+/g, "")}
                          name="bank"
                          className="peer sr-only"
                        />
                        <label
                          htmlFor={bank.replace(/\s+/g, "")}
                          className="flex flex-col items-center justify-center p-4 h-24 bg-white border border-gray-200 rounded-lg cursor-pointer transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:bg-gray-50"
                        >
                          <div className="bg-gray-100 rounded-md w-10 h-10 flex items-center justify-center mb-2">
                            <Building className="w-6 h-6 text-gray-600" />
                          </div>
                          <span className="text-sm font-medium text-center text-gray-700">
                            {bank}
                          </span>
                          <CheckCircle className="absolute top-2 right-2 w-4 h-4 text-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>
                        You will be redirected to your bank's secure payment
                        page.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Payment UI */}
              {activeMethod === "upi" && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-gray-800">
                      UPI Payment
                    </h2>
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Quick & Secure</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* UPI ID Section */}
                    <div className=" rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                      <div className="bg-amber-400/20 p-4 text-amber-700">
                        <div className="flex items-center">
                          <Smartphone className="w-6 h-6 mr-2" />
                          <h3 className="font-semibold">Pay with UPI ID</h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="space-y-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Enter Your UPI ID
                            </label>

                            <div className="flex items-center gap-2 w-full bg-white border-2 border-gray-300 text-sm text-gray-700 rounded-md py-2 px-4 focus:outline-none  transition-all">
                              <input
                                type="text"
                                placeholder="yourname@upi"
                                className="focus:outline-none w-full"
                              />
                              <MdOutlineAlternateEmail size={20} />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Examples: name@okaxis, mobile@paytm
                            </p>
                          </div>

                          <div className="flex items-center text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            <span>
                              Your payment information is encrypted and secure
                            </span>
                          </div>

                          <button className="bg-gradient-to-br from-[#292E49] to-[#536976] text-white font-medium py-3 px-4 rounded-lg transition-colors w-full flex items-center justify-center">
                            <span>Verify & Proceed</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                      <div className="bg-amber-400/20 p-4 text-amber-700">
                        <div className="flex items-center">
                          <QrCode className="w-6 h-6 mr-2" />
                          <h3 className="font-semibold">Scan QR Code</h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-col items-center">
                          <div className="relative mb-6">
                            <div className="absolute -inset-3">
                              <div className="w-full h-full max-w-sm mx-auto opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                            </div>
                            <div className="relative bg-white rounded-xl shadow-md border border-gray-200">
                              <div className="w-48 h-48 bg-gray-100 flex items-center justify-center rounded-xl">
                                <Image
                                  src={qr}
                                  alt="QR Code"
                                  className="w-40 h-40 rounded-xl"
                                />
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-4 text-center max-w-md">
                            Open any UPI app, scan this QR code, and confirm
                            payment to complete your transaction
                          </p>

                          <div className="w-full">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-medium text-gray-500">
                                SUPPORTED APPS
                              </span>
                              <span className="text-xs text-blue-600">
                                View All
                              </span>
                            </div>

                            <div className="flex justify-between">
                              <div className="flex flex-col items-center">
                                <div className="bg-gray-100 p-2 rounded-lg mb-1">
                                  <Image
                                    src={googlepay}
                                    alt="GooglePay"
                                    className=" w-8"
                                  />
                                </div>
                                <span className="text-xs text-gray-600">
                                  GPay
                                </span>
                              </div>

                              <div className="flex flex-col items-center">
                                <div className="bg-gray-100 p-2 rounded-lg mb-1">
                                  <Image
                                    src={phonepay}
                                    alt="PhonePe"
                                    className=" w-8"
                                  />
                                </div>
                                <span className="text-xs text-gray-600">
                                  PhonePe
                                </span>
                              </div>

                              <div className="flex flex-col items-center">
                                <div className="bg-gray-100 p-2 rounded-lg mb-1">
                                  <Image
                                    src={paytm}
                                    alt="Paytm"
                                    className="w-8 py-3"
                                  />
                                </div>
                                <span className="text-xs text-gray-600">
                                  Paytm
                                </span>
                              </div>

                              <div className="flex flex-col items-center">
                                <div className="bg-gray-100 p-2 rounded-lg mb-1">
                                  <Image
                                    src={bhim}
                                    alt="BHIM"
                                    className="h-8 w-8"
                                  />
                                </div>
                                <span className="text-xs text-gray-600">
                                  BHIM
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-gray-700">
                    <span className="text-sm">Amount to pay:</span>
                    <span className="text-xl font-bold ml-2">₹2,499.00</span>
                  </div>

                  <button className="bg-gradient-to-r from-[#292E49] to-[#536976] text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 w-full md:w-auto">
                    Complete Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
