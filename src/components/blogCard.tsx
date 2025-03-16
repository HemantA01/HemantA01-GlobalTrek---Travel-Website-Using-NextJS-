"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TbClock, TbMessage2 } from "react-icons/tb";

import BlogThumbnail from "@/assets/blogThumbnail.webp"

export default function page() {
  return (
    <>
      <Link href={`/blog/1`} className="rounded-2xl overflow-hidden shadow-lg flex flex-col">
        <a href="#"></a>
        <div className="relative p-4">
          <Link href="#">
            <Image
              className="w-full rounded-2xl "
              src={BlogThumbnail}
              alt="Sunset in the mountains"
            />
            <div className="m-4 rounded-2xl hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </Link>
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

              <span className="text-sm font-bold text-white">TRAVEL </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 mb-auto">
          <Link
            href="#"
            className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            Simplest Salad Recipe ever
          </Link>
          <p className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <Link
            href="#"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
               <TbClock size={16} className="text-gray-600" />
            <span className="ml-1">6 mins ago</span>
          </Link>

          <Link
            href="#"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <TbMessage2 size={16} className="text-gray-600" />
            <span className="ml-1">39 Comments</span>
          </Link>
        </div>
      </Link>
    </>
  );
}
