"use client";   //Declare client side paging, not server. Use at the pages where we use React hooks (like 'useState','useEffect' etc.)
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/gt-logo.webp";
import { FaHome } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import { TbLogs } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-100 text-black py-1">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
                    <ul className="md:flex  md:space-x-10">
                        <li>
                            <Link href="/" className="flex items-center gap-2">
                                <FaHome size={20} color="#3F4F44" />Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="flex items-center gap-2">
                                <LuBoxes size={20} color="#3F4F44" />About</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center gap-2">
                                <TbLogs size={20} color="#3F4F44" />Blogs</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="flex items-center gap-2">
                                <FiPhoneCall size={20} color="#3F4F44" />Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="relative inline-flex items-center justify-center gap-4 group">
                    <div
                        className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                    ></div>
                    <Link
                        role="button"
                        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                        title="payment"
                        href="#"
                    >Login
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 10 10"
                        height="10"
                        width="10"
                        fill="none"
                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                            <path
                                d="M0 5h7"
                                className="transition opacity-0 group-hover:opacity-100"
                            ></path>
                            <path
                                d="M1 1l4 4-4 4"
                                className="transition group-hover:translate-x-[3px]"
                            ></path>
                        </svg>
                    </Link>
                </div>



            </div>
        </header>

    );
}