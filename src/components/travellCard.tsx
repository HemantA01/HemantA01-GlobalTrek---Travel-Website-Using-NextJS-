import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBed, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function TravelCard({ destination }: { destination: any }) {
  const getTagColors = (index: number) => {
    const colorSchemes = [
      { bg: "bg-blue-100", text: "text-blue-700" },
      { bg: "bg-green-100", text: "text-green-700" },
      { bg: "bg-amber-100", text: "text-amber-700" },
      { bg: "bg-rose-100", text: "text-rose-700" },
      { bg: "bg-purple-100", text: "text-purple-700" },
      { bg: "bg-cyan-100", text: "text-cyan-700" },
      { bg: "bg-emerald-100", text: "text-emerald-700" },
      { bg: "bg-orange-100", text: "text-orange-700" },
      { bg: "bg-indigo-100", text: "text-indigo-700" },
      { bg: "bg-fuchsia-100", text: "text-fuchsia-700" },
    ];

    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <div className="relative w-84 overflow-hidden group cursor-pointer">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={destination.image}
            alt="Humayun's Tomb in Delhi"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 shadow-lg">
          <FaMapMarkerAlt className="mr-1 text-rose-500" />
          <span>{destination.city}</span>
        </div>

        <div className="absolute top-4 right-4 flex items-center rounded-full bg-yellow-400/90 px-3 py-1 text-sm font-bold text-gray-800 shadow-lg">
          <FaStar className="mr-1" />
          <span>{destination.rating}</span>
        </div>
      </div>

      <div className="relative bg-white p-4 text-center">
        <h3 className="text-xl font-bold text-gray-700">{destination.name} {destination.country && `, ${destination.country}`}</h3>

        <div className="flex items-center text-gray-600 justify-center">
          <FaBed className="mr-2 text-[#3F4F44]" />
          <span className="font-medium text-xs">
            {destination.accomodation} accommodations
          </span>
        </div>

        {/* <div className="mt-3 flex flex-wrap gap-2">
          {destination.tags &&
            destination.tags.map((tag: string, index: number) => {
              const colors = getTagColors(index);
              return (
                <span
                  key={index}
                  className={`rounded-full ${colors.bg} px-2 py-1 text-[0.7rem] font-medium ${colors.text}`}
                >
                  {tag}
                </span>
              );
            })}
        </div>

        <button className="mt-4 w-full py-2 font-medium">
        <div className="relative inline-flex items-center justify-center gap-4 group w-full">
          <div className="w-full absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <Link
            role="button"
            className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            title="payment"
            href="#"
          >
            Explore Now
          </Link>
        </div>
        </button> */}
      </div>
    </div>
  );
}
