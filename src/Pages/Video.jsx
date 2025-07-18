import React from "react";
import { motion } from "framer-motion";
import VideoHeroSection from "../Components/VideoHero";

// Correct YouTube embed links
const videoList = [
  "https://www.youtube.com/embed/GIk6DuYR-kc",
  "https://www.youtube.com/embed/jn-PrYE-CHk",
  "https://www.youtube.com/embed/bwznrABTK6c",
  "https://www.youtube.com/embed/AY4VNQgtAP4",
  "https://www.youtube.com/embed/ewpCq4sbzhE",
  "https://www.youtube.com/embed/HsG25WfLV_8",
  "https://www.youtube.com/embed/6VTlAE7JTK4",
];

const VideoPage = () => {
  return (
    <section className="w-full font-poppins bg-gradient-to-b from-[#3A8DFF]/10 via-[#b58a6b]/10 to-[#3A8DFF]/10">
      <VideoHeroSection/>

      {/* Center Heading */}
<div className="max-w-7xl mx-auto text-center mb-12 px-4 md:px-10">
  <h2 className="text-4xl mt-16 sm:text-5xl font-extrabold text-[#38C172] drop-shadow-md">
    Discover Our Visual Showcase
  </h2>
  <p className="mt-4 text-[#1C1C1C]/80 text-lg italic font-medium max-w-2xl mx-auto">
    “Where innovation meets brilliance — explore the power of precision lighting.”
  </p>
</div>

{/* Video Grid */}
<div className="max-w-7xl mx-auto grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 pb-10">
  {videoList.map((link, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border-2 border-[#3A8DFF]/30 shadow-md group transition-transform duration-300 hover:scale-[1.03] bg-white/70 backdrop-blur-lg"
    >
      <iframe
        className="w-full h-[230px] md:h-[300px] group-hover:scale-105 transition-transform duration-300"
        src={link}
        title={`Video ${index + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  ))}
</div>
<div className="mt-12 text-center max-w-5xl mx-auto px-4">
  <p className="text-lg md:text-xl text-[#1C1C1C]/80 font-medium leading-relaxed">
    This is just a glimpse of what we offer — for a complete experience and more in-depth showcases, 
    visit our official <span className="font-bold text-[#3A8DFF]">YouTube channel</span> and explore our full product range in action.
  </p>
  <a 
    href="https://www.youtube.com/@YourChannelLink" 
    target="_blank" 
    rel="noopener noreferrer"
    className="mt-4 inline-block text-white mb-5 font-semibold bg-gradient-to-r from-[#3A8DFF] to-[#b58a6b] px-6 py-3 rounded-full hover:scale-105 transition transform duration-300 shadow-lg"
  >
    Visit Our YouTube →
  </a>
</div>


    </section>
  );
};

export default VideoPage;
