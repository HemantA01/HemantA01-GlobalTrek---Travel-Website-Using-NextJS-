"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Testimonial from "@/components/testimonial";
import FAQ from "@/app/_components/faq";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
import { roomTypes, amenities, reviews, faqItems } from "@/assets/data";

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
  const navigate = useRouter();
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
  const [expandedRoom, setExpandedRoom] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetPosition = 600;
      setIsSticky(scrollTop > targetPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [img1, img2, img3, img4, img5];

  const tags = [
    "Overview",
    "Rooms & Suites",
    "Facilities",
    "Location",
    "Reviews",
    "FAQs",
  ];

  const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    tags.map(() =>
      React.createRef<HTMLDivElement>()
    ) as React.RefObject<HTMLDivElement>[]
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tag = entry.target.getAttribute("data-tag") || "Overview";
          setActiveTag(tag);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

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

  const handleBookNow = (room: any) => {
    navigate.push(`/hotels/bookingHotel/${room.id}`);
  };

  return (
    <>
      <div className="relative w-full h-[28vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-t from-alpine-900/40 to-[#3F4F44]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-3 w-full">
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
        </div>
      </div>

      <div className="flex items-center justify-start max-w-7xl mx-auto w-full -mt-20">
        <div className="flex flex-col gap-4 justify-center w-full">
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

          <div
            className={`bg-white backdrop-blur rounded-lg transition p-6 z-40 shadow-md ${
              isSticky
                ? "fixed top-[72px] left-0 w-full border-none px-4 flex justify-center"
                : "sticky top-[72px] border border-gray-200 w-auto"
            }`}
          >
            <div
              className={`flex items-center gap-6 border-b border-gray-200 px-2 ${
                isSticky ? "justify-center w-full max-w-7xl" : ""
              }`}
            >
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className={`px-2 py-1 cursor-pointer ${
                    activeTag === tag
                      ? "text-[#7b8869] border-b-2 border-[#A5B68D]"
                      : "text-gray-600"
                  }`}
                  onClick={() => {
                    setActiveTag(tag);
                    sectionRefs.current[index].current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <span className="text-sm font-medium leading-5">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
            <div className="flex flex-col items-start gap-2">
              <div
                className="flex flex-col items-start border-b border-gray-200 pb-4"
                ref={sectionRefs.current[0]}
                data-tag={tags[0]}
              >
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Facere ipsam animi quasi iure nihil exercitationem
                      sapiente minima deleniti quos reprehenderit ex aliquid
                      obcaecati laudantium id libero, dicta adipisci placeat
                      ratione assumenda natus consequuntur mollitia. Iure
                      voluptas numquam laudantium libero aut quae rem eveniet
                      recusandae nisi accusamus iste incidunt quibusdam ratione
                      animi, veniam asperiores tempora enim debitis, porro
                      soluta nulla laborum minima architecto ut! Ad molestiae,
                      iste tempore vitae esse alias repudiandae, soluta
                      similique quos, ipsum deleniti. Fugit porro, impedit
                      repudiandae dignissimos, delectus iure deserunt et alias
                      commodi praesentium nobis? Incidunt quisquam pariatur rem
                      beatae id eligendi expedita laboriosam maiores quaerat.
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
            <div
              className="flex flex-col items-start gap-2 w-full"
              ref={sectionRefs.current[1]}
              data-tag={tags[1]}
            >
              <h2
                className="text-gray-600 text-3xl font-bold leading-5 my-2"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                Rooms & Suites
              </h2>

              <div className="w-full max-w-[80rem] mx-auto overflow-hidden">
                {/* Header */}
                {/* Card-based room listing container with fixed height cards */}
                <div className="max-w-7xl mx-auto p-6 bg-gray-50">
                  {/* Header */}
                  <div className="text-start mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Find Your Perfect Room
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Select from our premium accommodations designed for your
                      comfort and convenience
                    </p>
                  </div>

                  {/* Room cards grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roomTypes.map((room) => (
                      <div
                        key={room.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                      >
                        {/* Room image - fixed height */}
                        <div className="relative h-52">
                          <Image
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover"
                          />

                          {/* Discount badge */}
                          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md font-medium text-xs">
                            {room.discount} OFF
                          </div>
                        </div>

                        {/* Room details - flex grow to fill available space */}
                        <div className="p-4 flex flex-col flex-grow">
                          {/* Room title and price - consistent height */}
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                              {room.name}
                            </h3>
                            <div className="flex flex-col items-end">
                              <span className="line-through text-gray-400 text-xs">
                                ₹{room.originalPrice}
                              </span>
                              <span className="text-xl font-bold text-gray-900">
                                ₹{room.price}
                              </span>
                            </div>
                          </div>

                          {/* Subtitle - truncated to 1 line */}
                          <p className="text-gray-600 text-sm mb-2 line-clamp-1">
                            {room.subTitle}
                          </p>

                          {/* Room tags - limited to 2 with counter for rest */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {(room.details ?? [])
                              .slice(0, 2)
                              .map((detail, idx) => (
                                <span
                                  key={idx}
                                  className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                                >
                                  {detail}
                                </span>
                              ))}
                            {(room.details ?? []).length > 2 && (
                              <span className="text-blue-600 text-xs font-medium">
                                +{(room.details ?? []).length - 2} more
                              </span>
                            )}
                          </div>

                          {/* Amenities - always showing exactly 3 */}
                          <div className="mb-3">
                            <div className="grid grid-cols-1 gap-1">
                              {room.amenities
                                .slice(0, 3)
                                .map((amenity, idx) => (
                                  <div key={idx} className="flex items-center">
                                    <span className="text-green-500 mr-1 text-sm">
                                      ✓
                                    </span>
                                    <span className="text-xs text-gray-700 line-clamp-1">
                                      {amenity}
                                    </span>
                                  </div>
                                ))}
                            </div>

                            {room.amenities.length > 3 && (
                              <div className="text-blue-600 text-xs font-medium mt-1">
                                +{room.amenities.length - 3} more amenities
                              </div>
                            )}
                          </div>

                          {/* Price details - consistent placement */}
                          <div className="text-xs text-gray-500 mb-2">
                            + ₹{room.tax} Taxes & fees • Per Night •
                            Non-Refundable
                          </div>

                          {/* Coupon info - conditional but fixed height */}
                          <div className="h-6 mb-3">
                            {room.couponApplied && (
                              <div className="flex items-center text-green-600 text-xs">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="font-medium">
                                  {room.couponApplied}
                                </span>{" "}
                                coupon applied
                              </div>
                            )}
                          </div>

                          {/* Spacer to push button to bottom */}
                          <div className="flex-grow"></div>

                          {/* Book now button - consistent placement at bottom */}
                          <button
                            onClick={() => handleBookNow(room)}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
            <div
              className="flex flex-col items-start gap-2 w-full"
              ref={sectionRefs.current[2]}
              data-tag={tags[2]}
            >
              <h2
                className="text-gray-600 text-3xl font-bold leading-5 my-2"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                Luxury at Your Fingertips ✨
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 place-items-center justify-center gap-8 mt-4 ml-5">
                {amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/40 to-amber-400/70 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="mb-3 text-2xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300 rounded-full p-2 shadow-md">
                        {amenity.icon}
                      </div>
                      <span className="font-semibold text-gray-800 group-hover:text-gray-900 text-xs">
                        {amenity.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
            <div
              className="flex flex-col items-start gap-2 w-full"
              ref={sectionRefs.current[3]}
              data-tag={tags[3]}
            >
              <h2
                className="text-gray-600 text-3xl font-bold leading-5 my-2 flex items-center gap-2"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                <MapPin /> Located in the Heart of <BsDashLg /> New Delhi
              </h2>

              <div
                style={{
                  overflow: "hidden",
                  resize: "none",
                  maxWidth: "100%",
                  height: "300px",
                }}
                className="w-full mt-4"
              >
                <div
                  id="my-map-display"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Deli&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
                <a
                  className="embed-map-html"
                  rel="nofollow"
                  href="https://www.bootstrapskins.com/themes"
                  id="grab-map-info"
                >
                  premium bootstrap themes
                </a>
              </div>
            </div>
          </div>

          <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6">
            <div
              className="flex flex-col items-start gap-2 w-full"
              ref={sectionRefs.current[4]}
              data-tag={tags[4]}
            >
              <h2
                className="text-gray-600 text-3xl font-bold leading-5 my-2 flex items-center gap-2"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                What Our Guests Say
              </h2>

              <div className="w-full mt-4">
                <Testimonial review={reviews} />
              </div>
            </div>
          </div>

          <div className=" bg-white backdrop-blur rounded-lg border border-gray-200 transition p-6 mb-6">
            <div
              className="flex flex-col items-start gap-2 w-full"
              ref={sectionRefs.current[5]}
              data-tag={tags[5]}
            >
              <div className="container mx-auto px-4 flex items-start gap-6">
                <div className="text-start mb-12">
                  <div className="border-l-4 border-red-700 rounded-l-sm">
                    <h2
                      className="text-[2.5rem] font-bold text-gray-800 mb-4 ml-4"
                      style={{ fontFamily: "var(--font-dancing-script)" }}
                    >
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    If you have any questions or need help with your trip,
                    please don't hesitate to contact us. We'll do our best to
                    respond to your inquiry within 24 hours. Thanks for choosing
                    us!
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  {faqItems
                    .map((item, index) => <FAQ items={item} key={index} />)
                    .slice(0, 5)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
