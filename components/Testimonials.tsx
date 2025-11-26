"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ardian Krasniqi",
    business: "Pajisje Elektronike - Prishtinë",
    text: "QIWO na ndihmoi të importojmë pajisje elektronike nga Kina me një proces shumë të thjeshtë. Depoja e tyre 1000m² në Kinë na dha siguri të plotë dhe komunikimi ishte perfekt gjatë gjithë kohës.",
    rating: 5,
  },
  {
    name: "Blerta Shala",
    business: "Tregtare Tekstili - Prizren",
    text: "Shërbimi i vizës ishte i shkellëqyer! QIWO organizoi gjithcka — letra ftese, hoteli, transporti. Vizita në Kinë ishte shumë produktive dhe furnitorët që më lidhjen janë të besueshem.",
    rating: 5,
  },
  {
    name: "Faton Berisha",
    business: "Materiale Ndërtimi - Gjakova",
    text: "Transporti detar ishte ekonomik dhe profesional. Raportet me foto/video nga ngarkimi në Kinë na bënë të ndihemi të sigurt. Ekipi i QIWO është partner i vërtetë biznesi!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex flex-col justify-center">
          <div className="flex gap-1 mb-4 justify-center">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-lg italic text-white/90 mb-4 text-center">
            "{testimonials[current].text}"
          </p>
          <p className="text-brand-light font-semibold text-center">{testimonials[current].name}</p>
          <p className="text-white/60 text-sm text-center">{testimonials[current].business}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-brand-light w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
