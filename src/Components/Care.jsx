import React from "react";
import care1 from "../assets/care1.png";
import CareImage1 from "../assets/Untitled-1.png";
import CareImage2 from "../assets/Untitled-2.png";
import CareImage3 from "../assets/Untitled-3.png";

const Care = () => {
  return (
    <div className="bg-amber-300 flex flex-col m-10 p-5">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-x-10 p-10 text-center">
        <img src={care1} alt="Providing Care" className="h-32" />
        <div>
          <p className="text-3xl font-bold">PROVIDING CARE</p>
          <p className="text-2xl ml-3">Tailored to Your Needs</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex w-full gap-4 justify-center items-center px-6 pb-6">
        <img
          src={CareImage1}
          alt=""
          className="w-1/4 h-auto object-cover rounded-md shadow-md p-2"
        />
        <img
          src={CareImage2}
          alt=""
          className="w-1/4 h-auto object-cover rounded-md shadow-md p-2"
        />
        <img
          src={CareImage3}
          alt=""
          className="w-1/4 h-auto object-cover rounded-md shadow-md p-2"
        />
      </div>
    </div>
  );
};

export default Care;
