"use client"

import React, {useState} from "react";
import { LuBadgeHelp } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const FAQ = ({ items }: {items: any}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index: any) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div className="w-full">

          <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(items.id)}
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-medium text-lg text-gray-800 flex gap-2 items-center">
               <LuBadgeHelp size={20} />
               {items.question}
               </span>
              <MdOutlineKeyboardArrowDown size={20} />
            </button>
            <div
              className={`transition-all duration-300 ${activeIndex === items.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
            >
              <div className="p-4 bg-white border-t border-gray-200">
                <p className="text-gray-600">{items.answer}</p>
              </div>
            </div>
          </div>
      </div>
    );
  };

  export default FAQ;