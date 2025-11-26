"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-3">QIWO Global Logistic</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Shërbime të plota biznesi për importin nga Kina. Depo 1000m², transport profesional dhe komunikim i vazhdueshëm.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-3">Kontakt të Shpejtë</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white/70">📞 Kosovë: <a href="tel:+38348118665" className="text-brand-light hover:underline">+383 48 118 665</a></p>
              <p className="text-white/70">📞 Kosovë: <a href="tel:+38344118665" className="text-brand-light hover:underline">+383 44 118 665</a></p>
              <p className="text-white/70">📞 Kinë: <a href="tel:+8615205893338" className="text-brand-light hover:underline">+86 152 0589 3338</a></p>
              <p className="text-white/70">✉️ <a href="mailto:supercompani@hotmail.com" className="text-brand-light hover:underline">supercompani@hotmail.com</a></p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-3">Navigim</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#sherbimet" className="text-white/70 hover:text-white transition-colors">Shërbimet</a>
              <a href="#rreth" className="text-white/70 hover:text-white transition-colors">Rreth Nesh</a>
              <a href="#galeria" className="text-white/70 hover:text-white transition-colors">Galeria</a>
              <a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a>
              <a href="#kontakt" className="text-white/70 hover:text-white transition-colors">Kontakt</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/img/logo.png" 
              alt="QIWO Global Logistic" 
              className="h-32 md:h-36"
              style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))' }}
            />
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} QIWO Global Logistic. Të gjitha të drejtat të rezervuara.</p>
          <p className="text-white/40">Çështjet profesionale ua lini profesionistëve.</p>
        </div>
      </div>
    </footer>
  );
}
