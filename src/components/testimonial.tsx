import React, { useState } from "react";
import Image from "next/image";

const testimonial = ({
  testimonial,
  review,
}: {
  review?: any;
  testimonial?: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Ensure at least one list is available
  const items = testimonial && testimonial.length > 0 ? testimonial : review;
  const totalItems = items?.length || 0;

  const nextTestimonial = () => {
    if (totalItems > 0) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }
  };

  const prevTestimonial = () => {
    if (totalItems > 0) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }
  };

  return (
    <>
      {testimonial && (
        <>
          {/* Main testimonial display */}
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-50"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400 rounded-tr-full opacity-20"></div>

            <div className="relative p-8 md:p-12 z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-12">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={testimonial[activeIndex].avatar}
                      alt={testimonial[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-amber-500 text-6xl font-serif absolute opacity-30">
                    "
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 italic pl-8 relative">
                    {testimonial[activeIndex].quote}
                  </p>
                  <div className="mt-6 pl-8">
                    <p className="font-bold text-xl text-gray-800">
                      {testimonial[activeIndex].name}
                    </p>
                    <p className="text-amber-600">
                      {testimonial[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-amber-50 flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-600"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Indicator dots */}
            <div className="flex gap-3 px-4">
              {testimonial.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-amber-500 w-6" : "bg-amber-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-amber-50 flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-600"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </>
      )}

      {review && (
        <>
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-50"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400 rounded-tr-full opacity-20"></div>

            <div className="relative p-8 md:p-12 z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-12">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg bg-amber-100 flex items-center justify-center">
                    {/* Using initials as avatar placeholder since we don't have an image */}
                    <span className="text-3xl font-bold text-amber-600">
                      {review[activeIndex].name
                        .split(" ")
                        .map((n: any[]) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-amber-500 text-6xl font-serif absolute opacity-30">
                    "
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 italic pl-8 relative">
                    {review[activeIndex].review}
                  </p>
                  <div className="mt-6 pl-8">
                    <p className="font-bold text-xl text-gray-800">
                      {review[activeIndex].name}
                    </p>
                    <div className="flex text-amber-600 mt-1">
                      {/* Display star rating based on the rating value */}
                      {Array(5).fill(0)?.map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={
                              i < review[activeIndex].rating
                                ? "currentColor"
                                : "none"
                            }
                            stroke="currentColor"
                            strokeWidth="2"
                            className="mr-1"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      <span className="ml-2 text-sm">
                        {new Date(review[activeIndex].date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-amber-50 flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-600"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Indicator dots */}
            <div className="flex gap-3 px-4">
              {review?.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-amber-500 w-6" : "bg-amber-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-amber-50 flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-600"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default testimonial;
