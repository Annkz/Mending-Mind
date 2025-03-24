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
      <div className=" flex flex-col items-center text-center mt-10">
        {/* Stats */}
        <div className="w-full flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex-1 flex justify-center gap-6 md:gap-12">
            <ChevronLeft
              className="text-white  cursor-pointer bg-black rounded-full"
              size={52}
            />
            <div className="bg-[#B9E3E5] px-8 py-4 rounded-lg text-lg md:text-2xl font-bold text-gray-900">
              6 YEARS
            </div>
            <div className="bg-[#B9E3E5]  px-8 py-4 rounded-lg text-lg md:text-2xl font-bold text-gray-900">
              4.9/5 STARS
            </div>
            <div className="bg-[#B9E3E5]  px-8 py-4 rounded-lg text-lg md:text-2xl font-bold text-gray-900">
              3000+ SESSIONS
            </div>
            <ChevronRight
              className="text-white  cursor-pointer bg-black rounded-full"
              size={52}
            />
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-6">
          <button className="bg-[#E6B93E] text-black font-bold text-sm px-6 py-2 rounded-md flex items-center gap-2 mb-20">
            GET TO KNOW US BETTER{" "}
            <ChevronRight size={20} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
