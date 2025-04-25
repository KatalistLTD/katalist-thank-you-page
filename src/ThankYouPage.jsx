import { motion } from "framer-motion";
import { useEffect } from "react";
import RequestForm from "./RequestForm";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import { ChevronDown, PhoneCall, Mail } from "lucide-react";
import confetti from "canvas-confetti";

const ThankYouPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f2fdfc] to-white text-gray-900 relative overflow-x-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('/parallax-bg.svg')] bg-no-repeat bg-cover opacity-10 z-0" />

      <div className="relative z-10 px-4 py-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative text-center mb-20 rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ab9b] via-[#00c3b5] to-[#007b73] opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/30 z-10" />
          <div className="absolute -top-10 left-10 w-32 h-32 bg-[#00ab9b]/40 rounded-full blur-2xl z-0" />
          <div className="absolute bottom-[-20px] right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl z-0" />

          <div className="relative z-20 px-6 py-16 md:px-20 md:py-24">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              Thank You for Your Purchase!
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your connection is now live! Enjoy{" "}
              <motion.span
                className="font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                blazing-fast internet
              </motion.span>{" "}
              with{" "}
              <motion.span
                className="font-semibold underline decoration-white/30"
                whileHover={{ scale: 1.05 }}
              >
                Dororosa WiFi
              </motion.span>{" "}
              powered by{" "}
              <motion.a
                href="https://katalistlimited.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline decoration-white/40"
                whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
              >
                Katalist Limited
              </motion.a>.
            </motion.p>

            <motion.p
              className="text-sm text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Need help or want more services? Let us know below.
            </motion.p>
          </div>
        </section>

        {/* Scroll Down Indicator */}
        <div className="text-center mb-16" id="services">
          <a href="#services">
            <motion.div
              className="flex justify-center items-center mb-3"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            >
              <ChevronDown className="w-8 h-8 text-[#00ab9b]" />
            </motion.div>
            <p className="text-[#00ab9b] font-medium text-lg">Scroll Down</p>
          </a>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-transform duration-300 w-full max-w-xl text-center">
            <h2 className="text-3xl font-bold text-[#00ab9b] mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex justify-center items-center text-gray-700">
                <PhoneCall className="w-5 h-5 mr-2 text-[#00ab9b]" />
                <span className="font-medium">+254 759 934 650</span>
              </div>
              <div className="flex justify-center items-center text-gray-700">
                <Mail className="w-5 h-5 mr-2 text-[#00ab9b]" />
                <span className="font-medium">katalistlimited@gmail.com</span>
              </div>
            </div>
            <div className="mt-8">
              <motion.a
                href="https://wa.me/254759934650"
                className="inline-block bg-[#00ab9b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#009e8e] transition-transform shadow-md hover:shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Chat on WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ServicesSection />
        </motion.div>

        <div className="my-20 border-t border-gray-200" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <RequestForm />
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
