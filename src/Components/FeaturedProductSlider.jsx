import React from "react";
import { motion } from "framer-motion";
import ot from "../assets/images/hero/ot.jpg"
import { Link } from "react-router-dom";

import img1 from "../assets/images/showcase/C-Arm.jpg"
import img2 from "../assets/images/showcase/hexa-ot.jpg"
import img3 from "../assets/images/showcase/hybrid.jpg"
import img4 from "../assets/images/showcase/led-ot.jpg"
import img5 from "../assets/images/showcase/mobile-light.jpg"
import img6 from "../assets/images/showcase/ot-table.jpg"


// Dummy Product Data
const products = [
  {
    title: "C-Arm Hydraulic Hospi Tab-3",
    desc: "Premium hydraulic operation table designed for C-Arm compatibility, ensuring precision positioning and maximum patient comfort.",
    img: img1,
  },
  {
    title: "ShadowLess Hex OT Light",
    desc: "Advanced shadowless hexagonal OT light offering superior brightness, clarity, and energy efficiency for surgical environments.",
    img: img2,
  },
  {
    title: "Hybrid Mobile LED Light",
    desc: "Versatile and portable LED surgical light with high luminance, perfect for mobile procedures and quick clinical setups.",
    img: img3,
  },
  {
    title: "Ceiling LED OT Light With Hydraulic OT Table",
    desc: "Integrated ceiling OT light and hydraulic table setup delivering exceptional illumination and ergonomic control during operations.",
    img: img4,
  },
  {
    title: "Mobile OT Light",
    desc: "Compact and easy-to-move OT light featuring high-intensity LED, shadow reduction, and adjustable brightness for optimal visibility.",
    img: img5,
  },
];


export default function FeaturedProductSlider() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9f9f9] via-[#f7f7f7] to-[#f9f9f9] py-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-10">
        <p className="text-center text-[#3A8DFF] text-1xl mb-2 font-semibold">Our Products</p>
        <h2 className="text-4xl font-bold text-[#1C1C1C] mb-3">Featured Medical Lighting Solutions</h2>
        <p className="text-[#3A8DFF]  ">Designed for Performance | <span className="text-[#38C172]">Crafted for Precision.</span></p>
      </div>

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden py-8">
  <motion.div
    className="flex gap-8 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
  >
    {[...products, ...products].map((item, index) => (
      <div
        key={index}
        className="w-[250px] md:w-[380px] bg-white rounded-3xl border border-[#3A8DFF]/30 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex-shrink-0"
      >
        <div className="h-[250px] md:h-[400px] w-full overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-[#38C172]">{item.title}</h3>
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
