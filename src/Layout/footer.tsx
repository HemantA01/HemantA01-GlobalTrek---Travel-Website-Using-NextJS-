import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/gt-logo-light.webp";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#F5F5F5] to-[#FBFBFB] text-gray-700 py-12 w-full shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.1),0px_-2px_4px_-2px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-6">
                {/* Top section with logo and description */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="inline-block">
                            <Image
                                src={Logo}
                                alt="GlobalTrek Logo"
                                width={150}
                                height={150}
                                className="drop-shadow-sm"
                            />
                        </Link>
                    </div>
                    
                    <div className="max-w-md text-center md:text-right">
                        <h2 className="text-4xl font-bold mb-2 text-[#3F4F44]" style={{ fontFamily: "var(--font-dancing-script)" }}>Explore The World With Us</h2>
                        <p className="text-gray-600">
                            Your journey begins with GlobalTrek - discover breathtaking destinations,
                            find perfect accommodations, and create memories that last a lifetime.
                        </p>
                    </div>
                </div>

                {/* Middle section with contact info and links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-b border-gray-200">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#3F4F44] flex items-center">
                            <span className="inline-block w-8 h-1 bg-[#3F4F44] mr-2"></span>
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-[#3F4F44]" />
                                <span>123 Traveler's Way, Adventure City</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#3F4F44]" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-[#3F4F44]" />
                                <span>hello@globaltrek.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Company */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#3F4F44] flex items-center">
                            <span className="inline-block w-8 h-1 bg-[#3F4F44] mr-2"></span>
                            Our Company
                        </h3>
                        <ul className="space-y-2">
                            <li className="transition-all duration-300">
                                <Link href="/about" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> About Us
                                </Link>
                            </li>
                            <li className="transition-all duration-300">
                                <Link href="/contact" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> Contact Us
                                </Link>
                            </li>
                            <li className="transition-all duration-300">
                                <Link href="/blog" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> Blog
                                </Link>
                            </li>
                            <li className="transition-all duration-300">
                                <Link href="/faq" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Our Policies */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#3F4F44] flex items-center">
                            <span className="inline-block w-8 h-1 bg-[#3F4F44] mr-2"></span>
                            Our Policies
                        </h3>
                        <ul className="space-y-2">
                            <li className="transition-all duration-300">
                                <Link href="/cookie-policy" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> Cookies Policy
                                </Link>
                            </li>
                            <li className="transition-all duration-300">
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> Privacy Policy
                                </Link>
                            </li>
                            <li className="transition-all duration-300">
                                <Link href="/terms-and-condition" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> Terms & Conditions
                                </Link>
                            </li>
                            <li className="transition-all duration-300">
                                <Link href="/disclaimer" className="text-gray-600 hover:text-[#3F4F44] flex items-center">
                                    <span className="text-[#3F4F44] mr-2">›</span> Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#3F4F44] flex items-center">
                            <span className="inline-block w-8 h-1 bg-[#3F4F44] mr-2"></span>
                            Newsletter
                        </h3>
                        <p className="text-gray-600 mb-4">Subscribe to receive travel inspiration and exclusive offers.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-white text-gray-700 px-4 py-2 rounded-l-md outline-none border border-gray-200 focus:border-[#3F4F44] w-full"
                            />
                            <button className="bg-[#3F4F44] hover:bg-amber-600 transition-colors px-4 py-2 rounded-r-md text-white font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom section with social media and copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <Link href="#" className="bg-amber-100 hover:bg-amber-200 text-[#3F4F44] p-3 rounded-full transition-all duration-300">
                            <FaFacebook size={18} />
                        </Link>
                        <Link href="#" className="bg-amber-100 hover:bg-amber-200 text-[#3F4F44] p-3 rounded-full transition-all duration-300">
                            <FaInstagram size={18} />
                        </Link>
                        <Link href="#" className="bg-amber-100 hover:bg-amber-200 text-[#3F4F44] p-3 rounded-full transition-all duration-300">
                            <RiTwitterXFill size={18} />
                        </Link>
                    </div>
                    
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} GlobalTrek. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}