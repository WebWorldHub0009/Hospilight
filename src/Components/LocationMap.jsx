import React from "react";
import { motion } from "framer-motion";

const LocationMap = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10 bg-gradient-to-br from-[#3A8DFF]/10 via-[#b58a6b]/10 to-[#3A8DFF]/10 font-poppins">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] mb-4 relative inline-block"
        >
          Our Locations
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-16 h-[4px] bg-[#3A8DFF] rounded-full"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-[#38C172] text-lg font-medium italic"
        >
          “Bringing innovation in surgical lighting from Delhi to all over India.”
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {[ 
          {
            title: "Hospi Equips",
            address: "Plot No. A 87a, First Floor, Near Asha Shakti Hospital, Main Kanjhawala Road, Budh Vihar Phase 1, New Delhi-110086, Delhi, India",
            mapLink: "https://www.google.com/maps?q=Plot%20No.%20A%2087a,%20Near%20Asha%20Shakti%20Hospital,%20Budh%20Vihar%20Phase%201,%20New%20Delhi-110086&output=embed",
          },
          {
            title: "Hospi Light India",
            address: "G-36 SECTOR-1 BAWANA INDUSTRIAL AREA, Bawana-110039, Delhi, India",
            mapLink: "https://www.google.com/maps?q=G-36%20SECTOR-1%20BAWANA%20INDUSTRIAL%20AREA,%20Delhi-110039&output=embed",
          }
        ].map((loc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-[#3A8DFF]/30 hover:scale-[1.02] transition transform duration-300 overflow-hidden flex flex-col"
          >
            <div className="p-6 bg-gradient-to-r from-[#3A8DFF]/20 to-[#38C172]/20">
              <h3 className="text-2xl font-bold text-[#38C172] mb-2">{loc.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{loc.address}</p>
            </div>
            <iframe
              src={loc.mapLink}
              title={loc.title}
              className="w-full h-[300px] md:h-[380px] rounded-b-3xl border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LocationMap;
