import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import bgImg from "../assets/images/ABout/doc.avif";
import { Link } from "react-router-dom";

const features = [
  "Trusted Since 2010",
  "Advanced LED Technology",
  "ISO & CE Certified Products",
  "Pan India & Export Coverage",
  "Precise Shadowless Illumination",
  "Reliable After Sales Support",
  "Customised OT Solutions",
  "24/7 Customer Assistance",
];

const WhatMakesUsSuperior = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8f8f8] via-[#f0f0f0] to-[#eaeaea] py-16 px-4 sm:px-6 md:px-12 lg:px-16 font-poppins">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative hidden lg:flex justify-center items-center">
          <div
            className="absolute -top-12 -left-12 w-[460px] h-[460px] rounded-full bg-[#3A8DFF]/20 blur-2xl z-0"
            aria-hidden="true"
          ></div>
          <img
            src={bgImg}
            alt="Hospilight"
            className="relative w-[320px] lg:w-[400px] object-contain rounded-xl drop-shadow-2xl z-10"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-2">
            <MdOutlineVerifiedUser className="text-[#3A8DFF] text-3xl" />
            <p className="text-[#3A8DFF] uppercase tracking-wider font-semibold text-xs sm:text-sm">
              Why Hospilight Leads
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] mb-4 leading-snug">
            Setting <span className="text-[#3A8DFF]">New Standards</span> in Surgical Lighting
          </h2>

          <p className="text-gray-700 text-base max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed font-medium">
            At Hospilight, we don't just make surgical lights — we deliver precision, performance, and peace of mind. Trusted globally for delivering exceptional clarity and unmatched durability in every operation theatre.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-t border-gray-300 pt-6 mb-8 max-w-xl mx-auto lg:mx-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[#1C1C1C] font-medium text-sm"
              >
                <MdOutlineVerifiedUser className="text-[#38C172] text-lg flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link to="/contact">
              <button className="cursor-pointer bg-[#3A8DFF] hover:bg-[#38C172] transition-colors text-white font-bold py-3 px-8 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-[#3A8DFF]/30 text-sm sm:text-base">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsSuperior;
