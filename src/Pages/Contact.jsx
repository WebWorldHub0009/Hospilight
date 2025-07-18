import React from 'react'
import LocationMap from '../Components/LocationMap'
import { AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiMap } from 'react-icons/bi'
import { HiOutlinePhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <>
    

<section className="w-full bg-gradient-to-b from-[#f5f9ff] via-[#e7f0ff] to-[#f5f9ff] font-sans py-1">
  {/* Hero */}
  <div className="w-full bg-gradient-to-br from-[#3A8DFF] to-[#38C172] text-white text-center px-6 py-20 relative overflow-hidden rounded-b-[60px]">
    <h1 className="text-5xl md:text-6xl font-[Great_Vibes] mb-4">We’d Love To Hear From You</h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
      Whether you have a query about products, partnerships, or any assistance — our team is ready to guide you.
    </p>
    <div className="absolute w-64 h-64 bg-white opacity-20 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
  </div>

  {/* Contact Box */}
  <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
    {/* Left Info */}
    <div className="bg-[#3A8DFF] text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
      <h3 className="text-2xl font-bold mb-4">HospiLight India</h3>
      <p className="text-white/90 text-base mb-6">
        Premium Surgical Lighting & Medical Equipment Provider.
      </p>

      <div className="flex items-start gap-4 text-base mb-4">
        <HiOutlinePhone className="mt-1 text-white text-2xl" />
        <div>+91 9810715757</div>
      </div>
      <div className="flex items-start gap-4 text-base mb-4">
        <AiOutlineMail className="mt-1 text-white text-2xl" />
        <div>
          satyam@hospi <br /> sales@hospilight.in
        </div>
      </div>
      <div className="flex items-start gap-4 text-base mb-4">
        <BiMap className="mt-1 text-white text-2xl" />
        <div className="space-y-3">
          <div>
            Hospi Equips, A-87A, First Floor, Near Asha Shakti Hospital, Main Kanjhawala Road, Budh Vihar Phase-1, New Delhi-110086
          </div>
          <div>
            G-36 Sector-1, Bawana Industrial Area, Hospi Light India, Bawana-110039
          </div>
        </div>
      </div>

      <p className="text-white/80 text-sm mt-4">
        GSTIN 1: 07GSSPS8521N1ZL <br />
        GSTIN 2: 07AYGPS1635P1ZU
      </p>

      {/* Social Links */}
      <div className="flex gap-5 mt-6">
        <a href="https://www.facebook.com/p/Hospi-Equips-100063576141339/" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className="text-3xl hover:text-[#b58a6b] transition" />
        </a>
        <a href="https://www.instagram.com/hospi_light_india/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className="text-3xl hover:text-[#b58a6b] transition" />
        </a>
        <a href="https://www.linkedin.com/in/hospi-light-india-141913211/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-3xl hover:text-[#b58a6b] transition" />
        </a>
        <a href="https://www.indiamart.com/hospi-equips/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-indiamart-icon.svg" alt="IndiaMart" className="w-8 h-8" />
        </a>
      </div>

      <div className="absolute w-80 h-80 bg-white opacity-20 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
    </div>

    {/* Right Form */}
    <div className="px-8 py-12 md:w-1/2 w-full">
      <form className="w-full" action="https://formsubmit.co/satyam@hospi" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://hospilight.in/thank-you" />

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <label className="block text-lg text-gray-700 mb-2">Your Name</label>
            <input type="text" name="name" required placeholder="John Doe" className="w-full border-b-2 border-gray-300 focus:border-[#3A8DFF] outline-none py-3 text-base" />
          </div>
          <div className="flex-1">
            <label className="block text-lg text-gray-700 mb-2">Your Email</label>
            <input type="email" name="email" required placeholder="you@example.com" className="w-full border-b-2 border-gray-300 focus:border-[#3A8DFF] outline-none py-3 text-base" />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">Your Subject</label>
          <input type="text" name="subject" required placeholder="How can we help you?" className="w-full border-b-2 border-gray-300 focus:border-[#3A8DFF] outline-none py-3 text-base" />
        </div>

        <div className="mb-8">
          <label className="block text-lg text-gray-700 mb-2">Message</label>
          <textarea rows="5" name="message" required placeholder="Write your message here" className="w-full border-b-2 border-gray-300 focus:border-[#3A8DFF] outline-none py-3 text-base resize-none"></textarea>
        </div>

        <button type="submit" className="bg-[#3A8DFF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#b58a6b] transition duration-300 w-full">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

    <LocationMap/>
    </>
  )
}

export default Contact