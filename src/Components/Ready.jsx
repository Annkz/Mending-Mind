import React, { useRef } from "react";
import WebPageCard from "../assets/Web Page Card.jpg";
import { motion, useInView } from "framer-motion";

const StepsSection = () => {
  return (
    <div className="bg-[#FEF7E9] p-6 md:p-12 rounded-lg flex flex-col items-center m-10">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          READY TO BEGIN?
        </h2>
        <p className="italic text-xl text-gray-600 mt-2 mb-5">
          just follow these easy steps:
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={WebPageCard}
            alt="Mending Mind"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side - Steps */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:items-start">
          <div className="relative flex flex-col space-y-8">
            {[
              "CHOOSE YOUR SERVICE",
              "FILL OUT THE DETAILS",
              "PAY AND CONFIRM YOUR SESSION",
              "RECEIVE A CUSTOMISED WELLNESS BOX",
            ].map((text, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, {
                once: false,
                margin: "0px 0px -30% 0px", // Adjusted margin for better mobile detection
                threshold: 0.1, // Ensures even a small part triggers animation
              });

              return (
                <div key={index} className="flex items-center gap-4 relative">
                  {/* Vertical Line */}
                  {index < 3 && (
                    <div className="absolute left-5 top-10 w-0.5 h-8 bg-black"></div>
                  )}
                  {/* Number with Scroll Animation */}
                  <motion.div
                    ref={ref}
                    className="w-10 h-10 flex items-center justify-center bg-black text-white italic rounded-full text-lg font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    0 {index + 1}
                  </motion.div>
                  {/* Text */}
                  <p className="text-gray-900 text-sm font-bold flex items-center gap-2">
                    {text.includes("WELLNESS BOX") ? (
                      <>
                        RECEIVE A CUSTOMISED
                        <span className="bg-teal-600 px-2 py-1 rounded-md">
                          WELLNESS BOX
                        </span>
                      </>
                    ) : (
                      text
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-12 mb-[-25px] bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition cursor-pointer">
        GET STARTED &gt;
      </button>
    </div>
  );
};

export default StepsSection;
