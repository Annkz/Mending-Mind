import React from "react";
import care1 from "../assets/care1.png";
import care2 from "../assets/care2.png";
import care3 from "../assets/care3.png";
import care4 from "../assets/care4.png";

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

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
        {/* Card Component */}
        {[
          {
            title: "Personal Therapy Sessions",
            desc: "For couples and individuals of all ages (children, teens, adults, seniors, couples)",
            img: care2,
          },
          {
            title: "Wellness Programs for All Sectors",
            desc: "For corporates, schools, hospitals, NGOs, community clubs, and more.",
            img: care3,
          },
          {
            title: "Internships & Courses",
            desc: "For curious learners and professionals aspiring to learn and upskill.",
            img: care4,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-amber-50 border border-amber-100 rounded-lg p-5 shadow-lg"
          >
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="text-lg mt-2">{item.desc}</p>
            <button className="border border-amber-400 bg-amber-400 text-white font-bold py-2 px-4 mt-3 rounded-lg">
              KNOW MORE
            </button>
            <img
              src={item.img}
              alt={item.title}
              className="h-40 rounded-2xl mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Care;
