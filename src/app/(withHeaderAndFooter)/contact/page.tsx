"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import FAQ from "@/app/_components/faq";
import { faqItems } from "@/assets/data";

import ContactBanner from "@/assets/gt-contactbanner.webp";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full">
        <Image
          src={ContactBanner}
          alt="Contact Banner"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1
            className="text-4xl md:text-[6rem] font-bold mb-4"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-blue-100 text-center">
            Have questions or need assistance? We're here to help you with
            anything you need.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="bg-[#3F4F44]/80 text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-[#3F4F44] p-3 rounded-full">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-[#3F4F44] p-3 rounded-full">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm">Email</p>
                    <p className="font-medium">contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-[#3F4F44] p-3 rounded-full">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm">Address</p>
                    <p className="font-medium">
                      123 Business Avenue, Suite 100
                    </p>
                    <p className="font-medium">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-gray-100 mb-4">Connect with us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#3F4F44] p-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#3F4F44] p-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#3F4F44] p-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#3F4F44] p-3 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#3F4F44] text-white py-2 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200/50">
        <div className="container mx-auto px-4 py-16 flex items-start gap-6">
          <div className="text-start mb-12">
            <div className="border-l-4 border-red-700 rounded-l-sm">
              <h2
                className="text-[3.5rem] font-bold text-gray-800 mb-4 ml-4"
                style={{ fontFamily: "var(--font-dancing-script)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you have any questions or need help with your trip, please
              don't hesitate to contact us. We'll do our best to respond to your
              inquiry within 24 hours. Thanks for choosing us!
            </p>

            <div className="mt-10">
              <div className="relative inline-flex items-center justify-center gap-4 group">
                <Link
                  role="button"
                  className="group relative inline-flex items-center justify-center text-[0.85rem] rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  title="payment"
                  href="/faq"
                >
                  View All FAQs
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
          </div>

          <div className="max-w-3xl mx-auto">
            {
                faqItems.map((item, index) =>(
                    <FAQ items={item} key={index} />
                ) ).slice(0,5)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
