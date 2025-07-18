import React from "react";
import { motion } from "framer-motion";
import ot from "../assets/images/hero/ot.jpg"
import { Link } from "react-router-dom";

// Dummy Product Data
const products = [
  {
    title: "Surgical LED OT Light",
    desc: "Advanced shadowless illumination for precision surgeries.",
    img: ot,
  },
  {
    title: "Medical Pendant System",
    desc: "Ergonomic design for efficient medical gas and utilities access.",
    img: ot,
  },
  {
    title: "Examination LED Light",
    desc: "Portable and high brightness for clinical examination rooms.",
    img: ot,
  },
  {
    title: "Mobile LED Light",
    desc: "Mobility and high clarity for multi-purpose surgical settings.",
    img: ot,
  },
  {
    title: "Ceiling Shadowless Light",
    desc: "High focus, adjustable brightness with anti-glare technology.",
    img: ot,
  },
];

export default function FeaturedProductSlider() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9f9f9] via-[#f7f7f7] to-[#f9f9f9] py-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-10">
        <p className="text-center text-[#3A8DFF] text-1xl mb-2 font-semibold">Our Products</p>
        <h2 className="text-5xl font-bold text-[#1C1C1C] mb-3">Featured Medical Lighting Solutions</h2>
        <p className="text-[#3A8DFF]  ">Designed for Performance | <span className="text-[#38C172]">Crafted for Precision.</span></p>
      </div>

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...products, ...products].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[320px] bg-white rounded-3xl border border-[#3A8DFF]/30 shadow-lg hover:shadow-xl transition duration-300 backdrop-blur-lg overflow-hidden"
            >
              <div className="h-[65vh] w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 text-left space-y-2">
                <h3 className="text-xl font-bold text-[#38C172]">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <p className="mt-10 text-gray-800 text-center">
               Interested in our advanced lighting solutions?{" "}
               <Link
                 to={"/contact"}
                 className="text-[#3A8DFF] underline hover:text-[#2568c8] transition"
               >
                 Get in Touch
               </Link>
             </p>
    </section>
  );
}
