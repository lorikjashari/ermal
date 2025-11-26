"use client";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/38348118665"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-white font-semibold shadow-2xl hover:shadow-[#25D366]/50 transition-all group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl"
      >
        💬
      </motion.div>
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
