import React from "react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import img from '../assets/images/hero/l3.avif'
const HealthServiceHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 px-6 md:px-16 py-12 flex flex-col justify-center z-10">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
    We Provide <br />
    <span className="text-[#3A8DFF]">Premium Surgical Lights</span> <br /> & Hospital Equipment
  </h1>
  <p className="text-gray-500 max-w-md mt-4">
    Trusted by top healthcare institutions, Hospilight delivers precision lighting and
    advanced hospital components designed for efficiency, durability, and performance.
  </p>

  {/* Product Highlights */}
  <div className="bg-white shadow-xl rounded-xl p-6 mt-10 w-full max-w-5xl">
    {/* Categories */}
    <div className="flex gap-6 text-sm text-gray-500 font-medium mb-6">
      <span className="text-red-500 border-b-2 border-red-500 pb-1 cursor-pointer">
        Surgical Lights
      </span>
      <span className="hover:text-red-500 cursor-pointer">OT Tables</span>
      <span className="hover:text-red-500 cursor-pointer">Hospital Beds</span>
    </div>

    {/* Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
        <FaMapMarkerAlt className="text-green-500 mr-3 text-lg" />
        <div>
          <label className="block text-xs text-gray-400">Factory Location</label>
          <p className="text-sm font-medium text-gray-700">Delhi, India</p>
        </div>
      </div>
      <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
        <MdDateRange className="text-[#3A8DFF] mr-3 text-lg" />
        <div>
          <label className="block text-xs text-gray-400">Experience</label>
          <p className="text-sm font-medium text-gray-700">10+ Years Industry Leader</p>
        </div>
      </div>
      <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
        <FaUser className="text-purple-500 mr-3 text-lg" />
        <div>
          <label className="block text-xs text-gray-400">Client Base</label>
          <p className="text-sm font-medium text-gray-700">500+ Hospitals Served</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Right Image */}
      <div className="md:w-1/2 relative min-h-[580px] h-full ">
        <img
          src={img} // Replace with actual path
          alt="Doctor with family"
          className="absolute h-full w-full object-cover object-right-bottom rounded-bl-[100px]"
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-6 w-4 h-4 bg-blue-200 rounded-full z-0"></div>
      <div className="absolute top-64 left-32 w-4 h-4 bg-blue-200 rounded-full z-0"></div>
      <div className="absolute top-72 left-8 w-4 h-4 bg-blue-200 rounded-full z-0"></div>
      <div className="absolute top-44 left-72 w-3 h-3 bg-red-200 rounded-full z-0"></div>
      <div className="absolute bottom-6 left-10 w-3 h-3 bg-red-200 rounded-full z-0"></div>
      {/* <div className="absolute top-20 right-20 w-4 h-4 bg-blue-100 rounded-full z-0"></div> */}
    </div>
  );
};

export default HealthServiceHero;