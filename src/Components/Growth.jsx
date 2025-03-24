import React from "react";
import growthImage from "../assets/growth.png"; // Ensure you have the correct image path
import { ChevronLeft, ChevronRight } from "lucide-react";

const GrowthSection = () => {
  return (
    <div className="w-full">
      {/* Upper Section - Image */}
      <div className="w-full">
        <img src={growthImage} alt="Growth" className="w-full object-cover" />
      </div>

      {/* Stats Section */}
      <div className="flex flex-col items-center text-center mt-10 px-4">
        {/* Stats */}
        <div className="w-full flex items-center justify-between py-6">
          <div className="flex-1 flex justify-center items-center gap-4 md:gap-12 overflow-x-auto scrollbar-hide">
            <ChevronLeft
              className="text-white cursor-pointer bg-black rounded-full p-2"
              size={40}
            />
            <div className="bg-[#B9E3E5] px-6 py-3 rounded-lg text-base md:text-2xl font-bold text-gray-900 min-w-[120px] text-center">
              6 YEARS
            </div>
            <div className="bg-[#B9E3E5] px-6 py-3 rounded-lg text-base md:text-2xl font-bold text-gray-900 min-w-[140px] text-center">
              4.9/5 STARS
            </div>
            <div className="bg-[#B9E3E5] px-6 py-3 rounded-lg text-base md:text-2xl font-bold text-gray-900 min-w-[150px] text-center">
              3000+ SESSIONS
            </div>
            <ChevronRight
              className="text-white cursor-pointer bg-black rounded-full p-2"
              size={40}
            />
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-6">
          <button className="bg-[#E6B93E] text-black font-bold text-sm px-6 py-2 rounded-md flex items-center gap-2 mb-10 md:mb-20">
            GET TO KNOW US BETTER{" "}
            <ChevronRight size={20} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
