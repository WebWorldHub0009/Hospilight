import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import bgImage from "../assets/images/hero/tbg.jpg"; 

const teamMembers = [
  { name: "Satyam Singh", position: "Owner & Founder", image: "https://randomuser.me/api/portraits/men/30.jpg", linkedin: "#" },
  { name: "Kp Singh", position: "Co-Founder", image: "https://randomuser.me/api/portraits/men/31.jpg", linkedin: "#" },
  { name: "Sangeeta Singh", position: "Accountant", image: "https://randomuser.me/api/portraits/women/32.jpg", linkedin: "#" },
  { name: "Ananya Singh", position: "Chief Executive Officer", image: "https://randomuser.me/api/portraits/women/33.jpg", linkedin: "#" },
  { name: "Manoj Kumar", position: "Director", image: "https://randomuser.me/api/portraits/men/34.jpg", linkedin: "#" },
  { name: "Vimal Gupta", position: "Marketing Head", image: "https://randomuser.me/api/portraits/men/35.jpg", linkedin: "#" },
  { name: "Seema Gupta", position: "Administration", image: "https://randomuser.me/api/portraits/women/36.jpg", linkedin: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurTeam() {
  return (
    <section className="relative py-20 px-4 md:px-20 font-poppins text-black overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#ffffff79]">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Section Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full mx-auto text-center"
      >
        <motion.h4
          variants={itemVariants}
          className="text-[#3A8DFF] font-semibold mb-2 text-md uppercase"
        >
          Core Leadership
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Meet the <span className="text-[#3A8DFF]">Hospilight Team</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-800 max-w-3xl mx-auto mb-8 text-lg"
        >
          Building healthcare excellence through leadership, precision, and commitment.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Link to={"/contact"}>
            <button className="bg-[#3A8DFF] cuesor-pointer text-black px-7 py-3 rounded-full hover:bg-[#3282f1] transition text-lg shadow-lg">
              Connect With Us
            </button>
          </Link>
          <Link to={"/about"}>
            <button className="bg-white text-black cursor-pointer px-7 py-3 rounded-full hover:bg-gray-300 transition text-lg shadow-lg">
              About Hospilight
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#3A8DFF] shadow-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-black text-2xl">{member.name}</h4>
                <p className="text-[#3A8DFF]">{member.position}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-[#3A8DFF] transition">
                  <FaLinkedin />
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center space-y-3"
          >
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#3A8DFF] shadow-xl">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-2xl">{member.name}</h4>
            <p className="text-[#3A8DFF]">{member.position}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-[#3A8DFF] transition">
              <FaLinkedin />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
