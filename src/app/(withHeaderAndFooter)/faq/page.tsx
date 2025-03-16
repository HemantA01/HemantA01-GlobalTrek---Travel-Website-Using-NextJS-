"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { faqItems } from "@/assets/data";
import FAQ from "@/app/_components/faq";

import ContactBanner from "@/assets/gt-contactbanner.webp";
export default function page() {
  return (
    <>
      <div className="relative w-full">
        <Image
          src={ContactBanner}
          alt="FAQ Banner"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1
            className="text-4xl md:text-[6rem] font-bold mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-blue-100 text-center">
            Have questions? Find answers to common queries about our services,
            policies, and more. If you need further assistance, we're just a
            message away.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto my-10">
        {faqItems.map((item, index) => (
          <FAQ items={item} key={index} />
        ))}
      </div>
    </>
  );
}
