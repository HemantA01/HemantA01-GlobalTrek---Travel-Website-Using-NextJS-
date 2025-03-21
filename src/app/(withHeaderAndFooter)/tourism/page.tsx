"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/assets/Tourism/img1.webp";
import img2 from "@/assets/Tourism/img2.webp";
import img3 from "@/assets/Tourism/img3.webp";
import img4 from "@/assets/Tourism/img4.webp";
import { useSearchParams, useRouter } from "next/navigation";

import { indianTours, continentTours, internationalTours } from "@/assets/data";

import TourCard from "@/components/tourCard";

import backMap from "@/assets/Tourism/backmap.webp";

const destinations = [
  { src: img4, title: "Turkiye", subtitle: " Where History Meets Horizon" },
  { src: img1, title: "Nagaland", subtitle: " Unveiling Nature's Secrets" },
  { src: img2, title: "Goa", subtitle: "Where the Sea Kisses the Shore" },
  { src: img3, title: "Switzerland", subtitle: "The Heart of Alpine Bliss" },
];

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const router = useRouter();

  const handleClick = (item: any) => {
    setIsActive(item);

    const newType =
      item === "domestic"
        ? "domestic"
        : item === "international"
        ? "international"
        : "continental";
    router.push(`/tourism?type=${newType}`);
  };

  const [isActive, setIsActive] = React.useState(type);

  const [budgetRange, setBudgetRange] = useState([0, 100]);
  const [travelTimeRange, setTravelTimeRange] = useState([0, 12]);

  const handleBudgetChange = (e: any) => {
    const value = parseInt(e.target.value);
    const index = e.target.dataset.index;

    let newRange = [...budgetRange];
    newRange[index] = value;

    // Ensure min doesn't exceed max and vice versa
    if (index === "0" && value > budgetRange[1]) {
      newRange[0] = budgetRange[1];
    } else if (index === "1" && value < budgetRange[0]) {
      newRange[1] = budgetRange[0];
    }

    setBudgetRange(newRange);
  };

  const handleTravelTimeChange = (e: any) => {
    const value = parseInt(e.target.value);
    const index = e.target.dataset.index;

    let newRange = [...travelTimeRange];
    newRange[index] = value;

    // Ensure min doesn't exceed max and vice versa
    if (index === "0" && value > travelTimeRange[1]) {
      newRange[0] = travelTimeRange[1];
    } else if (index === "1" && value < travelTimeRange[0]) {
      newRange[1] = travelTimeRange[0];
    }

    setTravelTimeRange(newRange);
  };

  const formatBudgetValue = (value: number) => {
    const maxValue = 100;
    const ratio = value / maxValue;

    if (ratio <= 0.17) return `₹${Math.round(ratio * 1000)}`;
    if (ratio <= 0.33) return `₹${Math.round(ratio * 3000)}K`;
    if (ratio <= 0.5) return `₹${Math.round(ratio * 2000) + 1}K`;
    if (ratio <= 0.67) return `₹${Math.round(ratio * 1500) + 2}K`;
    if (ratio <= 0.83) return `₹${Math.round(ratio * 1200) + 5}K`;
    return `₹${Math.round((ratio - 0.83) * 6000) + 50}K`;
  };

  // Calculate positions for sliders as percentages
  const getBudgetLeftPosition = () => `${budgetRange[0]}%`;
  const getBudgetRightPosition = () => `${100 - budgetRange[1]}%`;
  const getBudgetRangeWidth = () => `${budgetRange[1] - budgetRange[0]}%`;

  const getTimeLeftPosition = () => `${(travelTimeRange[0] / 12) * 100}%`;
  const getTimeRightPosition = () =>
    `${100 - (travelTimeRange[1] / 12) * 100}%`;
  const getTimeRangeWidth = () =>
    `${((travelTimeRange[1] - travelTimeRange[0]) / 12) * 100}%`;

  return (
    <>
      <div className="w-full h-[60vh] overflow-hidden relative">
        <Slider {...settings}>
          {destinations.map((item, index) => (
            <div key={index} className="relative w-full h-[60vh]">
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="brightness-30" // Dark overlay effect
              />
              {/* Overlay Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center">
                <p className="text-3xl">{item.subtitle}</p>
                <h1
                  className="text-[3.5rem] font-bold"
                  style={{ fontFamily: "Losta Masta" }}
                >
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="max-w-[90rem] mx-auto my-20 px-6 ">
        <div className="text-start mb-16">
          <span
            className="block text-sm font-light uppercase tracking-widest text-amber-500 mb-2"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Discover Most
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "Losta Masta" }}
          >
            Elysian Destinations
          </h1>
          <div className="h-px w-24 bg-amber-400 my-8"></div>
          <p className="text-gray-600 mx-auto text-lg font-light">
            Explore the world's most captivating destinations, where the magic
            of nature meets the allure of culture.
          </p>
        </div>

        <div className="flex items-center justify-start space-x-8 border-b border-gray-100">
          {["international", "domestic", "continental"].map((item, index) => (
            <div
              key={index}
              className={`relative cursor-pointer pb-3 px-4 transition-all duration-300 ${
                isActive === item
                  ? "text-amber-800 font-medium border-b-2 border-amber-800"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => handleClick(item)}
            >
              <span className="text-base tracking-wide">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-between my-8 w-full gap-4 ">
          <div className="w-[22%] shadow-slate-300 shadow-2xl bg-white rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center border-b border-gray-300">
              <span className="mb-2">Filters</span>{" "}
              <span className="text-amber-500 text-sm font-normal mb-2">
                Clear All
              </span>
            </h2>
            <div className="w-full">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-3">
                  Budget
                </h2>
                <div className="px-1 mb-4">
                  <div className="relative h-[0.10rem] bg-gray-200 rounded-full">
                    <div
                      className="absolute h-[0.10rem] bg-blue-500 rounded-full"
                      style={{
                        left: getBudgetLeftPosition(),
                        right: getBudgetRightPosition(),
                      }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={budgetRange[0]}
                      data-index="0"
                      onChange={handleBudgetChange}
                      className="absolute w-full h-[0.10rem] opacity-0 cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={budgetRange[1]}
                      data-index="1"
                      onChange={handleBudgetChange}
                      className="absolute w-full h-[0.10rem] opacity-0 cursor-pointer"
                    />
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                      style={{ left: getBudgetLeftPosition() }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full top-1/2 -translate-y-1/2 translate-x-1/2"
                      style={{ right: getBudgetRightPosition() }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>₹0</span>
                    <span>₹1K</span>
                    <span>₹5K</span>
                    <span>₹10K</span>
                    <span>₹20K</span>
                    <span>₹50K</span>
                    <span>₹1L+</span>
                  </div>
                  <div className="text-sm font-medium text-blue-500 mt-2">
                    {formatBudgetValue(budgetRange[0])} -{" "}
                    {formatBudgetValue(budgetRange[1])}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-3">
                  Travel time
                </h2>
                <div className="px-1 mb-4">
                  <div className="relative h-[0.10rem] bg-gray-200 rounded-full">
                    <div
                      className="absolute h-[0.10rem] bg-blue-500 rounded-full"
                      style={{
                        left: getTimeLeftPosition(),
                        right: getTimeRightPosition(),
                      }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={travelTimeRange[0]}
                      data-index="0"
                      onChange={handleTravelTimeChange}
                      className="absolute w-full h-[0.10rem] opacity-0 cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={travelTimeRange[1]}
                      data-index="1"
                      onChange={handleTravelTimeChange}
                      className="absolute w-full h-[0.10rem] opacity-0 cursor-pointer"
                    />
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                      style={{ left: getTimeLeftPosition() }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full top-1/2 -translate-y-1/2 translate-x-1/2"
                      style={{ right: getTimeRightPosition() }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>0</span>
                    <span className="ml-auto">12hr+</span>
                  </div>
                  <div className="text-sm font-medium text-blue-500 mt-2">
                    {travelTimeRange[0]}hr - {travelTimeRange[1]}hr
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%]">
            <div className="grid grid-cols-3 gap-4">
              {type === "domestic" &&
                indianTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}

              {type === "continental" &&
                continentTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}

              {type === "international" &&
                internationalTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
          </div>
        </div>

        <div className="relative w-full rounded-[3rem] overflow-hidden my-16">
          <Image
            src={backMap}
            alt="Back Map"
            layout="responsive"
            objectFit="cover"
            width={1920}
            height={1080}
            className="rounded-[3rem]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 flex flex-col justify-start items-center p-8">
            <h2
              className="text-[2.5rem] font-semibold text-white"
              style={{ fontFamily: "Losta Masta" }}
            >
              Welcome to GlobeTrek
            </h2>
            <h3
              className="text-[1.8rem] font-semibold text-white"
              style={{ fontFamily: "Losta Masta" }}
            >
              Discover the world with us
            </h3>

            <p className="text-white text-center mt-4">
              Here at GlobeTrek, we think that travel is about creating lifelong
              memories, forming deep friendships, and taking in the world's
              natural beauty—it's not simply about getting somewhere. With a new
              viewpoint and a love of travel, we can't wait to become your go-to
              guide and transform your wanderlust into actual trips.
            </p>

            <p className="text-white text-center mt-4">
              Our aim is to transform every journey into a series of cherished
              moments by making every trip extraordinary. We are here to make
              sure that every aspect of your trip is enjoyable and seamless,
              from the motivation to discover new locations to the excitement of
              setting foot on far-off shores.
            </p>

            <p className="text-white text-center mt-4">
              GlobeTrek gives you access to a world of limitless opportunities
              by providing a wide variety of travel destinations, adventure
              types, and experiences. We have the perfect location for you,
              whether you're a family looking to create memories together, a
              culture vulture keen to learn about the past, an adrenaline addict
              seeking thrills, or a lone traveler seeking tranquility.
            </p>

            <p className="text-white text-center mt-4">
              Our commitment extends beyond simply planning your vacation. We
              offer a multitude of travel resources, analysis, and guidance to
              assist you in creating the ideal vacation. We are dedicated to
              making your trip painless and worry-free, from scheduling flights
              and accommodations to providing location guides and 24-hour
              assistance.
            </p>

            <p className="text-white text-center mt-4">
              With Globetrek, embark on your next journey and allow us to help
              you tell amazing tales that will last a lifetime. You are just one
              step away from realizing your trip dreams. Greetings from
              Globetrek, where each journey is an exciting adventure waiting to
              happen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
