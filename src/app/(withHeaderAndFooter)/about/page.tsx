"use client";

import React from "react";
import Image from "next/image";
import Testimonials from "@/components/testimonial";
import Team from "@/components/team";
import Gallery from "@/components/gallery";

import ContactBanner from "@/assets/gt-contactbanner.webp";
import About from "@/assets/About/about.webp";
import About2 from "@/assets/About/about2.webp";

import { MdFlight, MdDirectionsBoat } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { FaCar, FaBusAlt } from "react-icons/fa";
import { GrTrain } from "react-icons/gr";
import { FaParachuteBox } from "react-icons/fa6";

export default function Page() {
  const services = [
    {
      id: 1,
      name: "Flight",
      icon: <MdFlight size={24} color="#fca5a5" />,
    },
    {
      id: 2,
      name: "Cruise",
      icon: <MdDirectionsBoat size={24} color="#fca5a5" />,
    },
    {
      id: 3,
      name: "Cab",
      icon: <FaCar size={24} color="#fca5a5" />,
    },
    {
      id: 4,
      name: "Train",
      icon: <GrTrain size={24} color="#fca5a5" />,
    },
    {
      id: 5,
      name: "Bus",
      icon: <FaBusAlt size={24} color="#fca5a5" />,
    },
    {
      id: 6,
      name: "Activities",
      icon: <FaParachuteBox size={24} color="#fca5a5" />,
    },
    {
      id: 7,
      name: "Hotel",
      icon: <BsBuildingsFill size={24} color="#fca5a5" />,
    },
  ];

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
            About GlobalTrek
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-blue-100 text-center">
            At GlobalTrek, we strive to provide the best travel experiences with
            sustainability and customer satisfaction at our core.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center gap-6">
          <div className="w-[30rem] rounded-2xl">
            <Image src={About} alt={""} className="w-full h-full rounded-2xl" />
          </div>

          <div className="w-[70%]">
            <div className="flex items-center justify-start mb-2">
              <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
              <h3
                className="text-4xl md:text-5xl font-bold text-gray-800"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                About Us
              </h3>
              <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
            </div>

            <p className="text-jutify">
              <strong>Established in 2025: Your Partner in Exploration</strong>
              <br />
              GlobalTrek is a premier travel company committed to creating
              unforgettable journeys for adventurers across the globe. With a
              strong emphasis on sustainability, we ensure that our expeditions
              not only enrich the lives of our travelers but also leave a
              positive impact on the destinations we explore.
            </p>
            <p className="mt-2 text-jutify">
              <strong>Turning Challenges into Opportunities</strong>
              <br />
              At GlobalTrek, we embrace challenges as opportunities to innovate
              and grow. By collaborating closely with our partners, suppliers,
              and local communities, we strive to minimize any adverse effects
              of our operations. Our dedication to sustainable practices drives
              us to continually improve efficiency and lower our environmental
              footprint.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-16">
        <div className="flex items-center gap-6">
          <div className="w-[60%]">
            <div className="flex items-center">
              <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
              <h3
                className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                Curated for You:{" "}
                <span className="text-[#fca5a5]">Our Finest Offerings</span>
              </h3>
              <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="mb-4 text-blue-600">{service.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800 text-center">
                    {service.name}
                  </h3>
                  <div className="mt-2 w-12 h-1 bg-[#fca5a5] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[30rem] rounded-2xl">
            <Image
              src={About2}
              alt={""}
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl shadow-xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.svg')] bg-repeat"></div>
          </div>

          {/* Content container */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Header with decorative elements */}
            <div className="flex items-center">
              <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
              <h3
                className="text-4xl md:text-5xl font-bold text-gray-800"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                Why Choose GlobalTrek?
              </h3>
              <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
            </div>

            {/* Subtitle */}
            <p className="mt-4 text-gray-600 italic max-w-2xl">
              Experience the difference with a travel partner who truly
              understands your wanderlust
            </p>

            {/* Features grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-amber-400">
                <div className="text-3xl mb-4 text-amber-500">🌍</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Expertly Curated Adventures
                </h3>
                <p className="text-gray-600">
                  Our travel experts design personalized itineraries that
                  showcase hidden gems, iconic landmarks, and authentic cultural
                  experiences.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-rose-400">
                <div className="text-3xl mb-4 text-rose-500">🧳</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Hassle-Free Planning
                </h3>
                <p className="text-gray-600">
                  From accommodations to activities, we manage every detail for
                  a stress-free travel experience.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-400">
                <div className="text-3xl mb-4 text-blue-500">💬</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Our dedicated customer support team is always available to
                  assist you before, during, and after your journey.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-400">
                <div className="text-3xl mb-4 text-green-500">🌿</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Sustainable Travel
                </h3>
                <p className="text-gray-600">
                  We promote eco-friendly tourism by collaborating with local
                  communities and adopting sustainable practices.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-400">
                <div className="text-3xl mb-4 text-purple-500">💰</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Value for Money
                </h3>
                <p className="text-gray-600">
                  We offer competitive pricing without compromising on quality,
                  ensuring you get the best experience for your budget.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-400">
                <div className="text-3xl mb-4 text-indigo-500">🛡️</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Safety First
                </h3>
                <p className="text-gray-600">
                  Your safety is our priority. We partner with trusted vendors
                  and follow strict safety protocols.
                </p>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200 rounded-tl-full opacity-30"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 border border-gray-100 rounded-2xl shadow-lg px-8 my-16">
        <div className="flex items-center justify-start mb-16 border-b border-gray-200 ">
          <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
          <h3
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Our Impact in Figures
          </h3>
          <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100 rounded-full mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-rose-200">
              <span className="text-5xl">🌟</span>
            </div>
            <h4 className="font-bold text-2xl text-gray-800 mb-2 group-hover:text-rose-500 transition-colors duration-300">
              10,000+
            </h4>
            <p className="text-gray-600 font-medium">Happy Travellers</p>
            <div className="h-1 w-16 bg-rose-400 rounded-full mt-3"></div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100 rounded-full mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-pink-200">
              <span className="text-5xl">🌎</span>
            </div>
            <h4 className="font-bold text-2xl text-gray-800 mb-2 group-hover:text-pink-500 transition-colors duration-300">
              5,000+
            </h4>
            <p className="text-gray-600 font-medium">Customer Reviews</p>
            <div className="h-1 w-16 bg-pink-400 rounded-full mt-3"></div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-full mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-fuchsia-200">
              <span className="text-5xl">✈️</span>
            </div>
            <h4 className="font-bold text-2xl text-gray-800 mb-2 group-hover:text-fuchsia-500 transition-colors duration-300">
              120+
            </h4>
            <p className="text-gray-600 font-medium">Destinations</p>
            <div className="h-1 w-16 bg-fuchsia-400 rounded-full mt-3"></div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-violet-50 to-violet-100 rounded-full mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-violet-200">
              <span className="text-5xl">🏆</span>
            </div>
            <h4 className="font-bold text-2xl text-gray-800 mb-2 group-hover:text-violet-500 transition-colors duration-300">
              25+
            </h4>
            <p className="text-gray-600 font-medium">Travel Awards</p>
            <div className="h-1 w-16 bg-violet-400 rounded-full mt-3"></div>
          </div>

          {/* Stat 5 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-indigo-200">
              <span className="text-5xl">🤝</span>
            </div>
            <h4 className="font-bold text-2xl text-gray-800 mb-2 group-hover:text-indigo-500 transition-colors duration-300">
              500+
            </h4>
            <p className="text-gray-600 font-medium">Local Partners</p>
            <div className="h-1 w-16 bg-indigo-400 rounded-full mt-3"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-10 border border-gray-100 rounded-2xl shadow-lg p-8 my-16">
        <div className="flex items-center justify-start mb-16 border-b border-gray-200">
          <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
          <h3
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Words from Our Adventurers
          </h3>
          <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
        </div>

        <Testimonials />
      </div>

      <div className="max-w-7xl mx-auto my-16">
        <div className="flex items-center justify-start mb-16 border-b border-gray-200">
          <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
          <h3
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Our Team
          </h3>
          <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
        </div>

        <Team />
      </div>

      <div className="max-w-7xl mx-auto my-10 border border-gray-100 rounded-2xl shadow-lg p-8 my-16">
        <div className="flex items-center justify-start mb-10 border-b border-gray-200">
          <div className="h-1 w-16 bg-amber-400 rounded-full mr-6"></div>
          <h3
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Life at GlobalTrek
          </h3>
          <div className="h-1 w-16 bg-amber-400 rounded-full ml-6"></div>
        </div>

        <Gallery />
      </div>
    </>
  );
}
