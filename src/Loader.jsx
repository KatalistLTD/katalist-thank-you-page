import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [message, setMessage] = useState("Connecting...");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const step1 = setTimeout(() => setMessage("Loading your experience…"), 2500);
    const step2 = setTimeout(() => {
      setMessage("CONNECTED!!");
      setIsConnected(true);
    }, 5000); // Show Connected after 4s
    const hide = setTimeout(() => setShowLoader(false), 6000); // Hide loader after 5s

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-[#00ab9b] bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Icon & Spinner */}
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <motion.img
              src="/icon.png"
              alt="Katalist Icon"
              className="w-20 h-20 animate-bounce"
            />
            <div className="w-8 h-8 border-4 border-white rounded-full border-t-transparent animate-spin" />
          </div>

          {/* Typing Animation */}
          <motion.p
            key={message}
            className={`text-xl font-medium ${
              isConnected ? "font-bold text-[#00ab9b]" : "text-[#00ab9b]/80"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block pr-1 overflow-hidden border-r-2 border-white animate-typing whitespace-nowrap">
              {message}
            </span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
