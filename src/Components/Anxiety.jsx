import React from 'react';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';

const Anxiety = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={gif1} alt="Anxiety GIF 1" className="w-full mb-20 h-[80vh] object-cover" />
      <img src={gif2} alt="Anxiety GIF 2" className="w-full mb-20 h-[20vh] object-cover" />
    </div>
  );
}

export default Anxiety;