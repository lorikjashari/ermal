"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Sa kohë merr transporti nga Kina në Kosovë?",
    a: "Transporti detar merr rreth 35-45 ditë, ndërsa transporti ajror 5-7 ditë. QIWO ju ofron të dyja opsionet sipas nevojave dhe buxhetit tuaj. Ju mbajmë të informuar në çdo hap të procesit.",
  },
  {
    q: "Si funksionon shpërbimi i depozimit në Kinë?",
    a: "Depoja jonë profesionale 1000m² në Kinë ju lejon të konsolidoni mallrat nga furnitorë të ndryshëm para dërgimit. Kjo ul kostot e transportit. Depoja është e mbikëqyrur 24/7 dhe ju dërgojmë foto/video nga çdo proces.",
  },
  {
    q: "A më ndihmoni të gjej furnitorë në Kinë?",
    a: "Po! QIWO ofron shërbime të plota ndërmjetësimi me furnitorë, koordinim porosi, negocim çmimi dhe kontroll cilësie. Ekipi ynë në Kinë ju shoqëron në tregje dhe ju ndihmon në çdo hap.",
  },
  {
    q: "Si organizohet viza e biznesit për Kinë?",
    a: "QIWO organizon gjithcka: letra ftese zyrtare, rezervim hoteli, transport nga aeroporti dhe asistencë në plotesimin e dokumenteve. Jemi partner i besuar dhe ju mbëshesim gjatë gjithë procesit të vizës.",
  },
  {
    q: "A ka kosto të fshehura?",
    a: "Absolutisht jo. QIWO punon me transparencë të plotë. Të gjitha kostot ju komunikohen paraprakisht dhe nuk ka surpriza. 'Cështjet profesionale ua lini profesionistëve' — ky është premtimi ynë.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="rounded-2xl border border-brand/10 bg-white overflow-hidden shadow-lg">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full p-6 text-left flex items-center justify-between group"
          >
            <span className="font-semibold text-brand text-lg group-hover:text-brand-light transition-colors">
              {faq.q}
            </span>
            <motion.span animate={{ rotate: open === i ? 180 : 0 }}>
              <span className="text-2xl text-brand-light">↓</span>
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden">
                <p className="px-6 pb-6 text-brand-dark/70 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
