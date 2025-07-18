import React from "react";
import bgImage from "../assets/images/About/aboutbg.avif";
import obj from "../assets/images/ABout/ct.png";
import { motion } from "framer-motion";

const MainAbout = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[90vh] font-poppins">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#3A8DFF] rounded-full blur-3xl opacity-30 z-20"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#b58a6b] rounded-full blur-2xl opacity-30 z-20"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-white text-center md:text-left"
        >
          {/* Hero Badge */}
          <span className="inline-block bg-[#3A8DFF]/20 text-[#3A8DFF] text-xs font-semibold px-4 py-1 rounded-full mb-4">
            India’s Trusted Surgical Light Manufacturer
          </span>

          <p className="text-[#38C172] text-sm font-semibold tracking-wide uppercase mb-3">
            Innovation Meets Precision
          </p>

          <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight mb-6">
            Revolutionizing <span className="text-[#3A8DFF]">Operating Room Lighting</span>
          </h1>

          <p className="text-gray-800 text-lg max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            At Hospilight, we pioneer next-generation LED OT Lights, blending world-class technology with uncompromised quality. Designed to deliver crystal-clear illumination and unmatched reliability for every surgical procedure.
          </p>

          <button className="bg-[#3A8DFF] hover:bg-[#38C172] text-black px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
            Discover Our Solutions
          </button>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-[#38C172]">
            <span>10+ Years Manufacturing Excellence</span>
            <span>1000+ Hospitals Trust Us</span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={obj}
            alt="Hospilight Surgical Equipment"
            className="w-full max-w-md drop-shadow-2xl rounded-lg"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#3A8DFF] animate-bounce text-2xl z-30">
        ↓
      </div>
    </div>
  );
};

export default MainAbout;
