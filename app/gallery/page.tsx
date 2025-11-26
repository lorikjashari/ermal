"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const images = [
  { src: "/img/depo.jpg", alt: "Depo 1000m²" },
  { src: "/img/ngarkim1.jpg", alt: "Ngarkimi i kontejnerëve" },
  { src: "/img/treg1.jpg", alt: "Tregjet në Kinë" },
  { src: "/img/kliente.jpg", alt: "Klientët gjatë blerjeve" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Galeria</h1>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <button key={img.src} onClick={() => setLightbox(img.src)} className="card overflow-hidden">
                {/* Placeholder; replace with real images in public/img */}
                <img src={img.src} alt={img.alt} className="h-40 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" className="max-h-[80vh] max-w-[90vw] rounded" />
        </div>
      )}
      <Footer />
    </main>
  );
}
