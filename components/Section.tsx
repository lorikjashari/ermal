import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, desc, className = "", children }: {
  id?: string;
  eyebrow?: string;
  title?: string;
  desc?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(eyebrow || title) && (
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              {eyebrow && <p className="text-sm tracking-widest uppercase text-brand-light/90 font-semibold">{eyebrow}</p>}
              {title && <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>}
              {desc && <p className="mt-4 text-lg text-white/70 leading-relaxed">{desc}</p>}
            </motion.div>
          </div>
        )}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}