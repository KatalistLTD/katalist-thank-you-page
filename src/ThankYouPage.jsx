import { motion } from "framer-motion";
import RequestForm from "./RequestForm";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import { ChevronDown, PhoneCall, Mail } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f2fdfc] to-white text-gray-900 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('/parallax-bg.svg')] bg-cover bg-no-repeat bg-center opacity-10 z-0" />

      <div className="relative z-10 px-4 py-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
  <motion.h1
    className="text-4xl md:text-5xl font-extrabold text-[#00ab9b] mb-4 flex items-center justify-center gap-2"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    Thank You for Your Purchase!
  </motion.h1>

  <motion.p
    className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    Your connection is now live! Enjoy{" "}
    <motion.span
      className="font-semibold text-black"
      whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      blazing-fast internet
    </motion.span>{" "}
    with{" "}
    <motion.span
      className="font-semibold text-[#00ab9b]  decoration-2 underline-offset-4"
      whileHover={{ scale: 1.05 }}
    >
      Dororosa WiFi
    </motion.span>{" "}
    powered by{" "}
    <motion.span
      className="font-bold text-[#00ab9b] underline decoration-[#00ab9b]/40 decoration-2 underline-offset-4"
      whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
    >
      <a href="https://katalistlimited.vercel.app/">Katalist Limited</a>
    </motion.span>.
  </motion.p>

  <motion.p
    className="text-sm text-gray-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    Need help or want more services? Let us know below.
  </motion.p>
</div>


<div className="text-center mb-16">
  <a href="#services">
    <motion.div
      className="flex justify-center items-center mt-[-2rem] mb-4 cursor-pointer"
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ChevronDown className="w-8 h-8 text-[#00ab9b]" />
    </motion.div>
    <p className="text-[#00ab9b] text-lg font-semibold">Scroll Down</p>
  </a>
</div>


        
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center items-center"
>
  {/* Contact Card */}
  <div className="bg-white p-8 shadow-lg rounded-3xl border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out max-w-lg w-full">
    <div className="flex items-center justify-center mb-6">
      <h2 className="text-3xl font-bold text-[#00ab9b]">Contact Us</h2>
    </div>

    <div className="space-y-4 text-center">
      <div className="flex items-center justify-center text-lg text-gray-700">
        <PhoneCall className="w-5 h-5 mr-2 text-[#00ab9b]" />
        <span className="font-medium">+254759934650</span>
      </div>
      <div className="flex items-center justify-center text-lg text-gray-700">
        <Mail className="w-5 h-5 mr-2 text-[#00ab9b]" />
        <span className="font-medium">katalistlimited@gmail.com</span>
      </div>
    </div>

    <div className="mt-8 flex justify-center">
      <a
        href="https://wa.me/254759934650"
        className="inline-block bg-[#00ab9b] text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-[#009e8e] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
      >
        Chat on WhatsApp
      </a>
    </div>
  </div>
</motion.div>


        {/* Services with animation */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ServicesSection />
          </motion.div>

        {/* Divider */}
        <div className="my-20 border-t border-gray-200" />

        {/* Request Form with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <RequestForm />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default ThankYouPage;
