"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HotelCard from "@/app/_components/hotelcard";
import HotelBanner from "@/assets/gt-hotelbanner.webp";

import { GoPeople } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

export default function Page() {
  const [budgetRange, setBudgetRange] = useState([0, 100]);
  const [travelTimeRange, setTravelTimeRange] = useState([0, 12]);
  const [starRating, setStarRating] = useState<number[]>([]);
  const [userRating, setUserRating] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(
    []
  );
  const [neighborhoodSearch, setNeighborhoodSearch] = useState("");
  const [distanceFromCenter, setDistanceFromCenter] = useState(15);

  const handleBudgetChange = (e: any) => {
    const value = parseInt(e.target.value);
    const index = e.target.dataset.index;

    let newRange = [...budgetRange];
    newRange[index] = value;

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

  const getBudgetLeftPosition = () => `${budgetRange[0]}%`;
  const getBudgetRightPosition = () => `${100 - budgetRange[1]}%`;

  const getTimeLeftPosition = () => `${(travelTimeRange[0] / 12) * 100}%`;
  const getTimeRightPosition = () =>
    `${100 - (travelTimeRange[1] / 12) * 100}%`;

  const handleStarRatingChange = (star: any) => {
    if (starRating.includes(star)) {
      setStarRating(starRating.filter((s) => s !== star));
    } else {
      setStarRating([...starRating, star]);
    }
  };

  const handleAmenitiesChange = (amenity: any) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handlePropertyTypeChange = (type: any) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter((t) => t !== type));
    } else {
      setPropertyTypes([...propertyTypes, type]);
    }
  };

  const handleNeighborhoodChange = (neighborhood: any) => {
    if (selectedNeighborhoods.includes(neighborhood)) {
      setSelectedNeighborhoods(
        selectedNeighborhoods.filter((n) => n !== neighborhood)
      );
    } else {
      setSelectedNeighborhoods([...selectedNeighborhoods, neighborhood]);
    }
  };

  const clearAllFilters = () => {
    setBudgetRange([0, 100]);
    setTravelTimeRange([0, 12]);
    setStarRating([]);
    setUserRating([]);
    setSelectedAmenities([]);
    setPropertyTypes([]);
    setSelectedNeighborhoods([]);
    setDistanceFromCenter(15);
    setNeighborhoodSearch("");
  };

  // Apply Filters
  const applyFilters = () => {
    // Implement your filter application logic here
    console.log({
      budgetRange: [
        formatBudgetValue(budgetRange[0]),
        formatBudgetValue(budgetRange[1]),
      ],
      travelTimeRange,
      starRating,
      userRating,
      selectedAmenities,
      propertyTypes,
      selectedNeighborhoods,
      distanceFromCenter,
    });
    // You would typically call a parent function here or update a global state
  };

  return (
    <>
      <div className="relative w-full h-[40vh]">
        <Image
          src={HotelBanner}
          alt="Hotel Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-black opacity-70"></div>
        </div>

        <div className="absolute top-28 left-20  flex flex-col items-start justify-center text-white px-4">
          <h1
            className="text-4xl md:text-[6rem] font-bold mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Hotels
          </h1>
          <p className="text-[0.85rem] md:text-xl max-w-4xl text-blue-100 text-start">
            We offer a wide range of hotels to suit your needs, from luxurious
            resorts to budget-friendly accommodations. Whether you're planning a
            family vacation or a solo getaway, we have the perfect hotel for
            you.
          </p>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b border-gray-200 mb-5 flex justify-between text-sm">
          <div
            className="text-gray-600 flex items-center pb-2 pr-2 border-b-2 border-amber-800 text-[2.5rem] tracking-wide"
            style={{ fontFamily: "Losta Masta" }}
          >
            <Link href="#" className="font-semibold inline-block ">
              Hotels
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-gray-200 transition">
                <label className="block text-xs font-bold text-gray-800/80 mb-1">
                  City, State, Country or Hotel Name
                </label>
                <div className="flex items-center">
                  <h2 className="text-gray-800 font-medium text-[1rem]">
                    New Delhi, India
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-gray-200 transition">
                <label className="block text-xs font-bold text-gray-800/80 mb-1">
                  Check-in Date
                </label>
                <div className="flex items-center">
                  <h2 className="text-gray-800 font-medium text-[1rem]">
                    21 March 2025
                  </h2>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-gray-200 transition">
                <label className="block text-xs font-bold text-gray-800/80 mb-1">
                  Check-Out Date
                </label>
                <div className="flex items-center">
                  <h2 className="text-gray-800 font-medium text-[1rem]">
                    21 March 2025
                  </h2>
                </div>
              </div>
            </div>

            <div className="relative flex-1">
              <div className="bg-white/20 backdrop-blur rounded-xl p-3 border border-gray-200 transition cursor-pointer guests-select">
                <label className="block text-xs font-bold text-gray-800/80 mb-1">
                  Rooms & Guests
                </label>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium text-[1rem]">
                    1 Room, 2 Guests
                  </span>
                  <GoPeople size={20} />
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <button className="flex items-center justify-center gap-2 border-2 border-[#D5C7A3] hover:bg-[#D5C7A3] text-[#D5C7A3] hover:text-white font-normal text-sm py-2 px-4 w-[120px] rounded-lg transition cursor-pointer">
                <FiEdit size={16} />
                Edit
              </button>
            </div>
          </div>
          <div className="flex items-start justify-between gap-6 ">
            <div className="w-[22%] border border-gray-200 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-4 flex-shrink-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center border-b border-gray-300">
                <span className="mb-2">Filters</span>{" "}
                <span className="text-amber-500 text-sm font-normal mb-2 cursor-pointer hover:underline">
                  Clear All
                </span>
              </h2>
              <div className="w-full">
                {/* Property Type Filter */}
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Property Type
                  </h2>
                  <div className="space-y-2">
                    {[
                      "Hotels",
                      "Resorts",
                      "Apartments",
                      "Villas",
                      "Homestays",
                      "Guest Houses",
                    ].map((type) => (
                      <div key={type} className="flex items-center">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            id={`property-${type
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            checked={propertyTypes.includes(type)}
                            onChange={() => handlePropertyTypeChange(type)}
                            className="peer hidden"
                          />
                          <span className="w-4 h-4 border-2 border-gray-200 rounded flex items-center justify-center peer-checked:bg-[#F2E2B1]/70 peer-checked:border-[#F2E2B1]"></span>
                        </label>
                        <label
                          htmlFor={`property-${type.toLowerCase()}`}
                          className="ml-2 text-sm text-gray-600"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Star Rating Filter */}
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Hotel Star Rating
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${
                          starRating.includes(star)
                            ? "bg-[#F2E2B1] text-gray-800 border-[#F2E2B1] font-medium"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#F2E2B1] hover:bg-[#F2E2B1] hover:text-gray-800"
                        }`}
                        onClick={() => handleStarRatingChange(star)}
                      >
                        {star} {star === 1 ? "Star" : "Stars"}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Budget
                  </h2>
                  <div className="px-1 mb-4">
                    <div className="relative h-[0.10rem] bg-gray-200 rounded-full">
                      <div
                        className="absolute h-[0.15rem] bg-[#D5C7A3] rounded-full"
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
                        className="absolute w-4 h-4 bg-white border-2 border-[#D5C7A3] rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                        style={{ left: getBudgetLeftPosition() }}
                      ></div>
                      <div
                        className="absolute w-4 h-4 bg-white border-2 border-[#D5C7A3] rounded-full top-1/2 -translate-y-1/2 translate-x-1/2"
                        style={{ right: getBudgetRightPosition() }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-[#3F4F44]">
                      <span>₹0</span>
                      <span>₹1K</span>
                      <span>₹5K</span>
                      <span>₹10K</span>
                      <span>₹20K</span>
                      <span>₹50K</span>
                      <span>₹1L+</span>
                    </div>
                    <div className="text-sm font-medium text-[#3F4F44] mt-2">
                      {formatBudgetValue(budgetRange[0])} -{" "}
                      {formatBudgetValue(budgetRange[1])}
                    </div>
                  </div>
                </div>

                {/* Amenities Filter */}
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Hotel Amenities
                  </h2>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Free WiFi",
                      "Swimming Pool",
                      "Free Breakfast",
                      "Spa",
                      "Gym/Fitness Center",
                      "Restaurant",
                      "Room Service",
                      "Air Conditioning",
                      "Pet Friendly",
                    ].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            id={`amenity-${amenity
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            checked={selectedAmenities.includes(amenity)}
                            onChange={() => handleAmenitiesChange(amenity)}
                            className="peer hidden"
                          />
                          <span className="w-4 h-4 border-2 border-gray-200 rounded flex items-center justify-center peer-checked:bg-[#F2E2B1]/70 peer-checked:border-[#F2E2B1]"></span>
                        </label>

                        <label
                          htmlFor={`amenity-${amenity
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          className="ml-2 text-sm text-gray-600"
                        >
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neighborhood Filter */}
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Neighborhood
                  </h2>
                  <div className="space-y-2">
                    {[
                      "Downtown",
                      "Beachfront",
                      "Business District",
                      "Historic Center",
                      "Airport Area",
                      "Shopping District",
                      "Entertainment District",
                    ]
                      .filter((n) =>
                        n
                          .toLowerCase()
                          .includes(neighborhoodSearch.toLowerCase())
                      )
                      .map((neighborhood) => (
                        <div key={neighborhood} className="flex items-center">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              id={`neighborhood-${neighborhood
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              checked={selectedNeighborhoods.includes(
                                neighborhood
                              )}
                              onChange={() =>
                                handleNeighborhoodChange(neighborhood)
                              }
                              className="peer hidden"
                            />
                            <span className="w-4 h-4 border-2 border-gray-200 rounded flex items-center justify-center peer-checked:bg-[#F2E2B1]/70 peer-checked:border-[#F2E2B1]"></span>
                          </label>
                          <label
                            htmlFor={`neighborhood-${neighborhood
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            className="ml-2 text-sm text-gray-600"
                          >
                            {neighborhood}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Distance from center filter */}
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Distance from City Center
                  </h2>
                  <div className="px-1 mb-4">
                    <div className="relative h-[0.10rem] bg-gray-200 rounded-full">
                      {/* Progress Bar */}
                      <div
                        className="absolute h-[0.15rem] bg-[#D5C7A3] rounded-full"
                        style={{
                          width: `${(distanceFromCenter / 30) * 100}%`,
                        }}
                      ></div>

                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={distanceFromCenter}
                        onChange={(e) =>
                          setDistanceFromCenter(Number(e.target.value))
                        }
                        className="absolute w-full h-[0.10rem] opacity-0 cursor-pointer"
                      />

                      {/* Thumb (Draggable Circle) */}
                      <div
                        className="absolute w-4 h-4 bg-white border-2 border-[#D5C7A3] rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                        style={{ left: `${(distanceFromCenter / 30) * 100}%` }}
                      ></div>
                    </div>

                    {/* Labels */}
                    <div className="flex justify-between mt-2 text-xs text-[#3F4F44]">
                      <span>0 km</span>
                      <span className="ml-auto">30 km</span>
                    </div>

                    {/* Selected Distance Display */}
                    <div className="text-sm font-medium text-[#3F4F44] mt-2">
                      Less than {distanceFromCenter} km
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-800 mb-3">
                    Travel time
                  </h2>
                  <div className="px-1 mb-4">
                    <div className="relative h-[0.10rem] bg-gray-200 rounded-full">
                      <div
                        className="absolute h-[0.15rem] bg-[#D5C7A3] rounded-full"
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
                        className="absolute w-4 h-4 bg-white border-2 border-[#D5C7A3] rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                        style={{ left: getTimeLeftPosition() }}
                      ></div>
                      <div
                        className="absolute w-4 h-4 bg-white border-2 border-[#D5C7A3] rounded-full top-1/2 -translate-y-1/2 translate-x-1/2"
                        style={{ right: getTimeRightPosition() }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-[#3F4F44]">
                      <span>0</span>
                      <span className="ml-auto">12hr+</span>
                    </div>
                    <div className="text-sm font-medium text-[#3F4F44] mt-2">
                      {travelTimeRange[0]}hr - {travelTimeRange[1]}hr
                    </div>
                  </div>
                </div>

                {/* Apply Filters Button */}
                <button className="w-full bg-[#f2e2b194] hover:bg-[#F2E2B1] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out mt-4 cursor-pointer">
                  Apply Filters
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 w-[78%] max-h-[85rem] overflow-y-auto custom-scrollbar border border-gray-200 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <HotelCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
