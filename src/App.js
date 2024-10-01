import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [isVideoVisible, setVideoVisible] = useState(false); // State to control video visibility

  const handlePlayVideo = () => {
    setVideoVisible(true); // Show the video on button click
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-white relative">

      <div className='absolute top-5 text-xs text-center font-semibold text-slate-400'>CA: BqPfA7kV7j8hF6M42uK4t8rNksP7q48r1PC4Nmyxpump</div>

      {/* Button to play the video */}
      <div className="relative">
        <motion.button 
          className="w-64 h-64 bg-red-600 rounded-full border-8 border-gray-300 transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          onClick={handlePlayVideo}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img 
            src="/s.png" 
            alt="S logo" 
            className="w-full h-full object-contain"
          />
        </motion.button>
      </div>

      {/* Conditional rendering of the video background */}
      {isVideoVisible && (
        <div className="absolute top-0 left-0 w-full h-full">
          <video 
            src="/nuke.mp4" 
            className="w-full h-full object-cover" 
            autoPlay 
            loop
          />
        </div>
      )}
    </div>
  );
};

export default App;