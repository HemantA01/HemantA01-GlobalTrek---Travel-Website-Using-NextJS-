import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaStarHalf } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function TravelCard({ hotel }: { hotel: any }) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStar && <FaStarHalf />}
      </div>
    );
  };
  return (
    <div className="relative w-84 overflow-hidden group cursor-pointer">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={hotel.image}
            alt="Humayun's Tomb in Delhi"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 shadow-lg">
          <FaMapMarkerAlt className="mr-1 text-rose-500" />
          <span>{hotel.city}</span>
        </div>
      </div>

      <div className="relative bg-white p-4">
        <h3 className="text-xl font-bold text-blue-800/50">{hotel.name}</h3>

        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <GrLocation className="mr-2 text-[#3F4F44]" />
            <span className="font-medium text-sm">
              {hotel.city} {hotel.country && `, ${hotel.country}`}
            </span>
          </div>

          <div className="w-fit flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-bold text-gray-800 shadow-xs">
            {renderStars(hotel.rating)}
          </div>
        </div>

        <div className="text-[0.7rem] my-2 font-medium text-gray-500">
          Per Night Before Taxes and Fees
        </div>

        <div className="flex items-center text-gray-600">
          <h3 className="mr-2 text-[#F38C79] font-bold text-[1.12rem]">
            {hotel.price}
          </h3>
        </div>
      </div>
    </div>
  );
}
