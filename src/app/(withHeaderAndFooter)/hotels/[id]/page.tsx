"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { toast } from "react-hot-toast";

import { GoPeople } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { BsDashLg } from "react-icons/bs";
import { TbHours24 } from "react-icons/tb";
import { PiBroom } from "react-icons/pi";
import {
  StarIcon,
  Bookmark,
  MapPin,
  MoveRight,
  ChevronDown,
  ChevronUp,
  Wifi,
  Tv,
  Snowflake,
} from "lucide-react";

import img1 from "@/assets/Hotels/img-1.webp";
import img2 from "@/assets/Hotels/img-2.webp";
import img3 from "@/assets/Hotels/img-3.webp";
import img4 from "@/assets/Hotels/img-4.webp";
import img5 from "@/assets/Hotels/img-5.webp";

export default function Page() {
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [destination, setDestination] = useState("Delhi, India");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isMoreThan9, setIsMoreThan9] = useState(false);
  const [activeTag, setActiveTag] = useState("Overview");
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [img1, img2, img3, img4, img5];

  const tags = [
    "Overview",
    "Rooms & Suites",
    "Facilities",
    "Location",
    "Reviews",
    "FAQs",
  ];

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
      0
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
      0
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

  const checkTotalTravelers = (a: number, c: number, i: number) => {
    const total = a + c + i;
    setIsMoreThan9(total > 9);
  };

  const handleDone = () => {
    setIsGuestsOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-[200vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-t from-alpine-900/40 to-[#3F4F44]"></div>
        </div>

        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 flex items-center justify-start max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-4 justify-center w-full">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <div className="bg-white/50 backdrop-blur rounded-xl p-3 border border-gray-200 transition">
                  <label className="block text-xs font-bold text-gray-800/80 mb-1">
                    City, State, Country or Hotel Name
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
                <div className="bg-white/50 backdrop-blur rounded-xl p-3 border border-gray-200 transition">
                  <label className="block text-xs font-bold text-gray-800/80 mb-1">
                    Check-in Date
                  </label>
                  <div className="flex items-center">
                    <input
                      type="date"
                      value={startDate.toISOString().split("T")[0]}
                      onChange={(e) => setStartDate(new Date(e.target.value))}
                      className="w-full bg-transparent text-gray-800 placeholder-gray-800/60 text-[1rem] font-medium border-none focus:ring-0 p-0 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-white/50 backdrop-blur rounded-xl p-3 border border-gray-200 transition">
                  <label className="block text-xs font-bold text-gray-800/80 mb-1">
                    Check-Out Date
                  </label>
                  <div className="flex items-center">
                    <input
                      type="date"
                      value={endDate.toISOString().split("T")[0]}
                      onChange={(e) => {
                        if (
                          e.target.value > startDate.toISOString().split("T")[0]
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
                  className="bg-white/50 backdrop-blur rounded-xl p-3 border border-gray-200 transition cursor-pointer guests-select"
                  onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                >
                  <label className="block text-xs font-bold text-gray-800/80 mb-1">
                    Rooms & Guests
                  </label>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium text-[1rem]">
                      {`${adults} adult${adults > 1 ? "s" : ""}, ${rooms} room${
                        rooms > 1 ? "s" : ""
                      }`}
                      {children > 0
                        ? `, ${children} child${children > 1 ? "ren" : ""}`
                        : ""}
                    </span>
                    <GoPeople size={20} />
                  </div>
                </div>
                {isGuestsOpen && (
                  <div className="absolute top-full left-0 w-110 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <div>
                            <strong>Rooms</strong>
                            <div className="text-xs text-gray-500">(max 9)</div>
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

              {/* <div className="relative flex items-center justify-center">
                        <button className="flex items-center justify-center gap-2 border-2 border-[#D5C7A3] hover:bg-[#D5C7A3] text-[#D5C7A3] hover:text-white font-normal text-sm py-2 px-4 w-[120px] rounded-lg transition cursor-pointer">
                          <FiEdit size={16} />
                          Edit
                        </button>
                      </div> */}
            </div>

            <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
              <div className="w-full flex flex-col md:flex-row gap-2 h-64 md:h-96">
                <div className="w-full md:w-1/2 h-64 md:h-96 flex-shrink-0">
                  <Image
                    src={images[0]}
                    alt="Hotel view"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="w-full md:w-1/2 h-64 md:h-96 grid grid-cols-2 grid-rows-2 gap-2">
                  <div className="w-full h-full">
                    <Image
                      src={images[1]}
                      alt="Hotel view"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="w-full h-full">
                    <Image
                      src={images[2]}
                      alt="Hotel view"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="w-full h-full">
                    <Image
                      src={images[3]}
                      alt="Hotel view"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="w-full h-full relative">
                    <Image
                      src={images[4]}
                      alt="Hotel view"
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="absolute bottom-2 right-2 bg-gradient-to-b from-gray-900/25 to-gray-900/5">
                      <h2 className="text-sm font-semibold text-white bg-black px-4 py-1 rounded-full">
                        10+ more images
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
              <div className="flex justify-between items-center">
                <h2
                  className="text-3xl font-bold tracking-wider text-gray-600 flex gap-2 items-center"
                  style={{ fontFamily: "Losta Masta" }}
                >
                  Grand Ocean Resort
                  <BsDashLg /> New Delhi
                </h2>

                <div className="flex items-center gap-2">
                  <div className="bg-white px-2 py-1 rounded-md text-xs font-semibold border border-gray-300 flex items-center gap-1 w-fit">
                    <StarIcon size={14} className="text-yellow-500" />
                    <span>4.8</span>
                  </div>

                  <button className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium rounded-md hover:bg-amber-200/10 hover:text-amber-500 transition-all duration-300 cursor-pointer">
                    <Bookmark size={14} />
                    Save
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="bg-amber-200/40 p-2 rounded-lg">
                  <MapPin size={20} className="text-amber-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm font-semibold leading-5">
                    New Delhi, India
                  </span>
                  <span className="text-amber-400 text-xs font-medium leading-4 flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-amber-500 hover:scale-105">
                    View on map <MoveRight size={12} color="#f59e0b" />
                  </span>
                </div>
              </div>
            </div>

            <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
              <div className="flex items-center gap-6 border-b border-gray-200 px-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`px-2 py-1 cursor-pointer ${
                      activeTag === tag
                        ? "text-[#7b8869] border-b-2 border-[#A5B68D]"
                        : "text-gray-600"
                    }`}
                    onClick={() => setActiveTag(tag)}
                  >
                    <span className=" text-sm font-medium leading-5">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col items-start border-b border-gray-200 pb-4">
                  <div className="flex flex-col items-start gap-2">
                    <h2
                      className="text-gray-600 text-3xl font-bold leading-5 my-2"
                      style={{ fontFamily: "var(--font-dancing-script)" }}
                    >
                      Overview
                    </h2>
                    <div className="text-gray-400 text-sm font-medium leading-4">
                      <p
                        className={` pr-6 ${
                          isExpanded ? "" : "line-clamp-2"
                        } overflow-hidden`}
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Facere ipsam animi quasi iure nihil exercitationem
                        sapiente minima deleniti quos reprehenderit ex aliquid
                        obcaecati laudantium id libero, dicta adipisci placeat
                        ratione assumenda natus consequuntur mollitia. Iure
                        voluptas numquam laudantium libero aut quae rem eveniet
                        recusandae nisi accusamus iste incidunt quibusdam
                        ratione animi, veniam asperiores tempora enim debitis,
                        porro soluta nulla laborum minima architecto ut! Ad
                        molestiae, iste tempore vitae esse alias repudiandae,
                        soluta similique quos, ipsum deleniti. Fugit porro,
                        impedit repudiandae dignissimos, delectus iure deserunt
                        et alias commodi praesentium nobis? Incidunt quisquam
                        pariatur rem beatae id eligendi expedita laboriosam
                        maiores quaerat.
                      </p>
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-amber-500/70 text-[0.8rem] font-medium leading-4 mt-1 flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>
                            Read Less
                            <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            Read More
                            <ChevronDown size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2 mt-4 w-full">
                    <h2
                      className="text-gray-600 text-3xl font-bold leading-5 my-2"
                      style={{ fontFamily: "var(--font-dancing-script)" }}
                    >
                      Facilities
                    </h2>

                    <div className="flex items-center justify-start gap-10 w-full">
                      <div className="flex flex-col items-center gap-2 ">
                        <div className="bg-amber-200/40 p-2 rounded-lg">
                          <TbHours24 size={20} className="text-amber-500" />
                        </div>
                        <span className="text-gray-600 text-xs font-medium leading-4">
                          24*7 Check-in
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2 ">
                        <div className="bg-amber-200/40 p-2 rounded-lg">
                          <Wifi size={20} className="text-amber-500" />
                        </div>
                        <span className="text-gray-600 text-xs font-medium leading-4">
                          Free WiFi
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2 ">
                        <div className="bg-amber-200/40 p-2 rounded-lg">
                          <Snowflake size={20} className="text-amber-500" />
                        </div>
                        <span className="text-gray-600 text-xs font-medium leading-4">
                          Air Conditioning
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2 ">
                        <div className="bg-amber-200/40 p-2 rounded-lg">
                          <Tv size={20} className="text-amber-500" />
                        </div>
                        <span className="text-gray-600 text-xs font-medium leading-4">
                          Television
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-2 ">
                        <div className="bg-amber-200/40 p-2 rounded-lg">
                          <PiBroom size={20} className="text-amber-500" />
                        </div>
                        <span className="text-gray-600 text-xs font-medium leading-4">
                          House Keeping
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
              <div className="flex flex-col items-start gap-2 w-full">
                <h2
                  className="text-gray-600 text-3xl font-bold leading-5 my-2"
                  style={{ fontFamily: "var(--font-dancing-script)" }}
                >
                  Rooms
                </h2>

                <div className="flex items-center justify-start gap-10 w-full">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
