"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blogCard";

import BlogBanner from "@/assets/gt-blogbanner.webp";

export default function page() {
  return (
    <>
      <div className="relative">
        <Image
          src={BlogBanner}
          alt="Home Banner"
          className="relative object-cover w-full h-full"
        />

        <div className="absolute bg-black opacity-30 top-0 left-0 w-full h-full"></div>
      </div>

      <div className="max-w-[90rem] mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b border-gray-200 mb-5 flex justify-between text-sm">
          <div
            className="text-amber-800/70 flex items-center pb-2 pr-2 border-b-2 border-amber-800 text-[3rem]"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            <Link href="#" className="font-semibold inline-block ">
              Traveling Blog
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Array.from({ length: 15 }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
