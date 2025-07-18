import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/hero/l1.avif";
import hero2 from "../assets/images/hero/l2.avif";
import hero3 from "../assets/images/hero/l3.avif";

const slides = [
  {
    image: hero1,
    title: "World-Class Healthcare You Can Trust",
    desc: "Experience compassionate care with cutting-edge technology in a healing environment designed around you.",
  },
  {
    image: hero2,
    title: "Shaping the Future of Modern Hospitals",
    desc: "Hospilight blends innovation with personalized care, ensuring every patient receives world-class attention.",
  },
  {
    image: hero3,
    title: "Empowering You to Live Healthier",
    desc: "Discover a premium healthcare journey where your comfort, wellness, and peace of mind are our priority.",
  },
];

export default function HospilightHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(true);
      }, 200);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: animating ? 1.1 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        ></motion.div>
      </AnimatePresence>

      {/* Glass Blur */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/30 backdrop-blur-[5px] z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold max-w-5xl leading-tight tracking-tight font-[Poppins] bg-gradient-to-r from-[#3A8DFF] to-[#38C172] bg-clip-text text-transparent"
          style={{ fontFamily: `'Poppins', sans-serif` }}
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 max-w-3xl text-lg md:text-xl font-light leading-relaxed text-white font-[Inter]"
          style={{ fontFamily: `'Inter', sans-serif` }}
        >
          {slides[current].desc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <Link to="/about">
            <button className="px-6 py-3 text-md md:text-md font-semibold rounded-full uppercase transition-all duration-300
            bg-gradient-to-r from-[#3A8DFF] to-[#38C172] hover:from-[#38C172] hover:to-[#3A8DFF] text-white shadow-xl hover:shadow-[0_8px_24px_rgba(58,141,255,0.7)]">
              Explore Hospilight
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
