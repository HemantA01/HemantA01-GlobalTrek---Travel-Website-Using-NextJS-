"use client";

import React from "react";
import Image from "next/image";
import BlogThumbnail from "@/assets/blogThumbnail.webp";
import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function BlogHomeCard() {
  return (
    <>
      <div className="relative w-84 overflow-hidden group cursor-pointer">
        <div className="relative h-56 w-full overflow-hidden rounded-2xl">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={BlogThumbnail}
              alt="Humayun's Tomb in Delhi"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute top-4 left-4 flex items-center rounded-full bg-rose-900/40 px-3 py-1 text-sm font-medium text-gray-100 shadow-lg">
            <span>
               Travel Destinations
            </span>
          </div>

          <div className="absolute bottom-0 w-full flex items-center justify-between rounded-b-2xl bg-black/30 px-3 py-3 text-sm font-medium text-white shadow-lg">
            <h3 className="mr-1">Read More</h3>
            <HiMiniArrowLongRight size={20} className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
