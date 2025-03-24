import React from 'react';
import TaskInternship from '../assets/Task internship.jpg';


const Goal = () => {
  return (
    <div className="bg-white p-12 max-w-5xl mx-auto text-center font-sans relative">
      {/* Header Section */}
      <h2 className="text-3xl font-extrabold text-gray-900">
        OUR <span className="bg-blue-200 px-2 rounded">GOAL</span> IS SIMPLE
      </h2>
      <p className="italic text-gray-600 mt-2 text-lg">
        prioritising <span className="font-bold">Your</span> Mental Health
      </p>

      <div className='mt-14'>
        <img src={TaskInternship} alt="All Inclusive" className="h-[]" />
      </div>

      {/* Emoji Reactions */}
      <div className="absolute top-4 right-10 text-3xl animate-bounce">😆</div>
    </div>
  );
}

export default Goal;
