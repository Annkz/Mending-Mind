import React from "react";
import care1 from "../assets/care1.png";
import CareImage from "../assets/threeImage.jpg"


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

      <img src={CareImage} alt="" />
    </div>
  );
};

export default Care;
