"use client";

import React, { useState } from "react";

const page = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const primaryColor = "#3F4F44";

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const lastUpdated = "March 16, 2025";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center h-[40vh] "
        style={{ backgroundColor: primaryColor }}
      >
        <h1
          className="text-7xl font-bold text-white"
          style={{ fontFamily: "var(--font-dancing-script)" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
          We value your privacy and are committed to protecting your personal
          data.
        </p>
        <p className="mt-2 text-white opacity-80">
          Last updated: March 16, 2025
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3" style={{fontFamily: "var(--font-montserrat)"}}>
            <nav className="sticky top-24">
              <div className="p-5 bg-white rounded-lg shadow-sm mb-6">
                <h2
                  className="text-lg font-semibold mb-4"
                  style={{ color: primaryColor }}
                >
                  Contents
                </h2>
                <ul className="space-y-3">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "information", label: "Information We Collect" },
                    { id: "use", label: "How We Use Your Data" },
                    { id: "sharing", label: "Information Sharing" },
                    { id: "rights", label: "Your Rights" },
                    { id: "security", label: "Security Measures" },
                    { id: "changes", label: "Policy Changes" },
                    { id: "contact", label: "Contact Us" },
                  ].map((section) => (
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

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3
                  className="font-medium mb-3"
                  style={{ color: primaryColor }}
                >
                  Need Help?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  If you have any questions about our Privacy Policy, please
                  contact our Data Protection Officer.
                </p>
                <button
                  className="w-full py-2 px-4 rounded-md text-white text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  Contact Support
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 mt-8 lg:mt-0" style={{fontFamily: "var(--font-montserrat)"}}>
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              {/* Overview Section */}
              <section id="overview" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Overview
                </h2>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy explains how we collect, use, and protect
                  your personal information when you visit our website or use
                  our services. We respect your privacy and are committed to
                  protecting your personal data.
                </p>
                <p className="text-gray-700 mb-4">
                  By using our website and services, you consent to the
                  practices described in this Privacy Policy. We encourage you
                  to read this document carefully to understand our policies and
                  practices regarding your information.
                </p>
                <div
                  className="bg-gray-50 border-l-4 p-4 mt-6"
                  style={{ borderColor: primaryColor }}
                >
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> This policy applies to all
                    information collected through our website, related services,
                    and business tools. It does not apply to information
                    collected offline or through any other means.
                  </p>
                </div>
              </section>

              {/* Information We Collect Section */}
              <section id="information" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">
                        Personal Information
                      </h3>
                      <p className="mt-1 text-gray-600">
                        We may collect personal identification information, such
                        as your name, email address, phone number, and postal
                        address when you register on our site, place an order,
                        or fill out a form.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">
                        Transaction Information
                      </h3>
                      <p className="mt-1 text-gray-600">
                        If you make a purchase, we collect payment information,
                        purchase history, and other details related to your
                        transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div
                      className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">
                        Technical Information
                      </h3>
                      <p className="mt-1 text-gray-600">
                        We collect device information, browser type, operating
                        system, IP address, and other technical details when you
                        interact with our website.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Your Data Section */}
              <section id="use" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  How We Use Your Data
                </h2>
                <p className="text-gray-700 mb-6">
                  We use the information we collect for various purposes,
                  including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Provide Services",
                      description:
                        "To provide and maintain our services, process transactions, and send related information.",
                    },
                    {
                      title: "Improve Experience",
                      description:
                        "To improve our website, products, and customer experience through analysis of usage patterns.",
                    },
                    {
                      title: "Communication",
                      description:
                        "To communicate with you about updates, support, and marketing information if you've opted in.",
                    },
                    {
                      title: "Security",
                      description:
                        "To protect our website, services, and users from unauthorized access or fraudulent activities.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-lg">
                      <h3
                        className="text-lg font-medium mb-2"
                        style={{ color: primaryColor }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Remaining sections would be implemented in the same structured way */}
              <section id="sharing" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Information Sharing
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal identification
                  information to others. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information regarding visitors and users with
                  our business partners and advertisers.
                </p>
                <div className="mt-6 space-y-4">
                  <div
                    className="bg-gray-50 p-4 rounded-lg border-l-4"
                    style={{ borderColor: primaryColor }}
                  >
                    <h3 className="font-medium text-gray-800">
                      Third-Party Service Providers
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      We may employ third-party companies to perform services on
                      our behalf, such as sending emails, processing payments,
                      and analyzing website data. These companies have access to
                      your information only to perform these tasks.
                    </p>
                  </div>
                  <div
                    className="bg-gray-50 p-4 rounded-lg border-l-4"
                    style={{ borderColor: primaryColor }}
                  >
                    <h3 className="font-medium text-gray-800">
                      Legal Requirements
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      We may disclose your information if required by law, court
                      order, or other legal processes to protect our rights,
                      property, or safety, or the rights, property, or safety of
                      others.
                    </p>
                  </div>
                </div>
              </section>

              <section id="rights" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, correct, or delete your personal
                  information. You can also opt-out of receiving marketing
                  communications from us.
                </p>
                <p className="text-gray-700 mb-4">
                  If you wish to exercise any of these rights, please contact us
                  using the contact information provided below.
                </p>
                <p className="text-gray-700">
                  We will respond to your request within a reasonable timeframe.
                </p>

                <div className="mt-6 space-y-4">
                  <div
                    className="bg-gray-50 p-4 rounded-lg border-l-4"
                    style={{ borderColor: primaryColor }}
                  >
                    <h3 className="font-medium text-gray-800">
                      Contact Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      If you have any questions or concerns about this Privacy
                      Policy, please contact us at:
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-bold">Email:</span>{" "}
                      a4oUz@example.com
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-bold">Phone:</span> +1 (123)
                      456-7890
                    </p>
                  </div>
                </div>
              </section>

              <section id="security" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Security
                </h2>
                <p className="text-gray-700 mb-4">
                  Your security is our top priority. We adopt industry-standard
                  protocols and advanced encryption methods to ensure your data
                  remains secure. Our security framework includes:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>
                    <strong>Encryption:</strong> All data transfers are
                    encrypted using SSL/TLS protocols.
                  </li>
                  <li>
                    <strong>Data Access Controls:</strong> Access to sensitive
                    data is restricted to authorized personnel only.
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> We conduct periodic
                    security assessments to identify and address
                    vulnerabilities.
                  </li>
                  <li>
                    <strong>Firewall Protection:</strong> We utilize robust
                    firewalls to block unauthorized access attempts.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We are committed to continuously improving our security
                  measures to safeguard your information effectively.
                </p>
              </section>

              <section id="changes" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Changes to this Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to update or modify this Privacy Policy
                  at any time. Any changes will be effective immediately upon
                  posting the updated policy on our website.
                </p>
                <p className="text-gray-700">
                  We encourage you to periodically review this Privacy Policy
                  for any updates or changes.
                </p>
              </section>

              <section id="contact" className="mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: primaryColor }}
                >
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Email:</span> a4oUz@example.com
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Phone:</span> +1 (123) 456-7890
                </p>

                <p className="text-gray-700 mt-4">
                  We look forward to hearing from you!
                </p>

                <p className="text-gray-700 mt-4">
                  <span className="font-bold">Last Updated:</span> {lastUpdated}
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
