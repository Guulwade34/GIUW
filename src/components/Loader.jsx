import { motion } from "framer-motion";
import logo from "../assets/giu-logo.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="GIU Logo"
          className="h-24 w-24 object-contain"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* TEXT */}
        <p className="mt-4 font-black text-[#065F46]">
          Gedo International University
        </p>

        {/* LOADING BAR */}
        <div className="mt-6 h-2 w-40 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>

      </motion.div>
    </div>
  );
}