"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/gallery1.jpg",
  "/img/gallery2.jpg",
  "/img/gallery3.jpg",
  "/img/gallery4.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isZoomed) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isZoomed]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative">
      {/* Main Gallery Display */}
      <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <div className="absolute inset-0 cursor-pointer" onClick={toggleZoom}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />
            </motion.div>
          </div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Zoom Indicator */}
        {isZoomed && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
            🔍 Zoomed
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex gap-4 justify-center">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
              i === currentIndex
                ? "ring-4 ring-brand scale-110"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
