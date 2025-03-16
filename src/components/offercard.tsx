import React from "react";
import { FaGift } from "react-icons/fa";
import OfferImage from "@/assets/offer.webp";
import Image from "next/image";

export default function OfferCard() {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl w-96 bg-gradient-to-br from-gray-50 to-yellow-100 border border-yellow-200">
      <div className="absolute inset-0 z-0">
        <Image
          src={OfferImage}
          alt="Offer Image"
          layout="fill"
          objectFit="cover"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-500/20 to-amber-600/20" />
      </div>

      <div className="absolute -right-16 top-6 z-10 transform rotate-45">
        <div className="bg-yellow-500 py-1 px-16 shadow-md relative">
          <div
            className="absolute left-0 -bottom-2 w-2 h-2 bg-yellow-700 clip-path-fold"
            style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
          />
          <div
            className="absolute right-0 -bottom-2 w-2 h-2 bg-yellow-700 clip-path-fold"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />

          <span className="text-sm font-bold text-white">LIMITED TIME</span>
        </div>
      </div>

      <div className="relative z-10 p-8 flex flex-col items-center">
        <div className="mb-6 mt-2 relative">
          <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md transform scale-110 opacity-60" />
          <div className="relative bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full shadow-lg">
            <FaGift size={40} className="text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-extrabold mb-2 text-gray-800 tracking-tight">
          Special Offer!
        </h2>
        <div className="w-12 h-1 bg-yellow-500 rounded mb-4" />
        <p className="text-lg mb-2 text-gray-700">Get an exclusive</p>
        <p className="text-4xl font-black mb-4 text-yellow-600">20% OFF</p>
        <p className="text-gray-600 mb-6">on your first booking</p>

        <button className="group relative bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <span className="relative z-10">BOOK NOW</span>
          <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <p className="text-xs text-gray-900 mt-4">*Valid until end of month</p>
      </div>
    </div>
  );
}
