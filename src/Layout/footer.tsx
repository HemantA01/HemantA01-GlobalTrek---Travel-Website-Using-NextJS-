import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/gt-logo.webp";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black py-4 w-full shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
            <div className="container mx-auto text-center flex justify-between items-center gap-4 w-full">
                <div className="w-[40%]">
                    {/* <img src={Logo.src} alt="Logo" className="w-16 h-16" /> */}
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <p className="text-start text-sm mt-2">A travel website that helps you plan and book your next trip.
                        with GlobalTrek, you can explore a wide range of destinations, accommodations, and activities.
                    </p>
                </div>
                <div className="w-[20%]">
                    <div className="mx-10 text-start">
                        <h3 className="text-lg font-semibold uppercase">
                            Our Company
                        </h3>
                        <ul className="list-none my-2 text-start text-sm">
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#">Careers</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="mx-10 text-start">
                        <h3 className="text-lg font-semibold uppercase">
                            Follow Us
                        </h3>
                        <ul className="list-none my-2 text-start text-sm">
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#" className="flex items-center gap-2">
                                    <FaFacebook size={20} color="#3b5998"/> Facebook</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#" className="flex items-center gap-2">
                                <FaInstagram size={20} color="#E1306C"/> Instagram</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#" className="flex items-center gap-2">
                                <RiTwitterXFill size={20} color="#1d1f20"/> Twitter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[20%]">
                <div className="mx-10 text-start">
                        <h3 className="text-lg font-semibold uppercase">
                            Our Policies
                        </h3>
                        <ul className="list-none my-2 text-start text-sm">
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#">Cookies Policy</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#">Terms & Conditions</Link>
                            </li>
                            <li className="my-2 hover:bg-white hover:text-blue-800 hover:font-semibold rounded-md px-2 py-1 w-fit">
                                <Link href="#">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-2 border-gray-300 mx-10" />
            <p className="text-center text-sm mt-4 font-medium">
                &copy; {new Date().getFullYear()} GlobalTrek. All rights reserved.
            </p>
        </footer>
    );
}