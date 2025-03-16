import "react-international-phone/style.css";
import React, { useState } from "react";
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

interface PhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  otpSent?: boolean;
  handleSendOtp?: () => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  otpSent,
  handleSendOtp,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "in",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

  return (
    <div className="relative w-full max-w-xl">
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm px-3 py-2">
        {/* Country Code + Flag (Clickable Area) */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FlagImage iso2={country.iso2} className="w-5 h-5" />
        </div>

        {isDropdownOpen && (
          <div
            className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10 
                    max-h-[200px] overflow-y-auto custom-scrollbar"
            onClick={() => setIsDropdownOpen(false)}
          >
            {defaultCountries.map((c) => {
              const countryData = parseCountry(c);
              return (
                <div
                  key={countryData.iso2}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setCountry(countryData.iso2 as CountryIso2)}
                >
                  <FlagImage iso2={countryData.iso2} className="w-5 h-5" />
                  <span className="text-sm">
                    {countryData.name} (+{countryData.dialCode})
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Phone Input */}
        <input
          type="tel"
          value={inputValue}
          onChange={handlePhoneValueChange}
          ref={inputRef}
          placeholder="Enter phone number"
          className="flex-1 px-2 py-1 text-sm focus:outline-none"
        />

        {/* Send OTP Button */}
        {otpSent === false && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={otpSent}
              className={`inline-flex items-center px-3 py-1 mr-2 border border-transparent text-xs font-medium rounded-md ${
                otpSent
                  ? "bg-green-100 text-green-800"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
              }`}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
