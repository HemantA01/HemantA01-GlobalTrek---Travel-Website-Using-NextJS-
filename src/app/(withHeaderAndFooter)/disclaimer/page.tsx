"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { TiWarningOutline } from "react-icons/ti";
import {
  TbInfoHexagon,
  TbUser,
  TbArrowBadgeRight,
  TbLockOpen,
  TbArrowsExchange,
} from "react-icons/tb";

import { LiaLinkSolid } from "react-icons/lia";

const DisclaimerPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const primaryColor = "#3F4F44"; // Indigo color, matches your style

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "no-warranty", label: "No Warranty" },
    { id: "limitation-liability", label: "Limitation of Liability" },
    { id: "external-links", label: "External Links" },
    { id: "accuracy", label: "Content Accuracy" },
    { id: "user-responsibilities", label: "User Responsibilities" },
    { id: "changes", label: "Changes to Disclaimer" },
    { id: "contact", label: "Contact Information" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section.id;
          }
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div
        style={{ backgroundColor: primaryColor }}
        className="pb-16 pt-32 px-4 sm:px-6 lg:px-8 h-[40vh]"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-7xl font-bold text-white"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Disclaimer
          </h1>
          <p className="mt-4 text-lg text-white opacity-90 max-w-2xl mx-auto">
            Welcome to our Disclaimer page. Here, you'll find important
            information about the content, services, and policies of our
            website.
          </p>
          <p className="mt-2 text-white opacity-80">
            Last updated: March 16, 2025
          </p>
        </div>
      </div>
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <nav className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
                <h2
                  className="text-lg font-semibold mb-4"
                  style={{ color: primaryColor }}
                >
                  Contents
                </h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeSection === section.id
                            ? "bg-gray-100 font-semibold"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                        style={
                          activeSection === section.id
                            ? { color: primaryColor }
                            : {}
                        }
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Acceptance Banner */}
              <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row items-center justify-between">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <h2 className="text-lg font-medium text-gray-800">
                    Disclaimer Notice
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Last updated on March 16, 2025
                  </p>
                </div>
                <button
                  className="px-5 py-2 rounded-md text-white text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  I Understand
                </button>
              </div>

              {/* Disclaimer Sections */}
              <div className="p-6 sm:p-8">
                {/* Introduction Section */}
                <section id="introduction" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbInfoHexagon size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Introduction
                      </h2>
                      <p className="text-gray-700 mb-4">
                        The information provided by GlobalTrek ("we," "us," or
                        "our") on our website and related travel services (the
                        "Services") is intended for general informational
                        purposes only. While we strive to keep information
                        accurate and up-to-date, we make no guarantees about its
                        completeness, accuracy, reliability, or suitability for
                        any particular travel experience.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Any reliance you place on the information provided is
                        strictly at your own risk. We are not responsible for
                        errors, omissions, or changes in details, including
                        hotel bookings, flights, or tour availability.
                      </p>
                      <div
                        className="bg-gray-50 border-l-4 p-4 mt-6"
                        style={{ borderColor: primaryColor }}
                      >
                        <p className="text-sm text-gray-700">
                          <strong>Please Note:</strong> This disclaimer may
                          change without prior notice. By using our services,
                          you confirm that you have read and understood this
                          disclaimer.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* No Warranty Section */}
                <section id="no-warranty" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TiWarningOutline size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        No Warranty
                      </h2>
                      <p className="text-gray-700 mb-4">
                        All travel services provided are offered "AS IS" and "AS
                        AVAILABLE." While we work diligently with our partners
                        to ensure seamless travel experiences, we make no
                        guarantees that bookings, itineraries, or services will
                        be error-free, uninterrupted, or secure.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We are not responsible for last-minute cancellations,
                        schedule changes, or disruptions caused by airlines,
                        hotels, or tour operators. Travelers are encouraged to
                        verify details directly with service providers before
                        booking.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability Section */}
                <section id="limitation-liability" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbLockOpen size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Limitation of Liability
                      </h2>
                      <p className="text-gray-700 mb-4">
                        GlobalTrek shall not be held liable for any direct,
                        indirect, or incidental damages resulting from the use
                        of our services. This includes, but is not limited to,
                        delays, lost baggage, missed connections, or unexpected
                        costs incurred during travel.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We strongly recommend that travelers obtain
                        comprehensive travel insurance to cover unforeseen
                        circumstances.
                      </p>
                    </div>
                  </div>
                </section>

                {/* External Links Section */}
                <section id="external-links" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <LiaLinkSolid size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        External Links
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Our website may contain links to third-party websites
                        for additional travel resources. These links are
                        provided for your convenience, and GlobalTrek is not
                        responsible for the content or privacy practices of
                        these external websites.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3
                          className="text-lg font-medium mb-2"
                          style={{ color: primaryColor }}
                        >
                          Third-Party Content
                        </h3>
                        <p className="text-gray-600">
                          Links provided are for informational purposes only and
                          do not imply any endorsement by GlobalTrek. We advise
                          reviewing their privacy policies before providing any
                          personal data.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="accuracy" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbArrowBadgeRight size={20} color="white" />
                    </div>

                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Accuracy of Information
                      </h2>
                      <p className="text-gray-700 mb-4">
                        While we strive to provide accurate, up-to-date, and
                        reliable travel information, we cannot guarantee that
                        all details presented on our website are error-free or
                        complete. Information such as pricing, availability,
                        travel regulations, and destination details may change
                        without prior notice.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We encourage travelers to verify critical details
                        directly with airlines, hotels, tour operators, or other
                        relevant service providers before making travel
                        decisions. GlobalTrek is not responsible for
                        discrepancies, missed bookings, or additional costs
                        resulting from outdated or incorrect information.
                      </p>
                      <p className="text-gray-700">
                        For the most accurate and updated details, please
                        consult official sources or contact our support team for
                        further guidance.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="user-responsibilities" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbUser size={20} color="white" />
                    </div>

                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        User Responsibilities
                      </h2>
                      <p className="text-gray-700 mb-4">
                        When using our website, you are responsible for ensuring
                        that all information provided is accurate and
                        up-to-date. We do not guarantee the accuracy or
                        completeness of any travel information provided on our
                        website.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We recommend that users verify travel information
                        directly with airlines, hotels, tour operators, or other
                        relevant service providers before making travel
                        decisions. GlobalTrek is not responsible for
                        discrepancies, missed bookings, or additional costs
                        resulting from outdated or incorrect information.
                      </p>
                      <p className="text-gray-700">
                        For the most accurate and updated details, please
                        consult official sources or contact our support team for
                        further guidance.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="changes" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbArrowsExchange size={20} color="white" />
                    </div>

                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Changes and Updates
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Our website may be updated from time to time to reflect
                        changes in travel information, destinations, or other
                        relevant aspects. We encourage travelers to check our
                        website frequently for the most up-to-date information.
                      </p>
                      <p className="text-gray-700">
                        GlobalTrek is committed to providing accurate and
                        up-to-date information, but we cannot guarantee
                        uninterrupted access to our website. We reserve the
                        right to make changes without prior notice.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="mb-12">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Contact Us
                      </h2>
                      <p className="text-gray-700 mb-4">
                        If you have any questions or concerns, please reach out
                        to us at <strong>support@globaltrek.com</strong> or
                        visit our{" "}
                        <Link href="/contact">
                          <strong>Contact Page</strong>
                        </Link>{" "}
                        for further assistance.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
