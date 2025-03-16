"use client";

import React, { useState } from "react";
import {
  FaCookieBite,
  FaShieldAlt,
  FaUserShield,
  FaExclamationCircle,
  FaClipboardList,
  FaToggleOn,
  FaToggleOff,
  FaExternalLinkAlt,
} from "react-icons/fa";

const page = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    advertising: false,
  });

  const handleToggle = (
    cookieType: "essential" | "functional" | "analytics" | "advertising"
  ) => {
    if (cookieType === "essential") return; // Essential cookies can't be toggled
    setPreferences({
      ...preferences,
      [cookieType]: !preferences[cookieType],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with new gradient */}
      <div className="bg-[#3F4F44] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center h-[25vh] mt-20">
            <FaCookieBite className="inline-block text-4xl mb-4 opacity-90" />
            <h1
              className="text-7xl font-bold mb-4"
              style={{ fontFamily: "var(--font-dancing-script)" }}
            >
              Cookie Policy
            </h1>
            <p className="text-lg opacity-90">
              We respect your privacy. Learn how we use cookies to enhance your
              experience.
            </p>
          </div>
        </div>

        {/* Curved separator */}
        <div className="h-16 bg-gray-50 rounded-t-[50%] transform translate-y-1"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 mt-2 pb-16">
        <div className="max-w-4xl mx-auto bg-transparent rounded-xl shadow-slate-400 shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {[
              {
                id: "overview",
                label: "Overview",
                icon: <FaShieldAlt color="#3F4F44" />,
              },
              {
                id: "settings",
                label: "Cookie Settings",
                icon: <FaToggleOn color="#3F4F44" />,
              },
              {
                id: "details",
                label: "Cookie Details",
                icon: <FaClipboardList color="#3F4F44" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 transition-colors cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "text-[#C599B6] border-b-2 border-[#3F4F44] font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                <span className="text-sm">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* What are cookies? */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3F4F44]/20 flex items-center justify-center text-[#C599B6]">
                      <FaUserShield color="#3F4F44" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      What are cookies?
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Cookies are small text files that are placed on your
                      device when you visit websites. They allow the website to
                      remember your actions and preferences over time.
                    </p>
                  </div>
                </div>

                {/* How we use cookies */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3F4F44]/20 flex items-center justify-center text-[#C599B6]">
                      <FaClipboardList color="#3F4F44" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      How we use cookies
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We use cookies to understand how you use our website,
                      improve your experience, and personalize content. Some
                      cookies are essential for the website to function
                      properly.
                    </p>
                  </div>
                </div>

                {/* Types of Cookies */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3F4F44]/20 flex items-center justify-center text-[#C599B6]">
                      <FaCookieBite color="#3F4F44" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      Types of Cookies We Use
                    </h3>
                    <ul className="mt-2 text-gray-600 list-disc pl-5">
                      <li>
                        <strong>Essential Cookies:</strong> Necessary for core
                        website functions.
                      </li>
                      <li>
                        <strong>Performance Cookies:</strong> Help improve the
                        site's performance.
                      </li>
                      <li>
                        <strong>Functional Cookies:</strong> Enable enhanced
                        features and personalization.
                      </li>
                      <li>
                        <strong>Targeting Cookies:</strong> Deliver ads relevant
                        to your interests.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#3F4F44]/20 flex items-center justify-center text-[#C599B6]">
                      <FaExternalLinkAlt color="#3F4F44" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      Third-Party Cookies
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Some pages may display content from external providers.
                      These third-party services may set their own cookies.
                      Please refer to their privacy policies.
                    </p>
                  </div>
                </div>

                {/* Manage Cookie Preferences Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setActiveTab("settings")}
                    className="px-6 py-2 bg-[#3F4F44] text-white rounded-md hover:opacity-90 transition-opacity"
                  >
                    Manage Cookie Preferences
                  </button>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <p className="text-gray-600 mb-6">
                  Use the toggles below to customize your cookie preferences.
                  Essential cookies cannot be disabled as they are necessary for
                  the website to function properly.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      id: "essential" as "essential",
                      name: "Essential Cookies",
                      description:
                        "These cookies are necessary for the website to function and cannot be switched off.",
                    },
                    {
                      id: "functional" as "functional",
                      name: "Functional Cookies",
                      description:
                        "These cookies enable the website to provide enhanced functionality and personalization.",
                    },
                    {
                      id: "analytics" as "analytics",
                      name: "Analytics Cookies",
                      description:
                        "These cookies help us understand how visitors interact with the website.",
                    },
                    {
                      id: "advertising" as "advertising",
                      name: "Advertising Cookies",
                      description:
                        "These cookies are used to show relevant advertising.",
                    },
                  ].map((cookie) => (
                    <div
                      key={cookie.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="pr-8">
                        <h4 className="font-medium text-gray-900">
                          {cookie.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {cookie.description}
                        </p>
                      </div>
                      <div
                        onClick={() => handleToggle(cookie.id)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                          preferences[cookie.id]
                            ? "bg-[#3F4F44] justify-end"
                            : "bg-gray-300 justify-start"
                        } ${
                          cookie.id === "essential"
                            ? "opacity-80 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end gap-4">
                  <button
                    onClick={() => {
                      setPreferences({
                        essential: true,
                        functional: false,
                        analytics: false,
                        advertising: false,
                      });
                    }}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => {
                      setPreferences({
                        essential: true,
                        functional: true,
                        analytics: true,
                        advertising: true,
                      });
                    }}
                    className="px-6 py-2 bg-[#3F4F44] text-white rounded-md hover:opacity-90 transition-opacity"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}

            {/* Details Tab */}
            {activeTab === "details" && (
              <div>
                <p className="text-gray-600 mb-6">
                  We use different types of cookies to enhance your browsing
                  experience, improve our services, and ensure secure
                  interactions. Here's a detailed breakdown of the cookies we
                  use and their purpose.
                </p>

                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Essential Cookies
                    </h3>
                    <div className="bg-[#C599B6]/5 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="font-medium text-gray-700">Name</div>
                        <div className="font-medium text-gray-700">Purpose</div>
                        <div className="font-medium text-gray-700">
                          Duration
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b">
                        <div className="text-gray-800">session_id</div>
                        <div className="text-gray-600">
                          Maintains your login session securely during your
                          visit
                        </div>
                        <div className="text-gray-600">Session</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b">
                        <div className="text-gray-800">csrf_token</div>
                        <div className="text-gray-600">
                          Prevents unauthorized access to your account
                        </div>
                        <div className="text-gray-600">Session</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Functional Cookies
                    </h3>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b">
                        <div className="text-gray-800">language</div>
                        <div className="text-gray-600">
                          Stores your language preferences for seamless browsing
                        </div>
                        <div className="text-gray-600">1 year</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b">
                        <div className="text-gray-800">theme</div>
                        <div className="text-gray-600">
                          Preserves your selected theme for a consistent
                          experience
                        </div>
                        <div className="text-gray-600">1 year</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Analytics Cookies
                    </h3>
                    <div className="mt-2 space-y-2">
                      <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b">
                        <div className="text-gray-800">_ga</div>
                        <div className="text-gray-600">
                          Helps us understand website traffic patterns and user
                          behavior
                        </div>
                        <div className="text-gray-600">2 years</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm py-2 border-b">
                        <div className="text-gray-800">_gid</div>
                        <div className="text-gray-600">
                          Analyzes how visitors interact with different pages
                        </div>
                        <div className="text-gray-600">24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-8 text-center text-sm text-gray-500">
          <p>Last updated: March 15, 2025</p>
          <p className="mt-2">
            If you have any questions about our Cookie Policy, please{" "}
            <a href="#" className="text-[#C599B6] hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
