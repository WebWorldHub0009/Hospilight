import React from "react";
import { FaLightbulb, FaRegHospital, FaMicroscope, FaSyringe, FaHeartbeat, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "../assets/images/hero/tbg.jpg";

const services = [
  {
    icon: <FaLightbulb className="text-4xl text-[#3A8DFF]" />,
    title: "Surgical Light Manufacturer",
    description: "Leading manufacturers of premium surgical lights with optimal illumination for modern operating rooms.",
    imgSrc: "https://images.unsplash.com/photo-1606230974666-47d327db6c59"
  },
  {
    icon: <FaRegHospital className="text-4xl text-[#3A8DFF]" />,
    title: "LED OT Light",
    description: "Advanced LED OT lights offering shadowless clarity, energy efficiency, and durability.",
    imgSrc: "https://images.unsplash.com/photo-1588776814546-b892d18d3a09"
  },
  {
    icon: <FaMicroscope className="text-4xl text-[#3A8DFF]" />,
    title: "LED Surgical Light",
    description: "High-performance LED surgical lights designed for precision and safety in critical operations.",
    imgSrc: "https://images.unsplash.com/photo-1583312041941-7c4477d2c9b2"
  },
  {
    icon: <FaSyringe className="text-4xl text-[#3A8DFF]" />,
    title: "Operating Room Light",
    description: "Cutting-edge operating room lighting systems to enhance procedural visibility and comfort.",
    imgSrc: "https://images.unsplash.com/photo-1579154204601-01592df6c525"
  },
  {
    icon: <FaHeartbeat className="text-4xl text-[#3A8DFF]" />,
    title: "Medical Examination Light",
    description: "Precise medical examination lights ensuring optimal brightness for accurate diagnostics.",
    imgSrc: "https://images.unsplash.com/photo-1588774068579-cf7e16e2f393"
  },
  {
    icon: <FaStar className="text-4xl text-[#3A8DFF]" />,
    title: "Shadowless Surgical Light",
    description: "Shadowless lighting technology minimizing obstructions and providing uniform illumination.",
    imgSrc: "https://images.unsplash.com/photo-1585218355662-36f27f8b1b33"
  },
];

export default function Service() {
  return (
    <section
      className="relative py-20 text-center text-white bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-black uppercase tracking-wider text-sm font-bold">
          Our <span className="text-[#3A8DFF]">Services</span>
        </h2>
        <h3 className="text-2xl sm:text-4xl font-bold text-black mt-3">
          Advanced <span className="text-[#3A8DFF]">Lighting Solutions</span> for Healthcare Excellence
        </h3>
        <p className="text-gray-800 max-w-3xl mx-auto mt-5 mb-10">
          Discover our wide range of surgical and medical lighting solutions designed for precision, safety, and performance in modern healthcare environments.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white bg-opacity-95 text-black shadow-md rounded-xl p-5 w-80 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              {service.imgSrc && (
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              {service.icon}
              <h4 className="text-lg uppercase font-bold text-gray-800 mt-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-gray-800">
          Interested in our advanced lighting solutions?{" "}
          <Link
            to={"/contact"}
            className="text-[#3A8DFF] underline hover:text-[#2568c8] transition"
          >
            Get in Touch
          </Link>
        </p>
      </div>
    </section>
  );
}
