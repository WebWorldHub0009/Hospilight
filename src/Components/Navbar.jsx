import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaStethoscope,
  FaPhoneAlt,
  FaUserMd,
  FaVideo,
} from "react-icons/fa";
import { IoHeartOutline, IoChevronDownOutline } from "react-icons/io5";
import logo from "../assets/logom.png"

const HospilightNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    {
      name: "Products",
      dropdown: true,
      icon: <FaStethoscope />,
      items: [
        { name: "OT Tables", path: "/product/ot-tables" },
        { name: "Surgical Ceiling Lights", path: "/product/surgical-ceiling-lights" },
        { name: "Examination Lights", path: "/product/examinaton-lights" },
        { name: "Derma Chair manufacturer", path: "/product/derma-chair" },

          { name: "LED OT Lights", path: "/product/led-ot-light" },
        { name: "Mobile Ot Lights", path: "/product/mobile-ot-lights" },
          { name: "Surgical Cautery", path: "/product/surgical-cautery" },
        { name: "Hospital bed", path: "/product/hospital-bed" },
         { name: "Surgical Instrument", path: "/product/surgical-instrument" },
      ],
    },
    { name: "Product Showcase", path: "/video", icon: <FaVideo /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaYoutube />, url: "https://youtube.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  return (
    <>
      <div className="w-full bg-[#3A8DFF] text-xs text-white py-1 px-4 text-center tracking-wide font-semibold">
        💙 Trusted Care at Hospilight | 24/7 Emergency Services | Call Now +91 9810715757
      </div>

      <header className="w-full z-50 bg-white shadow-xl border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left Social */}
          <div className="hidden md:flex gap-4 text-[#3A8DFF] text-lg">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="hover:text-[#38C172] transition">
                {item.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center">
 <div className="flex items-center">
  <img
    src={logo}
    alt="Hospilight Logo"
    className="w-16 md:w-20 object-contain"
  />
  <span className="text-[#3A8DFF] font-extrabold text-xl md:text-2xl uppercase">
    Hospilight <span className="text-red-700">India</span>
  </span>
</div>

</div>
          {/* Right Search & Hamburger */}
          <div className="flex gap-4 items-center">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm rounded-full border border-gray-300 shadow-inner focus:ring-2 focus:ring-[#38C172] outline-none transition"
              />
              <FaSearch className="absolute right-4 top-3 text-[#38C172]" />
            </div>
            <div className="md:hidden text-2xl text-[#3A8DFF]" onClick={toggleMenu}>
              {!menuOpen ? <FaBars /> : <FaTimes />}
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center gap-10 py-3 text-[#3A8DFF] font-semibold text-sm uppercase border-t border-gray-200 shadow-inner">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#38C172] transition">
                  {link.icon} {link.name}
                  <IoChevronDownOutline className="text-xs group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-lg shadow-lg border border-gray-100 z-20 transition-all ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {link.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-[#3A8DFF] hover:bg-[#E6F3FF] hover:text-[#38C172] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center gap-2 hover:text-[#38C172] transition"
              >
                {link.icon} {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-[85%] max-w-xs bg-white z-40 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out shadow-xl p-6 overflow-y-auto`}
        >
          <ul className="space-y-5 text-[#3A8DFF] font-medium text-base">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center cursor-pointer hover:text-[#38C172]"
                  >
                    <span className="flex items-center gap-2">{link.icon} {link.name}</span>
                    <IoChevronDownOutline
                      className={`transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {dropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2 text-gray-700 text-sm">
                      {link.items.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} onClick={toggleMenu} className="block hover:text-[#38C172]">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <li key={link.name}>
                  <Link to={link.path} onClick={toggleMenu} className="flex gap-2 items-center hover:text-[#38C172]">
                    {link.icon} {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="my-4 border-t border-gray-200" />
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Email:</strong> contact@hospilight.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
          <div className="flex gap-4 mt-6 text-xl text-[#3A8DFF]">
            {socialLinks.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="hover:text-[#38C172]">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default HospilightNavbar;
