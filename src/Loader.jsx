import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiLow, WifiHigh, Wifi } from "lucide-react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [message, setMessage] = useState("Connecting...");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const step1 = setTimeout(() => setMessage("Loading your experience…"), 2500);
    const step2 = setTimeout(() => {
      setMessage("CONNECTED!!");
      setIsConnected(true);
    }, 5000);
    const hide = setTimeout(() => setShowLoader(false), 6000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(hide);
    };
  }, []);

  const getIconComponent = () => {
    if (message === "Connecting...") return <WifiLow className="w-8 h-8 text-[#00ab9b]" />;
    if (message === "Loading your experience…") return <WifiHigh className="w-8 h-8 text-[#00ab9b]" />;
    return <Wifi className="w-8 h-8 text-[#00ab9b]" />;
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-[#00ab9b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.img
            src="/icon.png"
            alt="Katalist Icon"
            className="w-20 h-20 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          />

          {/* WiFi Icon with horizontal animation */}
          <div className="mb-4 h-8 w-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={message}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {getIconComponent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pulsing Dots Loader */}
          <div className="flex space-x-2 mb-6">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-3 h-3 bg-[#00ab9b] rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Message */}
          <motion.p
            key={message}
            className={`text-xl md:text-2xl font-medium tracking-wide ${
              isConnected ? "font-bold text-[#00ab9b]" : "text-[#00ab9b]/80"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {message}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
