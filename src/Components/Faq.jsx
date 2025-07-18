import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLightbulb,
  FaTags,
  FaInfoCircle,
  FaHospital,
  FaPhoneAlt,
} from "react-icons/fa";
import bgImage from "../assets/images/ABout/faq1.jpg";

const faqCategories = {
  "General Info": {
    icon: <FaInfoCircle className="text-[#3A8DFF] text-xl" />,
    faqs: [
      {
        question: "What is Hospilight specialized in?",
        answer:
          "Hospilight specializes in advanced surgical and medical lighting solutions, including LED OT lights, examination lights, and ceiling-mounted lighting systems.",
      },
      {
        question: "Are Hospilight products certified?",
        answer:
          "Yes, all Hospilight products comply with international medical standards and are CE and ISO certified for hospital use.",
      },
      {
        question: "Do you offer customization?",
        answer:
          "Yes, we offer customized solutions tailored to OT dimensions, lighting requirements, and hospital preferences.",
      },
    ],
  },
  "Lighting Solutions": {
    icon: <FaLightbulb className="text-[#3A8DFF] text-xl" />,
    faqs: [
      {
        question: "What types of OT lights are available?",
        answer:
          "We offer shadowless LED OT lights, mobile surgical lights, minor OT lights, and ceiling-mounted modular lighting systems.",
      },
      {
        question: "What is the lifespan of Hospilight LED products?",
        answer:
          "Our LED lights have a lifespan of over 50,000 hours with minimal maintenance required.",
      },
      {
        question: "Do your lights have adjustable intensity?",
        answer:
          "Yes, all Hospilight OT lights come with adjustable brightness and color temperature settings for optimal surgical visibility.",
      },
    ],
  },
  "Pricing & Orders": {
    icon: <FaTags className="text-[#3A8DFF] text-xl" />,
    faqs: [
      {
        question: "How can I get a quotation?",
        answer:
          "Simply contact us via WhatsApp or our website, and we’ll provide a tailored quotation within 24 hours.",
      },
      {
        question: "Do you offer bulk discounts for hospitals?",
        answer:
          "Yes, hospitals and bulk orders receive special discounted pricing with free consultation services.",
      },
      {
        question: "Is advance booking required?",
        answer:
          "Advance booking is recommended for large orders to ensure faster dispatch and customization.",
      },
    ],
  },
  "Support & Services": {
    icon: <FaPhoneAlt className="text-[#3A8DFF] text-xl" />,
    faqs: [
      {
        question: "Do you offer installation services?",
        answer:
          "Yes, we provide professional installation assistance across India with trained engineers.",
      },
      {
        question: "What is your warranty period?",
        answer:
          "All products come with a 2-year warranty, with extended warranty options available.",
      },
      {
        question: "How do I get technical support?",
        answer:
          "You can call our support team at +91 9368436928 or use the contact form on our website for assistance.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General Info");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative w-full py-24 px-4 md:px-10 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative max-w-7xl mx-auto rounded-3xl shadow-lg bg-gradient-to-br from-[#3A8DFF]/20 to-[#b58a6b]/10 z-10 backdrop-blur-md">
        <div className="text-center py-14 px-6 border-b border-[#ffffff1a]">
          <h2 className="text-4xl font-bold mb-3 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            Get all your queries about Hospilight lighting solutions answered here.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Tabs */}
          <div className="md:w-1/3 bg-[#00000040] p-6 border-r border-[#ffffff1a] flex flex-col gap-4">
            {Object.entries(faqCategories).map(([category, data], idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setActiveTab(category);
                  setOpenIndex(null);
                }}
                whileTap={{ scale: 0.98 }}
                className={`text-left w-full px-5 py-4 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-200 ${
                  activeTab === category
                    ? "bg-[#1f242c] text-white shadow"
                    : "bg-transparent text-gray-300 hover:text-white"
                }`}
              >
                {data.icon}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>

          {/* FAQs */}
          <div className="md:w-2/3 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {faqCategories[activeTab].faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#ffffff1a] py-4">
                    <button
                      className="w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg text-white"
                      onClick={() =>
                        setOpenIndex(index === openIndex ? null : index)
                      }
                    >
                      {faq.question}
                      <span className="text-[#3A8DFF] text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-200 mt-3 text-sm leading-relaxed overflow-hidden"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
