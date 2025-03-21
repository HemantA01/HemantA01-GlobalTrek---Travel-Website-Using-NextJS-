"use client";

import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "motion/react";

import { useSearchParams } from "next/navigation";

import { IoIosSearch } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import {
  FaPlaneDeparture,
  FaGlassMartiniAlt,
  FaBriefcase,
  FaCrown,
} from "react-icons/fa";
import { HiMinusSmall, HiPlusSmall, HiArrowLongRight } from "react-icons/hi2";
import { TiArrowRepeat } from "react-icons/ti";

import toast from "react-hot-toast";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [activeTab, setActiveTab] = useState(type || "Flights");

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  const [selectTripOption, setSelectTripOption] = useState(0);
  const [selectHotelOption, setSelectHotelOption] = useState(0);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");

  const [infants, setInfants] = useState(0);
  const [isMoreThan9, setIsMoreThan9] = useState(false);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const dropdownRef = useRef(null);

  const travelOptions = [
    { id: "Flights", label: "Flights", icon: "✈️" },
    { id: "Hotels", label: "Hotels", icon: "🏨" },
    { id: "HomeStays", label: "HomeStays", icon: "🏠" },
    { id: "Cruises", label: "Cruises", icon: "🚢" },
    { id: "Buses", label: "Buses", icon: "🚌" },
    { id: "Trains", label: "Trains", icon: "🚂" },
  ];

  const cabinOptions = [
    {
      name: "Economy",
      icon: <FaPlaneDeparture color="#fca5a5" />,
      description: "Best value for your journey",
    },
    {
      name: "Premium Economy",
      icon: <FaGlassMartiniAlt color="#fca5a5" />,
      description: "Extra comfort at affordable prices",
    },
    {
      name: "Business",
      icon: <FaBriefcase color="#fca5a5" />,
      description: "Luxury and productivity combined",
    },
    {
      name: "First Class",
      icon: <FaCrown color="#fca5a5" />,
      description: "Ultimate luxury experience",
    },
  ];

  const tripOptions = ["One Way", "Round Trip"];
  const hotelOptions = ["Overnight Stay", "Day Use Stay"];

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach((input) => {
      input.setAttribute("min", today);
    });
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", {
      fromDestination,
      toDestination,
      destination,
      infants,
      cabinClass,
      departureDate,
      returnDate,
      startDate,
      endDate,
      adults,
      children,
      rooms,
    });
  };

  const handleAdults = (action: string) => {
    if (action === "increment") {
      if (adults < 9) {
        setAdults(adults + 1);
      } else {
        toast.error("Adults can't be more than 9");
      }
    } else if (action === "decrement" && adults > 1) {
      setAdults(adults - 1);
    }

    checkTotalTravelers(
      action === "increment" ? adults + 1 : adults - 1,
      children,
      infants
    );
  };

  const handleChildren = (action: string) => {
    if (action === "increment") {
      if (children < 8) {
        setChildren(children + 1);
      } else {
        toast.error("Children can't be more than 8");
      }
    } else if (action === "decrement" && children > 0) {
      setChildren(children - 1);
    }

    checkTotalTravelers(
      adults,
      action === "increment" ? children + 1 : children - 1,
      infants
    );
  };

  const handleRooms = (action: string) => {
    if (action === "increment") {
      if (rooms < 9) {
        setRooms(rooms + 1);
      } else {
        toast.error("Rooms can't be more than 9");
      }
    } else if (action === "decrement" && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const handleInfants = (action: string) => {
    if (action === "increment") {
      if (infants < 2) {
        setInfants(infants + 1);
      } else {
        toast.error("Infants can't be more than 2");
      }
    } else if (action === "decrement" && infants > 0) {
      setInfants(infants - 1);
    }

    checkTotalTravelers(
      adults,
      children,
      action === "increment" ? infants + 1 : infants - 1
    );
  };

  const checkTotalTravelers = (a: number, c: number, i: number) => {
    const total = a + c + i;
    setIsMoreThan9(total > 9);
  };

  const handleDone = () => {
    setIsGuestsOpen(false);
  };

  const handleSwapDestinations = () => {
    const temp = fromDestination;
    setFromDestination(toDestination);
    setToDestination(temp);
  };

  const fadeInVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        staggerChildren: 0.08,
      },
    },
  };
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const boxVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-[95vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-t from-alpine-900/40 to-[#3F4F44]"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-50">
        <div className="w-full max-w-7xl">
          {/* Headline */}
          <div className="mb-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-[5rem] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-dancing-script)" }}
            >
              Discover Your Perfect Journey
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-white/80 text-lg"
            >
              Find and book your dream destination in minutes
            </motion.div>
          </div>

          {/* Feature Tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="my-6 flex flex-wrap justify-center gap-3 z-10"
          >
            {[
              "Best Price Guarantee",
              "Free Cancellation",
              "24/7 Support",
              "Verified Properties",
            ].map((tag) => (
              <div
                key={tag}
                className="bg-white/10 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm border border-gray-200/40"
              >
                {tag}
              </div>
            ))}
          </motion.div>

          {/* Search Container */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={boxVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
          >
            <div className="flex justify-center mb-4 overflow-x-auto scrollbar-hide">
              <div className="inline-flex bg-white/15 rounded-full p-1">
                {travelOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveTab(option.id)}
                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                      activeTab === option.id
                        ? "bg-white text-blue-900 shadow-md font-medium"
                        : "text-gray-700 hover:bg-white/10"
                    }`}
                  >
                    <span className="mr-2">{option.icon}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "Flights" && (
              <div className="flex items-center justify-start gap-3 mb-4">
                {tripOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`rounded-full px-4 py-1 bg-white/20 backdrop-blur transition text-gray-700 cursor-pointer ${
                      selectTripOption === index
                        ? "font-semibold border  border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "border border-white/30 hover:bg-white/30 "
                    }`}
                    onClick={() => setSelectTripOption(index)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}

            {(activeTab === "Hotels" || activeTab === "HomeStays") && (
              <div className="flex items-center justify-start gap-3 mb-4">
                {hotelOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`rounded-full px-4 py-1 bg-white/20 backdrop-blur transition text-gray-700 cursor-pointer ${
                      selectHotelOption === index
                        ? "font-semibold border  border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "border border-white/30 hover:bg-white/30 "
                    }`}
                    onClick={() => setSelectHotelOption(index)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}

            {/* Search Form */}
            <div className="flex flex-col md:flex-row gap-3">
              {(activeTab === "Hotels" || activeTab === "HomeStays") && (
                <>
                  <div className="flex-1">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Enter City, State, Country or Hotel Name
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="Where are you going?"
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                        <IoIosSearch
                          className="text-gray-900 ml-2"
                          size={20}
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Check-in Date
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          value={startDate.toISOString().split("T")[0]}
                          onChange={(e) =>
                            setStartDate(new Date(e.target.value))
                          }
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Check-Out Date
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          value={endDate.toISOString().split("T")[0]}
                          onChange={(e) => {
                            if (
                              e.target.value >
                              startDate.toISOString().split("T")[0]
                            ) {
                              setEndDate(new Date(e.target.value));
                            }
                          }}
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <div
                      className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition cursor-pointer guests-select"
                      onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                    >
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Rooms & Guests
                      </label>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 font-medium text-[1rem]">
                          {`${adults} adult${
                            adults > 1 ? "s" : ""
                          }, ${rooms} room${rooms > 1 ? "s" : ""}`}
                          {children > 0
                            ? `, ${children} child${children > 1 ? "ren" : ""}`
                            : ""}
                        </span>
                        <GoPeople size={20} />
                      </div>
                    </div>

                    {isGuestsOpen && (
                      <div className="absolute top-full left-0 w-106 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-50">
                        <div className="p-4">
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <div>
                                <strong>Rooms</strong>
                                <div className="text-xs text-gray-500">
                                  (max 9)
                                </div>
                              </div>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => handleRooms("decrement")}
                                  disabled={rooms <= 1}
                                  className={`w-10 h-8 flex items-center justify-center border-r border-gray-300  ${
                                    rooms <= 1
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <HiMinusSmall size={20} />
                                </button>
                                <span className="w-12 h-8 text-center font-semibold bg-gray-100 pt-1">
                                  {rooms}
                                </span>
                                <button
                                  onClick={() => handleRooms("increment")}
                                  className="w-10 h-8 flex items-center justify-center border-l border-gray-300  "
                                >
                                  <HiPlusSmall size={20} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Adults selection */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <div>
                                <strong>Adults</strong>
                                <div className="text-xs text-gray-500">
                                  (18 Years or Above)
                                </div>
                              </div>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => handleAdults("decrement")}
                                  disabled={adults <= 1}
                                  className={`w-10 h-8 flex items-center justify-center border-r border-gray-300  ${
                                    adults <= 1
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <HiMinusSmall size={20} />
                                </button>
                                <span className="w-12 h-8 text-center font-semibold bg-gray-100 pt-1">
                                  {adults}
                                </span>
                                <button
                                  onClick={() => handleAdults("increment")}
                                  className="w-10 h-8 flex items-center justify-center border-l border-gray-300  "
                                >
                                  <HiPlusSmall size={20} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Children selection */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <div>
                                <strong>Children</strong>
                                <div className="text-xs text-gray-500">
                                  (Below 18 Years)
                                </div>
                              </div>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => handleChildren("decrement")}
                                  disabled={children <= 0}
                                  className={`w-10 h-8 flex items-center justify-center border-r border-gray-300  ${
                                    children <= 0
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <HiMinusSmall size={20} />
                                </button>
                                <span className="w-12 h-8 text-center font-semibold bg-gray-100 pt-1">
                                  {children}
                                </span>
                                <button
                                  onClick={() => handleChildren("increment")}
                                  className="w-10 h-8 flex items-center justify-center border-l border-gray-300  "
                                >
                                  <HiPlusSmall size={20} />
                                </button>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={handleDone}
                            className="w-full py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-600 hover:text-white transition-all duration-300"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {(activeTab === "Flights" || activeTab === "Cruises") && (
                <>
                  <div className="relative flex items-center w-full max-w-xl">
                    <div className="flex-1 bg-white/20 backdrop-blur rounded-l-xl py-3 pl-3 pr-10 border border-white/30 hover:bg-white/30 transition z-10">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        From
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={fromDestination}
                          onChange={(e) => setFromDestination(e.target.value)}
                          placeholder="Enter departure location"
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                        <IoIosSearch
                          className="text-gray-900 ml-2"
                          size={20}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <button
                        onClick={handleSwapDestinations}
                        className="rounded-full w-10 h-10 flex items-center justify-center bg-white/20 text-gray-800 shadow-md hover:bg-white/40 transition-colors duration-300 focus:outline-none cursor-pointer"
                        aria-label="Swap destinations"
                      >
                        <TiArrowRepeat size={20} />
                      </button>
                    </div>

                    <div className="flex-1 bg-white/20 backdrop-blur rounded-r-xl py-3 pr-3 pl-10 border border-white/30 hover:bg-white/30 transition z-10">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        To
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={toDestination}
                          onChange={(e) => setToDestination(e.target.value)}
                          placeholder="Enter arrival location"
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                        <IoIosSearch
                          className="text-gray-900 ml-2"
                          size={20}
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Departure Date
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          value={departureDate.toISOString().split("T")[0]}
                          onChange={(e) =>
                            setDepartureDate(new Date(e.target.value))
                          }
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Return Date
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          value={returnDate.toISOString().split("T")[0]}
                          onChange={(e) => {
                            if (
                              e.target.value >=
                              departureDate.toISOString().split("T")[0]
                            )
                              setReturnDate(new Date(e.target.value));
                          }}
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative flex-1" ref={dropdownRef}>
                    {/* Traveler selection button */}
                    <div
                      className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition cursor-pointer guests-select"
                      onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                    >
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Rooms & Guests
                      </label>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 font-medium text-[1rem]">
                          {adults + children + infants} Traveler
                          {adults + children + infants !== 1 ? "s" : ""},{" "}
                          {cabinClass}
                        </span>
                        <GoPeople size={20} />
                      </div>
                    </div>

                    {/* Dropdown menu */}
                    {isDropDownOpen && (
                      <div
                        className="absolute top-full left-0 w-66 mt-2 bg-white border border-gray-300 rounded-md shadow-md"
                        style={{ zIndex: 9999 }}
                      >
                        <div className="p-4">
                          {/* Adults selection */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <div>
                                <strong>Adults</strong>
                                <div className="text-xs text-gray-500">
                                  (12+ Years)
                                </div>
                              </div>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => handleAdults("decrement")}
                                  disabled={adults <= 1}
                                  className={`w-10 h-8 flex items-center justify-center border-r border-gray-300  ${
                                    adults <= 1
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <HiMinusSmall size={20} />
                                </button>
                                <span className="w-12 h-8 text-center font-semibold bg-gray-100 pt-1">
                                  {adults}
                                </span>
                                <button
                                  onClick={() => handleAdults("increment")}
                                  className="w-10 h-8 flex items-center justify-center border-l border-gray-300  "
                                >
                                  <HiPlusSmall size={20} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Children selection */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <div>
                                <strong>Children</strong>
                                <div className="text-xs text-gray-500">
                                  (2-12 Years)
                                </div>
                              </div>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => handleChildren("decrement")}
                                  disabled={children <= 1}
                                  className={`w-10 h-8 flex items-center justify-center border-r border-gray-300  ${
                                    children <= 1
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <HiMinusSmall size={20} />
                                </button>
                                <span className="w-12 h-8 text-center font-semibold bg-gray-100 pt-1">
                                  {children}
                                </span>
                                <button
                                  onClick={() => handleChildren("increment")}
                                  className="w-10 h-8 flex items-center justify-center border-l border-gray-300  "
                                >
                                  <HiPlusSmall size={20} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Infants selection */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <div>
                                <strong>Infant</strong>
                                <div className="text-xs text-gray-500">
                                  (0-2 Years)
                                </div>
                              </div>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => handleInfants("decrement")}
                                  disabled={infants <= 1}
                                  className={`w-10 h-8 flex items-center justify-center border-r border-gray-300  ${
                                    infants <= 1
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <HiMinusSmall size={20} />
                                </button>
                                <span className="w-12 h-8 text-center font-semibold bg-gray-100 pt-1">
                                  {infants}
                                </span>
                                <button
                                  onClick={() => handleInfants("increment")}
                                  className="w-10 h-8 flex items-center justify-center border-l border-gray-300  "
                                >
                                  <HiPlusSmall size={20} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Cabin class selection */}
                          <div className="mb-4 border-t border-gray-300 pt-4">
                            <div className="flex flex-wrap gap-2">
                              {cabinOptions.map((option) => (
                                <div
                                  key={option.name}
                                  onClick={() => setCabinClass(option.name)}
                                  className={`relative py-2 px-3 rounded-md w-full transition-all duration-200 cursor-pointer flex items-center ${
                                    cabinClass === option.name
                                      ? "border-2 border-[#C7DB9C] text-teal-900"
                                      : "bg-white border border-gray-200 hover:border-blue-300 text-gray-700"
                                  }`}
                                >
                                  <div
                                    className={`mr-2 text-sm ${
                                      cabinClass === option.name
                                        ? "text-white"
                                        : "text-blue-500"
                                    }`}
                                  >
                                    {option.icon}
                                  </div>

                                  <label className="text-sm font-medium cursor-pointer whitespace-nowrap">
                                    {option.name}
                                  </label>

                                  <input
                                    type="radio"
                                    id={option.name.replace(" ", "")}
                                    name="cabinClass"
                                    checked={cabinClass === option.name}
                                    onChange={() => setCabinClass(option.name)}
                                    className="sr-only"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Done button */}
                          <button
                            onClick={() => setIsDropDownOpen(false)}
                            className="w-full py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-600 hover:text-white transition-all duration-300"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {(activeTab === "Buses" || activeTab === "Trains") && (
                <>
                  <div className="relative flex items-center w-full max-w-2xl">
                    <div className="flex-1 bg-white/20 backdrop-blur rounded-l-xl py-3 pl-3 pr-10 border border-white/30 hover:bg-white/30 transition z-10">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        From
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={fromDestination}
                          onChange={(e) => setFromDestination(e.target.value)}
                          placeholder="Enter departure location"
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                        <IoIosSearch
                          className="text-gray-900 ml-2"
                          size={20}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <button
                        onClick={handleSwapDestinations}
                        className="rounded-full w-10 h-10 flex items-center justify-center bg-white/20 text-gray-800 shadow-md hover:bg-white/40 transition-colors duration-300 focus:outline-none cursor-pointer"
                        aria-label="Swap destinations"
                      >
                        <TiArrowRepeat size={20} />
                      </button>
                    </div>

                    <div className="flex-1 bg-white/20 backdrop-blur rounded-r-xl py-3 pr-3 pl-10 border border-white/30 hover:bg-white/30 transition z-10">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        To
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={toDestination}
                          onChange={(e) => setToDestination(e.target.value)}
                          placeholder="Enter arrival location"
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                        <IoIosSearch
                          className="text-gray-900 ml-2"
                          size={20}
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-white/30 hover:bg-white/30 transition">
                      <label className="block text-xs font-bold text-gray-800/80 mb-1">
                        Departure Date
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          value={departureDate.toISOString().split("T")[0]}
                          onChange={(e) =>
                            setDepartureDate(new Date(e.target.value))
                          }
                          className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Search Button */}
            <div className="mt-8 flex justify-center items-center">
              <button
                onClick={handleSearch}
                className="w-full h-10 md:w-auto bg-gradient-to-r from-blue-500/40 to-purple-600/50 hover:from-blue-600/50 hover:to-purple-700/70 text-white font-medium py-6 px-20 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
              >
                <span className="mr-2">Search</span>
                <HiArrowLongRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
