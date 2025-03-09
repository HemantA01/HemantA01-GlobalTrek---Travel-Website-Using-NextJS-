"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { toast } from "react-hot-toast";
import HomeBanner from "@/assets/gt-homeBanner.webp";
import { MdArrowRightAlt, MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsBuildingsFill } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { PiAirplaneInFlight, PiTrain, PiBuildingsLight } from "react-icons/pi";
import { GiCruiser } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa6";


export default function Page() {
    const [activeTab, setActiveTab] = useState(0);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const [room, setRoom] = useState(1);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);

    const [travelMenuTab, setTravelMenuTab] = useState('Hotels');

    const tab = [
        {
            id: 1,
            name: "Overnight Stay(s)",
        },
        {
            id: 2,
            name: "Day Trips",
        }
    ]

    const TravellMenu = [
        {
            id: 1,
            name: "Hotels",
            icon: <PiBuildingsLight size={20} color="#4F959D" />,
        },
        {
            id: 2,
            name: "Homestays",
            icon: <HiOutlineHome size={20} color="#4F959D" />,
        },
        {
            id: 3,
            name: "Flights",
            icon: <PiAirplaneInFlight size={24} color="#4F959D" />,
        },
        {
            id: 4,
            name: "Cruises",
            icon: <GiCruiser size={20} color="#4F959D" />,
        },
        {
            id: 5,
            name: "Trains",
            icon: <PiTrain size={20} color="#4F959D" />,
        },
        {
            id: 6,
            name: "Holidays",
            icon: <FaUmbrellaBeach size={20} color="#4F959D" />,
        }
    ]

    useEffect(() => {
        handleDate();
    }, [])
    const handleDate = () => {
        const today = new Date().toISOString().split('T')[0];
        const dateInputs = document.querySelectorAll('input[type="date"]');
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }

    const handleChildren = (props: string) => {
        if (props === "decrement") {
            setChildren(children - 1);
        } else {
            children < 10 ?
                setChildren(children + 1) : toast.error("You can't add more than 10 children")
        }
    }
    return (
        <>
            <div className="relative">
                <Image
                    src={HomeBanner}
                    alt="Home Banner"
                    className="relative object-cover w-full h-full"
                />

                <div className="absolute bg-black opacity-30 top-0 left-0 w-full h-full"></div>

                <div className="absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-3/4">
                    <div className="bg-gray-100 bg-opacity-50 p-8 rounded-lg shadow-md">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-xl shadow-md flex items-center justify-center gap-6 bg-white py-1 px-4">
                            {
                                TravellMenu.map((item, index) => (
                                    <>
                                        <div className={`flex items-center gap-2 text-gray-700 px-4 py-2 cursor-pointer hover:text-[#4F959D] hover:font-semibold ${travelMenuTab === item.name ? "border-b-2 border-[#4F959D] text-[#4F959D] font-semibold" : ""}`} key={index} onClick={() => setTravelMenuTab(item.name)}>
                                            {item.icon} {item.name}
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className="flex items-center justify-start gap-6 relative">
                            {
                                tab.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`px-4 py-2 rounded-full px-4 py-2 font-normal ${activeTab === index ? "bg-blue-200/50 border-2 border-blue-600 text-blue-600 " : "bg-gray-50 border-2 border-gray-600 text-gray-600 "
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                ))
                            }
                        </div>


                        <div className="text-black grid grid-cols-2 gap-4 mt-6">
                            {
                                (travelMenuTab === "Flights" || travelMenuTab === "Cruises" || travelMenuTab === "Trains") ? (
                                    <div className="flex items-center justify-between gap-4 w-full col-span-2">
                                        <div className="bg-white text-black flex items-center justify-start gap-3 p-4 rounded-lg shadow-md  w-full">
                                            <CiSearch size={24} />
                                            <input type="text" placeholder="Search for your destination" className="ml-2 w-full border-none focus:outline-none" />
                                        </div>
                                        <div className="bg-white text-black flex items-center justify-start gap-3 p-4 rounded-lg shadow-md w-full">
                                            <CiSearch size={24} />
                                            <input type="text" placeholder="Search for your destination" className="ml-2 w-full border-none focus:outline-none" />
                                        </div>

                                    </div>) : (
                                    <div className="bg-white text-black flex items-center justify-start gap-3 p-4 rounded-lg shadow-md col-span-2">
                                        <CiSearch size={24} />
                                        <input type="text" placeholder="Search for your destination" className="ml-2 w-full border-none focus:outline-none" />
                                    </div>
                                )
                            }


                            <div className="bg-white flex items-center justify-between gap-4 text-black p-4 rounded-lg shadow-md">
                                <div className="text-start w-full">
                                    <h3 className="text-sm font-semibold">Start Date</h3>
                                    <input
                                        onInput={handleDate}
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full border-none focus:outline-none"
                                    />
                                </div>
                                <div className="border-r h-full border-gray-300"></div>
                                <div className="text-start w-full">
                                    <h3 className="text-sm font-semibold">End Date</h3>
                                    <input
                                        onInput={handleDate}
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => {
                                            e.target.value > startDate ? setEndDate(e.target.value) : toast.error("End date must be greater than start date");
                                        }}
                                        className="w-full border-none focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="bg-white  text-black flex items-center justify-between p-4 rounded-lg shadow-md">
                                <div className="flex items-center justify-between w-full pl-4" onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                                    <h3 className="text-[1rem] font-normal flex items-start flex-col">
                                        <p className="text-[1rem] font-semibold">
                                            {adult} Adult {children > 0 && `, ${children} Children`}
                                        </p>
                                        <p className="text-sm font-normal">
                                            {room} Room
                                        </p>
                                    </h3>
                                    <MdKeyboardArrowDown size={24} />
                                </div>
                                {
                                    isDropDownOpen && (
                                        <div className="absolute top-full right-0 w-[50%] mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                                            <ul className="py-2 text-start">
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                                    <strong>Room</strong>

                                                    <div className="flex items-center justify-between gap-4">
                                                        <button disabled={room === 1}
                                                            onClick={() => setRoom(room - 1)}
                                                            className={`${room === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                                                            <CiCircleMinus size={20} color="blue" strokeWidth={2} />
                                                        </button>
                                                        <span className="text-lg font-semibold">{room}</span>
                                                        <button onClick={() => {
                                                            room < 10 ?
                                                                setRoom(room + 1) :
                                                                toast.error("Room can't be more than 10")
                                                        }}>
                                                            <CiCirclePlus size={20} color="blue" strokeWidth={2} />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                                    <div className="flex flex-col items-start justify-between">
                                                        <strong>Adult</strong>
                                                        <span className="text-xs font-normal">Age 18 years or Above.</span>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <button disabled={adult === 1}
                                                            onClick={() => setAdult(adult - 1)}
                                                            className={`${adult === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                                                            <CiCircleMinus size={20} color="blue" strokeWidth={2} />
                                                        </button>
                                                        <span className="text-lg font-semibold">{adult}</span>
                                                        <button onClick={() => {
                                                            adult < 20 ?
                                                                setAdult(adult + 1) :
                                                                toast.error("Adult can't be more than 20")
                                                        }}>
                                                            <CiCirclePlus size={20} color="blue" strokeWidth={2} />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                                    <div className="flex flex-col items-start justify-between">
                                                        <strong>Children</strong>
                                                        <span className="text-xs font-normal">Below 18 years.</span>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <button disabled={children === 0}
                                                            onClick={() => handleChildren("decrement")}
                                                            className={`${children === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
                                                            <CiCircleMinus size={20} color="blue" strokeWidth={2} />
                                                        </button>
                                                        <span className="text-lg font-semibold">{children}</span>
                                                        <button onClick={() => handleChildren("increment")}>
                                                            <CiCirclePlus size={20} color="blue" strokeWidth={2} />
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <button className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer mt-10 w-[40%]" onClick={() => toast.success("Search successful")}>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
}