import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 transition-all">
        <FaChevronLeft />
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 transition-all">
        <FaChevronRight />
      </div>
    </div>
  );
};

export { PrevArrow, NextArrow };
