import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
  WifiIcon,
  TvIcon,
  UtensilsIcon,
  BedDouble,
} from "lucide-react";
import { TbHours24 } from "react-icons/tb";
import img1 from "@/assets/Hotels/img-1.webp";
import img2 from "@/assets/Hotels/img-2.webp";
import img3 from "@/assets/Hotels/img-3.webp";

export default function HotelCard({ id }: { id: string }) {
  const navigate = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-200">
      <div className="relative w-full md:w-2/5">
        <div className="h-64 md:h-auto relative">
          <Image
            src={images[currentImage]}
            alt={`Hotel view ${currentImage + 1}`}
            className="w-full h-full object-cover rounded-t-lg"
          />

          <div className="absolute inset-0 flex items-center justify-between px-3">
            <button
              onClick={prevImage}
              className="bg-white/80 hover:bg-white rounded-full p-1 text-gray-800 cursor-pointer"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={nextImage}
              className="bg-white/80 hover:bg-white rounded-full p-1 text-gray-800 cursor-pointer"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>

          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm flex items-center gap-1">
            <StarIcon size={14} className="text-yellow-500" />
            <span>4.8</span>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="flex justify-center gap-[0.1rem] overflow-x-auto">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`w-full h-16 overflow-hidden cursor-pointer mt-[0.1rem] ${
                index === currentImage
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Hotel data */}
      <div className="p-6 w-full md:w-3/5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl text-gray-900">
              Grand Ocean Resort
            </h3>
            <div className="flex items-baseline">
              <span className="font-bold text-[1.12rem] text-gray-600">
                &#x20B9; 249
              </span>
              <span className="text-xs font-medium text-gray-500 ml-1">
                /night
              </span>
            </div>
          </div>

          <div className="flex items-center text-gray-600 text-sm mb-4">
            <MapPinIcon size={14} className="mr-1" />
            <span>Malibu, California</span>
          </div>

          <p className="text-gray-600 mb-4 text-sm">
            Experience luxury in our ocean-view suite with private balcony,
            offering breathtaking views and premium amenities for an
            unforgettable stay.
          </p>

          {/* Amenities */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Amenities
            </h4>
            <div className="flex gap-4">
              <div className="flex items-center text-gray-600">
                <WifiIcon size={14} className="mr-1" />
                <span className="text-xs">Free WiFi</span>
              </div>
              <div className="flex items-center text-gray-600">
                <TvIcon size={14} className="mr-1" />
                <span className="text-xs">Smart TV</span>
              </div>
              <div className="flex items-center text-gray-600">
                <UtensilsIcon size={14} className="mr-1" />
                <span className="text-xs">Breakfast</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-gray-600 font-medium text-sm mb-4 bg-gray-100 py-2 px-4 w-fit rounded-full">
              <TbHours24 size={20} className="mr-1" />
              <span>24*7 Check-in</span>
            </div>

            <div className="flex items-center text-gray-600 font-medium text-sm mb-4 bg-gray-100 py-2 px-4 w-fit rounded-full">
              <BedDouble size={20} className="mr-1" />
              <span>Rooms Available</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate.push(`/hotels/${id}`)}
          className="w-full border-2 border-[#D5C7A3] hover:bg-[#D5C7A3] text-[#D5C7A3] hover:text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
