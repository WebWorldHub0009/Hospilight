import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaPinterest,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/images/hero/tbg.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-cover bg-center text-gray-800 px-6 md:px-16 pt-20 pb-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-pink-200 blur-[130px] opacity-20 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-pink-200 blur-[150px] opacity-20 rounded-full -z-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <img src={""} alt="Hospilight Logo" className="w-[80px] md:w-[120px]" />
          <h4 className="text-gray-900 font-semibold mb-2">About Hospilight</h4>
          <p className="leading-relaxed">
            Hospilight is a trusted name in medical lighting solutions. We specialize in manufacturing and supplying premium surgical lights, LED OT lights, examination lights, and hospital equipment designed for performance, reliability, and precision in healthcare environments.
          </p>
          <div className="mt-4">
            <a
              href="https://www.justdial.com/Delhi/Hospi-Light-India-Bawana/011PXX11-XX11-171008174518-I4N4_BZDET?rStatus=1&pgfrom=b2b_catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-pink-500 text-pink-600 rounded hover:bg-pink-500 hover:text-white transition duration-300 text-sm font-medium"
            >
              View on JustDial
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link to={link} className="hover:text-pink-500 transition duration-300">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-gray-900 font-semibold">Email</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="mailto:hospilightindia@gmail.com"
                className="flex items-center space-x-2 hover:text-pink-500 transition duration-300"
              >
                <FaEnvelope className="text-pink-500" />
                <span>hospilightindia@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {[
              "Surgical Light Manufacturer",
              "LED OT Light",
              "LED Surgical Light",
              "Operating Room Light",
              "Surgical Lamp",
              "Medical Examination Light",
              "LED Shadowless Light",
              "OT Light",
              "Operation Theatre Light",
            ].map((service, i) => (
              <li key={i}>
                <Link to="/services" className="hover:text-pink-500 transition duration-300">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address and Socials */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Our Address</h4>
          <address className="not-italic leading-relaxed mb-4">
            Hospi Equips<br />
            Plot No. A 87a, First Floor,<br />
            Near Asha Shakti Hospital,<br />
            Main Kanjhawala Road,<br />
            Budh Vihar Phase 1,<br />
            New Delhi-110086, India
          </address>
          <div className="flex items-center gap-4 mb-4">
            <div><Translator /></div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="https://www.linkedin.com/in/hospi-light-india-141913211/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition"><FaLinkedinIn size={20} /></a>
            <a href="https://www.instagram.com/hospilight/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition"><FaInstagram size={20} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition"><FaFacebookF size={20} /></a>
            <a href="https://www.youtube.com/channel/UC4bki-w-01xeBfnePgdi6AQ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition"><FaYoutube size={20} /></a>
            <a href="https://in.pinterest.com/hospieuips/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition"><FaPinterest size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-300 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Hospilight India. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a href="https://webworldhub.co.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-500 hover:text-pink-400 transition">
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
