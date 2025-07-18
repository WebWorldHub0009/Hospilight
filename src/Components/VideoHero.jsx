import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/images/ABout/bgvid.mp4"; 

const VideoHeroSection = () => {
  return (
   <div className="relative w-full min-h-[85vh] flex justify-center items-center overflow-hidden ">

  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.4]"
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C]/40 via-[#3A8DFF]/20 to-[#b58a6b]/30 z-0" />

  {/* Animated Glow */}
  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#3A8DFF]/30 via-[#b58a6b]/30 to-[#3A8DFF]/30 blur-[200px] rounded-full z-0 opacity-40 animate-pulse" />

  {/* Centered Content */}
  <div className="relative z-10 px-6 sm:px-10 text-center max-w-4xl">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold  text-[#3A8DFF] t drop-shadow-xl">
      Vision in Motion
    </h1>
    <p className="mt-6 text-white text-lg sm:text-xl md:text-2xl font-medium italic leading-relaxed tracking-wide">
      Delivering <span className="font-bold text-[#3A8DFF]">precision lighting</span> solutions — 
      <span className="font-bold text-[#38C172]"> clarity-focused</span> and 
      <span className="font-bold text-[#3A8DFF]"> built for excellence</span>.
    </p>
    <div className="mt-8 w-28 h-1 rounded-full bg-gradient-to-r from-[#3A8DFF] to-[#b58a6b] animate-pulse mx-auto" />
  </div>
</div>

  );
};

export default VideoHeroSection;
