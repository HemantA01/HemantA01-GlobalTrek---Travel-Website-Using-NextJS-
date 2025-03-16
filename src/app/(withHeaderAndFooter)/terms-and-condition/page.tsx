"use client";

import React, { useState, useEffect } from "react";

import {
  TbInfoHexagon,
  TbUser,
  TbArrowBadgeRight,
  TbArrowDownFromArc,
  TbLockOpen,
} from "react-icons/tb";
import { MdOutlineSecurity, MdOutlineMailOutline } from "react-icons/md";
import { RiProhibitedLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TiWarningOutline } from "react-icons/ti";
import { FaScaleBalanced } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";

const page = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Primary color from the requirements
  const primaryColor = "#3F4F44";

  // Handle scroll to detect when to show back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to section function
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  // Toggle FAQ expansion
  const toggleFaq = (id: any) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Sections for navigation
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "eligibility", label: "Eligibility" },
    { id: "user-accounts", label: "User Accounts" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "user-content", label: "User Content" },
    { id: "prohibited-conduct", label: "Prohibited Conduct" },
    { id: "termination", label: "Termination" },
    { id: "warranties", label: "Warranties & Disclaimers" },
    { id: "limitation", label: "Limitation of Liability" },
    { id: "governing-law", label: "Governing Law" },
    { id: "changes", label: "Changes to Terms" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div
        style={{ backgroundColor: primaryColor }}
        className="pb-16 pt-32 px-4 sm:px-6 lg:px-8 h-[40vh]"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-7xl font-bold text-white"
            style={{ fontFamily: "var(--font-dancing-script)" }}
          >
            Terms & Conditions
          </h1>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="mt-2 text-white opacity-80">
            Last updated: March 16, 2025
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection("introduction")}
              className="bg-white text-gray-800 py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Read Terms
            </button>
            <button className="bg-transparent text-white border border-white py-2 px-6 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
              Contact Support
            </button>
          </div>
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
                    By using our services, you agree to these terms
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    This agreement was last modified on March 16, 2025
                  </p>
                </div>
                <button
                  className="px-5 py-2 rounded-md text-white text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  Accept Terms
                </button>
              </div>

              {/* Terms Sections */}
              <div className="p-6 sm:p-8">
                {/* Introduction Section */}
                <section id="introduction" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbInfoHexagon size={16} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Introduction
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Welcome to Company Name. These Terms of Service
                        ("Terms") govern your access to and use of the Company
                        Name website, services, and applications (collectively,
                        the "Services").
                      </p>
                      <p className="text-gray-700 mb-4">
                        By accessing or using our Services, you agree to be
                        bound by these Terms. If you disagree with any part of
                        the Terms, then you may not access the Services.
                      </p>
                      <div
                        className="bg-gray-50 border-l-4 p-4 mt-6"
                        style={{ borderColor: primaryColor }}
                      >
                        <p className="text-sm text-gray-700">
                          <strong>Please read carefully:</strong> These Terms
                          constitute a legally binding agreement between you and
                          Company Name regarding your use of the Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Eligibility Section */}
                <section id="eligibility" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <MdOutlineSecurity size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Eligibility
                      </h2>
                      <p className="text-gray-700 mb-4">
                        You must be at least 16 years old to use our Services.
                        By using our Services, you represent and warrant that
                        you meet all eligibility requirements that we outline in
                        these Terms.
                      </p>
                      <p className="text-gray-700">
                        If you are using the Services on behalf of a company,
                        organization, or other entity, you represent and warrant
                        that you are authorized to do so and have the authority
                        to bind such entity to these Terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* User Accounts Section */}
                <section id="user-accounts" className="mb-12">
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
                        User Accounts
                      </h2>
                      <p className="text-gray-700 mb-4">
                        When you create an account with us, you must provide
                        accurate, complete, and up-to-date information. You are
                        responsible for safeguarding the password that you use
                        to access the Services and for any activities or actions
                        under your account.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You agree not to disclose your password to any third
                        party. You must notify us immediately upon becoming
                        aware of any breach of security or unauthorized use of
                        your account.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3
                          className="text-lg font-medium mb-2"
                          style={{ color: primaryColor }}
                        >
                          Account Security
                        </h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                          <li>Use a strong, unique password</li>
                          <li>Enable two-factor authentication</li>
                          <li>Never share your credentials</li>
                          <li>Log out from shared devices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property Section */}
                <section id="intellectual-property" className="mb-12">
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
                        Intellectual Property
                      </h2>
                      <p className="text-gray-700 mb-4">
                        The Website and its content are the property of the
                        Company and are protected by copyright, trademark, and
                        other intellectual property laws. All content on the
                        Website, including but not limited to designs, text,
                        graphics, pictures, video, information, applications,
                        software, music, sound and other files, and their
                        selection and arrangement (the "Content"), are the
                        proprietary property of the Company, its users or its
                        licensors with all rights reserved. You may not modify,
                        copy, distribute, frame, republish, display, or sell in
                        any form or by any means, in whole or in part, the
                        Content without the Company's prior written consent. No
                        right, title or interest in any of the Content is
                        transferred to you as a result of your use of the
                        Services. Any use of the Content, except as specifically
                        permitted in these Terms, is strictly prohibited.
                      </p>

                      <p className="text-gray-700 mb-4">
                        You may not reproduce, distribute, or display any part
                        of the Content without the Company's prior written
                        consent.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You may not use the Content for commercial purposes
                        without the Company's prior written consent.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You may not use the Content for any unlawful or
                        unauthorized purpose.
                      </p>
                    </div>
                  </div>
                </section>

                {/* User Content Section */}
                <section id="user-content" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <TbArrowDownFromArc size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        User Content
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Our Services allow you to post, link, store, share and
                        otherwise make available certain information, text,
                        graphics, videos, or other material ("User Content").
                        You are responsible for the User Content that you post
                        to the Services, including its legality, reliability,
                        and appropriateness.
                      </p>
                      <p className="text-gray-700 mb-4">
                        By posting User Content to the Services, you grant us
                        the right and license to use, modify, perform, display,
                        reproduce, and distribute such content on and through
                        the Services. You retain any and all of your rights to
                        any User Content you submit, post or display on or
                        through the Services and you are responsible for
                        protecting those rights.
                      </p>
                      <div
                        className="bg-gray-50 border-l-4 p-4 mt-6"
                        style={{ borderColor: primaryColor }}
                      >
                        <p className="text-sm text-gray-700">
                          <strong>Important:</strong> You represent and warrant
                          that you own or have the necessary rights to post the
                          User Content you submit through the Services, and that
                          your User Content does not violate the privacy rights,
                          publicity rights, copyright rights, or other rights of
                          any person.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Prohibited Conduct Section */}
                <section id="prohibited-conduct" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <RiProhibitedLine size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Prohibited Conduct
                      </h2>
                      <p className="text-gray-700 mb-4">
                        You may not use the Services in any way that violates
                        any applicable federal, state, local, or international
                        law or regulation. Additionally, you agree not to:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                          <li>
                            Use the Services in any manner that could disable,
                            overburden, damage, or impair the site
                          </li>
                          <li>
                            Use any robot, spider, or other automated device to
                            access the Services
                          </li>
                          <li>
                            Introduce any viruses, trojan horses, worms, or
                            other malicious code
                          </li>
                          <li>
                            Attempt to gain unauthorized access to any portion
                            of the Services
                          </li>
                          <li>
                            Interfere with any other user's use and enjoyment of
                            the Services
                          </li>
                          <li>
                            Use the Services for any fraudulent or unlawful
                            purpose
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Termination Section */}
                <section id="termination" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <RxCross2 size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Termination
                      </h2>
                      <p className="text-gray-700 mb-4">
                        We may terminate or suspend your account and bar access
                        to the Services immediately, without prior notice or
                        liability, under our sole discretion, for any reason
                        whatsoever and without limitation, including but not
                        limited to a breach of the Terms.
                      </p>
                      <p className="text-gray-700 mb-4">
                        If you wish to terminate your account, you may simply
                        discontinue using the Services or contact us to request
                        account deletion.
                      </p>
                      <p className="text-gray-700">
                        All provisions of the Terms which by their nature should
                        survive termination shall survive termination,
                        including, without limitation, ownership provisions,
                        warranty disclaimers, indemnity, and limitations of
                        liability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Warranties & Disclaimers Section */}
                <section id="warranties" className="mb-12">
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
                        Warranties & Disclaimers
                      </h2>
                      <p className="text-gray-700 mb-4">
                        The Services are provided on an "AS IS" and "AS
                        AVAILABLE" basis. The Company hereby disclaims all
                        warranties of any kind, whether express or implied,
                        statutory or otherwise, including but not limited to any
                        warranties of merchantability, non-infringement, and
                        fitness for particular purpose.
                      </p>
                      <p className="text-gray-700 mb-4">
                        The Company does not warrant that the Services will be
                        uninterrupted, timely, secure, or error-free, or that
                        any defects will be corrected. You expressly agree that
                        your use of the Services is at your sole risk.
                      </p>
                      <div
                        className="bg-gray-50 border-l-4 p-4 mt-6"
                        style={{ borderColor: primaryColor }}
                      >
                        <p className="text-sm text-gray-700">
                          <strong>Notice:</strong> Some jurisdictions do not
                          allow the exclusion of certain warranties or the
                          limitation or exclusion of liability for certain types
                          of damages. Accordingly, some of the above limitations
                          may not apply to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability Section */}
                <section id="limitation" className="mb-12">
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
                        In no event shall the Company, its directors, employees,
                        partners, agents, suppliers, or affiliates, be liable
                        for any indirect, incidental, special, consequential or
                        punitive damages, including without limitation, loss of
                        profits, data, use, goodwill, or other intangible
                        losses, resulting from:
                      </p>
                      <ol className="list-decimal pl-5 text-gray-700 space-y-1 mb-4">
                        <li>
                          Your access to or use of or inability to access or use
                          the Services;
                        </li>
                        <li>
                          Any conduct or content of any third party on the
                          Services;
                        </li>
                        <li>Any content obtained from the Services; and</li>
                        <li>
                          Unauthorized access, use or alteration of your
                          transmissions or content.
                        </li>
                      </ol>
                      <p className="text-gray-700">
                        The Company's total liability to you for all claims
                        arising under or related to these Terms will not exceed
                        the amount paid by you, if any, for accessing the
                        Services during the twelve (12) months preceding the
                        claim.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Governing Law Section */}
                <section id="governing-law" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <FaScaleBalanced size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Governing Law
                      </h2>
                      <p className="text-gray-700 mb-4">
                        These Terms and your use of the Services shall be
                        governed by and construed in accordance with the laws of
                        the State of [State], without regard to its conflict of
                        law provisions.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Any legal suit, action, or proceeding arising out of, or
                        related to, these Terms or the Services shall be
                        instituted exclusively in the federal courts of the
                        United States or the courts of the State of [State],
                        although we retain the right to bring any suit, action,
                        or proceeding against you for breach of these Terms in
                        your country of residence or any other relevant country.
                      </p>
                      <p className="text-gray-700">
                        You waive any and all objections to the exercise of
                        jurisdiction over you by such courts and to venue in
                        such courts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Changes to Terms Section */}
                <section id="changes" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <LuRotate3D size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Changes to Terms
                      </h2>
                      <p className="text-gray-700 mb-4">
                        We reserve the right, at our sole discretion, to modify
                        or replace these Terms at any time. If a revision is
                        material, we will try to provide at least 30 days'
                        notice prior to any new terms taking effect.
                      </p>
                      <p className="text-gray-700 mb-4">
                        What constitutes a material change will be determined at
                        our sole discretion. By continuing to access or use our
                        Services after those revisions become effective, you
                        agree to be bound by the revised terms.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3
                          className="text-lg font-medium mb-2"
                          style={{ color: primaryColor }}
                        >
                          Stay Updated
                        </h3>
                        <p className="text-gray-600">
                          We recommend periodically reviewing these Terms to
                          stay informed of any updates. Major changes will be
                          announced through our official communication channels.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="mb-12">
                  <div className="flex items-start">
                    <div
                      className="p-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <MdOutlineMailOutline size={20} color="white" />
                    </div>
                    <div className="ml-4">
                      <h2
                        className="text-2xl font-bold mb-4"
                        style={{ color: primaryColor }}
                      >
                        Contact Us
                      </h2>
                      <p className="text-gray-700 mb-4">
                        If you have any questions or concerns about these Terms,
                        please contact us at [Contact Information]. We strive to
                        provide prompt and helpful responses to your inquiries.
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

export default page;
