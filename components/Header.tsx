"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="md:fixed md:top-0 md:left-0 md:right-0 z-50 bg-white/95 backdrop-blur-md text-brand-dark shadow-lg border-b border-brand/5">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/img/logo.png" alt="QIWO" width={50} height={50} className="rounded-lg transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand/20 rounded-lg blur-xl group-hover:bg-brand/30 transition-all" />
          </div>
          <span className="font-bold text-lg">QIWO Global Logistic</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#rreth" className="hover:text-brand-light">Rreth Nesh</Link>
          <Link href="#sherbimet" className="hover:text-brand-light">Shërbimet</Link>
          <Link href="#galeria" className="hover:text-brand-light">Galeria</Link>
          <Link href="#blog" className="hover:text-brand-light">Blog</Link>
          <Link href="#kontakt" className="btn btn-primary">Kontakt</Link>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-brand/10 transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl shadow-2xl border-b border-white/20"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="container py-6">
            <div className="flex flex-col gap-1">
              <Link 
                href="#rreth" 
                onClick={() => setOpen(false)} 
                className="px-6 py-4 rounded-xl hover:bg-brand/5 transition-all text-brand-dark font-medium border-b border-brand/5"
              >
                <span className="text-lg">📖</span> Rreth Nesh
              </Link>
              <Link 
                href="#sherbimet" 
                onClick={() => setOpen(false)} 
                className="px-6 py-4 rounded-xl hover:bg-brand/5 transition-all text-brand-dark font-medium border-b border-brand/5"
              >
                <span className="text-lg">🚢</span> Shërbimet
              </Link>
              <Link 
                href="#galeria" 
                onClick={() => setOpen(false)} 
                className="px-6 py-4 rounded-xl hover:bg-brand/5 transition-all text-brand-dark font-medium border-b border-brand/5"
              >
                <span className="text-lg">📸</span> Galeria
              </Link>
              <Link 
                href="#blog" 
                onClick={() => setOpen(false)} 
                className="px-6 py-4 rounded-xl hover:bg-brand/5 transition-all text-brand-dark font-medium border-b border-brand/5"
              >
                <span className="text-lg">📰</span> Blog
              </Link>
              <Link 
                href="#kontakt" 
                onClick={() => setOpen(false)} 
                className="mx-4 mt-4 btn btn-primary text-center py-4 text-lg shadow-xl"
              >
                📞 Kontakt
              </Link>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
