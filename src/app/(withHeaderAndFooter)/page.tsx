"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "../_components/searchBar";
import OfferCard from "@/components/offercard";
import TravelCard from "@/components/travellCard";
import FeaturedCard from "@/components/featureCard";
import BlogHomeCard from "../_components/blogHomeCard";

import {motion} from "motion/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  indianDestination,
  internationalDestination,
  hotel,
} from "@/assets/data";
import { PrevArrow, NextArrow } from "@/components/navigationArrow";

export default function Page() {
  const [activeTabs, setActiveTabs] = useState(0);

  const tags = ["New Delhi & NCR", "Mumbai", "Chennai", "Bangalore", "Goa"];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    smoothScroll: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPosition = window.innerHeight * 0.1; 
            
            if (scrollPosition > triggerPosition) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const boxVariants = {
        hidden: {
            opacity: 0,
            y: 100,            
            filter: "blur(20px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)", 
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

  return (
    <>
      <SearchBar />

      {/* Offer Cards Section */}

      <motion.div
       variants={boxVariants}
       initial="hidden"
       animate={isVisible ? "visible" : "hidden"}
       className="flex flex-wrap justify-center gap-10 mt-[5rem] mb-[5rem] z-10">
        {[1, 2, 3].map((_, index) => (
          <OfferCard key={index} />
        ))}
      </motion.div>

      {/* Travel Cards Slider Section */}
      <div className="px-[2rem] md:px-[4rem] lg:px-[8rem] mb-[5rem]">
        <div className="flex justify-between items-center mb-6 mx-10 border-b border-gray-200">
          <h2
            className="text-[2.5rem] text-gray-600 font-bold"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Explore Indian Destinations
          </h2>
          <div className="flex items-center gap-2">
            <Link href="/tourism?type=domestic" className="text-sm text-gray-500">View all destinations</Link>
            <FaChevronRight className="text-gray-500" size={12} />
          </div>
        </div>

        <div className="slider-container py-8 px-4">
          <style jsx global>{`
            .slick-track {
              display: flex !important;
              gap: 16px;
            }
            .slick-slide {
              height: inherit !important;
            }
            .slick-slide > div {
              height: 100%;
            }
            .custom-dots {
              bottom: -30px;
            }
            .custom-dots li button:before {
              font-size: 10px;
              color: #cbd5e1;
            }
            .custom-dots li.slick-active button:before {
              color: #3b82f6;
            }
          `}</style>

          <Slider {...settings}>
            {indianDestination.map((destination) => (
              <div key={destination.id} className="px-2 h-full">
                <TravelCard destination={destination} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="px-[2rem] md:px-[4rem] lg:px-[8rem] mb-[5rem]">
        <div className="flex justify-between items-center mb-6 mx-10">
          <h2
            className="text-[2.5rem] text-gray-600 font-bold"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Featured Rooms Recommended for you
          </h2>
        </div>

        <div className="flex items-center justify-between mx-10 mb-6 border-b border-gray-200">
          <div className="flex gap-8 overflow-x-auto whitespace-nowrap ">
            {tags.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTabs(index)}
                className={` cursor-pointer px-4 ${
                  activeTabs === index
                    ? "border-b-2 border-gray-700 text-gray-800 font-semibold"
                    : "text-gray-600 hover:font-semibold"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <h3 className="flex items-center gap-2 text-sm cursor-pointer">
            See More{" "}
            <span className="text-blue-800/50 font-bold">
              {" "}
              {tags[activeTabs]}{" "}
            </span>{" "}
            Rooms
            <FaChevronRight size={12} />
          </h3>
        </div>

        <div className="slider-container py-8 px-4">
          <style jsx global>{`
            .slick-track {
              display: flex !important;
              gap: 16px;
            }
            .slick-slide {
              height: inherit !important;
            }
            .slick-slide > div {
              height: 100%;
            }
            .custom-dots {
              bottom: -30px;
            }
            .custom-dots li button:before {
              font-size: 10px;
              color: #cbd5e1;
            }
            .custom-dots li.slick-active button:before {
              color: #3b82f6;
            }
          `}</style>

          <Slider {...settings}>
            {hotel.map((hotel) => (
              <div key={hotel.id} className="px-2 h-full">
                <FeaturedCard hotel={hotel} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="px-[2rem] md:px-[4rem] lg:px-[8rem] mb-[5rem]">
        <div className="flex justify-between items-center mb-6 mx-10 border-b border-gray-200">
          <h2
            className="text-[2.5rem] text-gray-600 font-bold"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Explore International Destinations
          </h2>
          <div className="flex items-center gap-2">
            <Link href="/tourism?type=international" className="text-sm text-gray-500">View all destinations</Link>
            <FaChevronRight className="text-gray-500" size={12} />
          </div>
        </div>

        <div className="slider-container py-8 px-4">
          <style jsx global>{`
            .slick-track {
              display: flex !important;
              gap: 16px;
            }
            .slick-slide {
              height: inherit !important;
            }
            .slick-slide > div {
              height: 100%;
            }
            .custom-dots {
              bottom: -30px;
            }
            .custom-dots li button:before {
              font-size: 10px;
              color: #cbd5e1;
            }
            .custom-dots li.slick-active button:before {
              color: #3b82f6;
            }
          `}</style>

          <Slider {...settings}>
            {internationalDestination.map((destination) => (
              <div key={destination.id} className="px-2 h-full">
                <TravelCard destination={destination} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="px-[2rem] md:px-[4rem] lg:px-[8rem] mb-[5rem]">
        <div className="flex justify-between items-center mb-6 mx-10 border-b border-gray-200">
          <h2
            className="text-[2.5rem] text-gray-600 font-bold"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Discover Inspiring Travel Stories & Adventures
          </h2>
        </div>

        <div className="slider-container py-8 px-4">
          <style jsx global>{`
            .slick-track {
              display: flex !important;
              gap: 16px;
            }
            .slick-slide {
              height: inherit !important;
            }
            .slick-slide > div {
              height: 100%;
            }
            .custom-dots {
              bottom: -30px;
            }
            .custom-dots li button:before {
              font-size: 10px;
              color: #cbd5e1;
            }
            .custom-dots li.slick-active button:before {
              color: #3b82f6;
            }
          `}</style>

          <Slider {...settings}>
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} className="px-2 h-full">
                <BlogHomeCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
