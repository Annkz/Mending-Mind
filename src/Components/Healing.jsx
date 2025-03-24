import React from "react";

import holdinghand from '../assets/holdinghand.png'

const Healing = () => {
  return (<div className="bg-white p-12 max-w-5xl mx-auto text-center font-sans relative">
    {/* Header Section */}
    <h2 className="text-4xl font-extrabold text-gray-900">HEALING HAPPENS HERE!</h2>
    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
      When we say, 'We get you,' we truly mean it. Mending Mind isn’t just a project—it’s a vision
      that’s personal, real, and rooted in the belief that no one should ever feel alone in their journey.
      Because everybody deserves the right kind of support, in the way that works best for them.
    </p>
    
    {/* Illustration */}
    <div className="absolute top-0 right-10">
      <img src={holdinghand} alt="People holding hands" className="w-35" />
    </div>
    
    {/* Feedback Boxes and Emojis */}
    <div className="relative mt-12 flex justify-center items-center flex-wrap max-w-3xl mx-auto">
      {/* Feedback Boxes */}
      <div className="absolute -top-6 left-0 bg-yellow-100 px-4 py-2 rounded-md shadow-md text-sm animate-fade-in">
        Mending Mind gave me hope.
      </div>
      <div className="absolute top-0 right-0 bg-yellow-100 px-4 py-2 rounded-md shadow-md text-sm animate-fade-in">
        Truly a game-changer!
      </div>
      <div className="absolute bottom-16 left-0 bg-yellow-100 px-4 py-2 rounded-md shadow-md text-sm animate-fade-in">
        A deeply enriching experience.
      </div>
      <div className="absolute bottom-4 right-0 bg-yellow-100 px-4 py-2 rounded-md shadow-md text-sm animate-fade-in">
        Safe, warm, and supportive.
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-10 bg-yellow-100 px-4 py-2 rounded-md shadow-md text-sm animate-fade-in">
        The best decision ever!
      </div>

      {/* Emoji Blocks Grid */}
      <div className="grid grid-cols-3 gap-6 place-items-center relative">
  {/* Row 1 */}
  <div className="col-start-2 bg-yellow-400 p-6 rounded-lg shadow-md flex items-center justify-center w-20 h-20 text-3xl">
    😊
  </div>

  {/* Row 2 */}
  <div className="col-start-1 bg-yellow-400 p-6 rounded-lg shadow-md flex items-center justify-center w-20 h-20 text-3xl">
    🤩
  </div>
  <div className="col-start-2 bg-yellow-400 p-6 rounded-lg shadow-md flex items-center justify-center w-20 h-20 text-3xl">
    😆
  </div>
  <div className="col-start-3 bg-yellow-400 p-6 rounded-lg shadow-md flex items-center justify-center w-20 h-20 text-3xl">
    😍
  </div>

  {/* Row 3 */}
  <div className="col-start-2 bg-yellow-400 p-6 rounded-lg shadow-md flex items-center justify-center w-20 h-20 text-3xl">
    😎
  </div>
</div>

    </div>
  </div>
);
};

export default Healing;
