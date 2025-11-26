"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100]">
      <motion.div
        style={{ 
          scaleX: scrollYProgress,
          height: '100%',
          width: '100%',
          transformOrigin: 'left',
          background: 'linear-gradient(to right, #1F6FE5, #D6332E, #1F6FE5)'
        }}
      />
    </div>
  );
}
