import React from "react";
import Image from "next/image";
import { LuBuilding2 } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";

export default function TourCard({ tour }: { tour: any }) {
  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white border border-gray-300 cursor-pointer shadow-xl hover:transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative rounded-2xl overflow-hidden">
        <Image 
          src={tour.image} 
          alt={tour.destination} 
          className="w-full h-44 object-cover object-center rounded-2xl"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex flex-col justify-end p-4">
          <p className="text-white text-xs tracking-widest uppercase text-center">{tour.name}{tour.country ? ` - ${tour.country}` : ""}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50">
        <div className="flex items-center">
          <IoAirplaneOutline className="w-5 h-5 text-gray-600 mr-1" />
          <span className="text-[0.9rem] text-gray-700 font-semibold">{tour.transportPrice}</span>
        </div>
        
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        
        <div className="flex items-center">
          <LuBuilding2 className="w-5 h-5 text-gray-600 mr-1" />
          <span className="text-sm text-gray-700 font-semibold">{tour.price}</span>
        </div>
      </div>
    </div>
  );
}