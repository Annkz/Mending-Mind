import React, { useState, useEffect } from "react";
import holdinghand from "../assets/holdinghand.png";

const Healing = () => {
  const messages = [
    { text: "Mending Mind gave me hope.", position: "absolute -top-6 left-0" },
    { text: "Truly a game-changer!", position: "absolute top-0 right-0" },
    {
      text: "A deeply enriching experience.",
      position: "absolute bottom-6 left-0",
    },
    {
      text: "Safe, warm, and supportive.",
      position: "absolute bottom-4 right-0",
    },
    {
      text: "The best decision ever!",
      position: "absolute top-1/2 -translate-y-1/2 right-0", // Push further to the right
    },
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [messages.length]);

  // Filter messages for small devices (show only 2 messages)
  const visibleMessages =
    window.innerWidth < 640 ? messages.slice(0, 2) : messages;

  return (
    <div className="bg-white p-6 sm:p-12 max-w-5xl mx-auto text-center font-sans relative">
      {/* Header Section */}
      <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
        HEALING HAPPENS HERE!
      </h2>
      <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
        When we say, 'We get you,' we truly mean it. Mending Mind isn’t just a
        project—it’s a vision that’s personal, real, and rooted in the belief
        that no one should ever feel alone in their journey. Because everybody
        deserves the right kind of support, in the way that works best for them.
      </p>

      {/* Illustration */}
      <div className="absolute top-0 right-4 sm:right-10">
        <img
          src={holdinghand}
          alt="People holding hands"
          className="w-20 sm:w-35"
        />
      </div>

      {/* Feedback Box */}
      <div className="relative mt-8 sm:mt-12 flex justify-center items-center flex-wrap max-w-3xl mx-auto">
        {visibleMessages.map((message, index) => (
          <div
            key={index}
            className={`bg-yellow-100 mt-5 px-3 sm:px-4 py-2 rounded-md shadow-md text-sm sm:text-base transition-all duration-1000 ease-in-out transform ${
              index === currentMessageIndex
                ? "opacity-100 scale-125"
                : "opacity-0 scale-75"
            } ${message.position}`}
          >
            {message.text}
          </div>
        ))}

        {/* Emoji Blocks Grid */}
        <div className="grid grid-cols-3 gap-4 place-items-center relative mt-8">
          {/* Row 1 */}
          <div className="col-start-2 bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center w-16 h-16 text-2xl">
            😊
          </div>

          {/* Row 2 */}
          <div className="col-start-1 bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center w-16 h-16 text-2xl">
            🤩
          </div>
          <div className="col-start-2 bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center w-16 h-16 text-2xl">
            😆
          </div>
          <div className="col-start-3 bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center w-16 h-16 text-2xl">
            😍
          </div>

          {/* Row 3 */}
          <div className="col-start-2 bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center w-16 h-16 text-2xl">
            😎
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healing;
