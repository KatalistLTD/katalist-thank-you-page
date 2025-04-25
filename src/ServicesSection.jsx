import React, { useState } from "react";
import services from "./ServiceDetails";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react"; // optional icons

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id="services">
      <section className="w-full px-6 py-24 text-gray-900 bg-white relative overflow-hidden">
        {/* Sparkle BG Accent */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-96 h-96 bg-[#00ab9b]/10 rounded-full blur-3xl top-10 left-10" />
          <div className="absolute w-64 h-64 bg-[#00ab9b]/20 rounded-full blur-2xl bottom-20 right-20" />
        </div>

        <motion.div
          className="mx-auto text-center max-w-7xl relative z-10"
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
            Explore a wide range of IT solutions crafted to grow your business
            and solve technical challenges with ease.
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
                className="p-6 transition duration-300 transform bg-white shadow-md border border-gray-100 rounded-2xl hover:shadow-2xl"
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#00ab9b]/10 text-[#00ab9b] mx-auto text-3xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#00ab9b]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-4 text-[#00ab9b] font-medium inline-flex items-center gap-1 hover:underline"
                >
                  View More <ArrowRight className="w-4 h-4" />
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
                  <div className="mb-4 text-[#00ab9b] flex justify-center text-4xl">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#00ab9b]">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {selectedService.details}
                  </p>
                  <a
                    href="/#request"
                    className="inline-flex items-center justify-center px-4 py-2 text-white bg-[#00ab9b] rounded-full hover:bg-[#009d8e] transition"
                  >
                    Request This Service
                    <Sparkles className="ml-2 w-4 h-4" />
                  </a>
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
