import React, { useState } from "react";
import services from "./ServiceDetails";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id="services">
      <section className="w-full px-6 py-20 text-gray-900 bg-white">
      <motion.div
        className="mx-auto text-center max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-[#00ab9b]"
          variants={fadeUp}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto mb-12 text-lg text-gray-600"
          variants={fadeUp}
        >
          Explore a wide range of IT services crafted to grow your business and solve technical challenges with ease.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-6 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#00ab9b]/10 text-[#00ab9b] mx-auto text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#00ab9b]">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-4 text-[#00ab9b] font-medium hover:underline"
              >
                View More →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-md w-full p-6 rounded-2xl shadow-2xl relative scale-95"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
              <div className="text-center">
                <div className="mb-4 text-[#00ab9b] flex justify-center text-3xl">
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#00ab9b]">
                  {selectedService.title}
                </h3>
                <p className="text-gray-700">{selectedService.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </div>
    
  );
};

export default ServicesSection;
