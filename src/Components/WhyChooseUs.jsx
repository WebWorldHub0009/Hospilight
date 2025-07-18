import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/client/1.webp"
import img2 from "../assets/images/client/2.webp"
import img3 from "../assets/images/client/3.webp"
import img4 from "../assets/images/client/4.webp"
import img5 from "../assets/images/client/5.png"


const clientLogos = [
  img1,img2,img3,img4,img5
  
];

const testimonials = [
  { name: "Dr. A Sharma", review: "Hospilight products are world-class in quality and reliability. Our OT setups have become much smoother and efficient." },
  { name: "Admin, Fortis", review: "Great support, on-time delivery and durable products. Highly recommend Hospilight for healthcare infrastructure." },
  { name: "Procurement Head, Medanta", review: "Hospilight delivers top-notch ICU beds and OT lights with great after-sales service." },
  { name: "Director, AIIMS", review: "Reliable and innovative, Hospilight has improved our hospital infrastructure remarkably." },
  { name: "Head of Procurement, Max", review: "Hospilight’s commitment to quality and timely service stands unmatched." },
  { name: "Operations, Paras", review: "Durable and modern solutions for healthcare spaces, with prompt support." },
  { name: "Facility Manager, Care Hospitals", review: "Truly premium OT lights with outstanding durability and performance." },
  { name: "Supply Chain, Artemis", review: "Very professional team and amazing service turnaround by Hospilight." },
];

export default function WhyChooseHospilight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 4 testimonials at a time
  const totalGroups = Math.ceil(testimonials.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5] text-[#0F172A] py-16 px-5 md:px-20 font-poppins space-y-16">
      
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3A8DFF] mb-4">
          Why Healthcare Trusts Hospilight
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing medical infrastructure with comfort, durability, and advanced technology.
        </p>
      </div>

      {/* Client Slider */}
      <Marquee gradient={false} speed={40} className="py-6 rounded-lg shadow-inner mb-6">
        {clientLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="client logo"
            className="h-16 mx-10  transition duration-300"
          />
        ))}
      </Marquee>

      {/* Counters + Testimonials */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="flex flex-col gap-8 justify-center">
          <div className="text-center mb-6">
  <h3 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
    Empowering Healthcare With Numbers
  </h3>
  <p className="text-md md:text-lg text-[#3A8DFF] mt-3 italic font-medium">
    “Numbers that define our commitment, quality that defines your trust.”
  </p>
</div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <h4 className="text-4xl font-bold text-[#38C172]">
                <CountUp end={5000} duration={3} separator="," />+
              </h4>
              <p className="text-gray-700 mt-2 text-sm">Installations Completed</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <h4 className="text-4xl font-bold text-[#38C172]">
                <CountUp end={1200} duration={3} separator="," />+
              </h4>
              <p className="text-gray-700 mt-2 text-sm">Happy Healthcare Clients</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <h4 className="text-4xl font-bold text-[#38C172]">
                <CountUp end={150} duration={3} separator="," />+
              </h4>
              <p className="text-gray-700 mt-2 text-sm">Cities Covered</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white shadow-md">
              <h4 className="text-4xl font-bold text-[#38C172]">
                <CountUp end={10} duration={3} />+
              </h4>
              <p className="text-gray-700 mt-2 text-sm">Years of Industry Trust</p>
            </div>
          </div>
        </div>

        {/* Right - 2x2 Flipping Testimonials */}
        <div className="grid grid-cols-2 gap-6">
          {testimonials.slice(currentIndex * 4, currentIndex * 4 + 4).map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1E293B] rounded-xl shadow-lg p-5 flex flex-col justify-center items-center text-center text-white min-h-[160px]"
            >
              <p className="text-sm italic mb-3 leading-relaxed">"{testimonial.review}"</p>
              <h4 className="text-md font-semibold text-[#3A8DFF]">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
