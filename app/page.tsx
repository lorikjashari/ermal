"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollProgress from "../components/ScrollProgress";
import Section from "../components/Section";
import AnimatedCounter from "../components/AnimatedCounter";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref as any, offset: ["start start", "end start"] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  
  return (
    <div>
      <ScrollProgress />
      <div ref={ref as any}>
        <section className="relative h-[85vh] md:h-[80vh] min-h-[600px]">
          <video className="absolute inset-0 h-full w-full object-cover" src="/img/background.mp4" autoPlay muted loop playsInline />
          <motion.div style={{ opacity: overlayOpacity }}>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 to-brand-dark" />
          </motion.div>
          <Header />
          <div className="container relative z-10 flex h-full items-center justify-between pb-8 md:pb-0">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Nga Fabrikat e Kinës deri në Biznesin Tuaj
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                  Ne ofrojmë shërbime të plota biznesi për ju në Kinë. Çështjet profesionale ua lini profesionistëve — me depo logjistike 1000m² dhe komunikim të vazhdueshëm me klientët.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="#kontakt" className="btn btn-primary text-base px-8 py-3">Na Kontaktoni Tani</Link>
                  <Link href="#sherbimet" className="btn btn-outline text-white border-2 hover:bg-white hover:text-brand transition-all text-base px-8 py-3">Shihni Shërbimet</Link>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src="/img/logo.png" 
                  alt="QIWO Global Logistic" 
                  className="h-72 lg:h-80 xl:h-96"
                  style={{ filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.6))' }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-8 border-b border-brand/10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              { icon: "✓", text: "Depo 1000m² në Kinë" },
              { icon: "✓", text: "Komunikim 24/7" },
              { icon: "✓", text: "Transport Detar & Ajror" },
              { icon: "✓", text: "Shërbime të Plota Biznesi" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 1 }}
              >
                <div className="flex items-center justify-center gap-2 px-2">
                  <span className="text-xl md:text-2xl text-brand flex-shrink-0">{badge.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">{badge.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section id="sherbimet" eyebrow="Shërbimet" title="Shërbimet Kryesore" className="bg-white text-brand-dark">
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { icon: "🚢", t: "Import & Transport Mallrash", d: "Transport detar, ajror dhe kontejnerë nga Kina në Kosovë. Magazinim në depo prej 1000m² dhe organizim i plotë i ngarkimit." },
            { icon: "✈️", t: "Viza Biznesi & Letra Ftese", d: "Organizim i plotë për vizën tuaj të biznesit — letra ftese, rezervim hoteli, transport aeroport-hotel dhe asistencë në proces." },
            { icon: "💼", t: "Shërbime të Plota në Kinë", d: "Ndërmjetësim me furnitorë, koordinim ngarkimi, komunikim profesional dhe mbështetje gjatë gjithë procesit të importit." },
          ].map((c) => (
            <motion.div key={c.t} whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="rounded-2xl border border-brand/10 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold text-brand">{c.t}</h3>
                <p className="mt-3 text-brand-dark/70 leading-relaxed">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Numrat" title="Në Shifra" className="bg-gradient-to-br from-brand to-brand-dark text-white pattern-grid">
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {[
            { num: 1000, suffix: "m²", label: "Depo në Kinë" },
            { num: 500, suffix: "+", label: "Klientë të Kënaqur" },
            { num: 150, suffix: "+", label: "Kontejnerë të Transportuar" },
            { num: 100, suffix: "%", label: "Garanci Vizash" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-light mb-2">
                <AnimatedCounter to={stat.num} suffix={stat.suffix} duration={2.5} />
              </div>
              <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="rreth" eyebrow="Rreth nesh" title="Pse të Zgjedhni QIWO?" className="bg-brand-dark/20 pattern-dots">
        <div className="mt-10 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Ekipi Ynë</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Besim Sallahu", role: "Owner & Founder", phone: "+383 44 118 665", img: "/img/besimsallahu.jpg" },
              { name: "Ermal Sallahu", role: "CEO", phone: "+383 48 118 665", img: "/img/ermalsallahu.jpg" },
              { name: "David", role: "Senior Vice President (SVP)", phone: "+86 132 5579 0890", img: "/img/david.jpg" },
            ].map((member) => (
              <motion.div key={member.name} whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl">
                  <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-brand-dark">{member.name}</h4>
                    <p className="text-brand mt-1 font-semibold">{member.role}</p>
                    {member.phone && <a href={`tel:${member.phone}`} className="inline-block mt-3 text-brand-light hover:text-brand transition-colors">{member.phone}</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Përparësitë Tona</h3>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            { title: "Komunikim i Vazhdueshëm", desc: "Ju mbajmë të informuar në çdo hap — raporte, foto dhe video nga procesi i ngarkimit dhe transportit." },
            { title: "Depo Profesionale 1000m²", desc: "Magazinim i sigurt në depot tona në Kinë, me mbikëqyrje 24/7 dhe mundësi konsolidimi nga furnitorë të ndryshëm." },
            { title: "Partner i Plotë Biznesi", desc: "Jo vetëm transport — ju ndihmojmë me vizën, rezervimet, ndërmjetësimin me furnitorë dhe të gjithë procesin." },
            { title: "Eksperiencë & Besueshmëri", desc: "Ekip profesional në Kosovë dhe Kinë që ju siguron çdo detaj — çështjet profesionale ua lini profesionistëve." },
          ].map((f) => (
            <motion.div key={f.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <div className="rounded-xl border border-white/10 bg-brand/10 p-6 h-full">
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testime" title="Çfarë thonë klientët tanë" className="bg-gradient-to-br from-brand-dark/30 to-brand/20">
        <div className="mt-10 max-w-4xl mx-auto">
          <Testimonials />
        </div>
      </Section>

      <Section eyebrow="Pyetje" title="Pyetje të Shpeshta" className="bg-white text-brand-dark">
        <div className="mt-10">
          <FAQ />
        </div>
      </Section>

      <section className="section bg-gradient-to-r from-brand via-brand-dark to-brand text-white pattern-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/10" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold">Gati për të Filluar Importin nga Kina?</h2>
              <p className="mt-6 text-xl text-white/90 leading-relaxed">
                Çështjet profesionale ua lini profesionistëve — QIWO ju ofron shërbime të plota, nga viza deri në transportin e fundit.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#kontakt" className="btn bg-white text-brand hover:bg-white/90 text-base px-10 py-4 text-lg font-bold shadow-2xl">
                  Kontaktoni Tani ➜
                </Link>
                <a href="tel:+38348118665" className="btn btn-outline border-white text-white hover:bg-white hover:text-brand text-base px-10 py-4 text-lg">
                  📞 +383 48 118 665
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="kontakt" eyebrow="Kontakti" title="Na Kontaktoni" className="bg-gradient-to-br from-blue-50/50 to-white text-brand-dark">
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <div className="rounded-2xl border border-brand/10 bg-gradient-to-br from-white to-blue-50/30 p-8 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-2xl">🇽🇰</div>
                <h3 className="text-2xl font-bold text-brand">Kosovë</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-brand-dark font-semibold">Besim Sallahu</p>
                  <p className="text-sm text-brand-dark/60">Owner</p>
                  <p className="text-brand-light font-medium mt-1">+383 44 118 665</p>
                </div>
                <div className="pt-2 border-t border-brand/10">
                  <p className="text-brand-dark font-semibold">Ermal Sallahu</p>
                  <p className="text-sm text-brand-dark/60">CEO Kosovë</p>
                  <p className="text-brand-light font-medium mt-1">+383 48 118 665</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <div className="rounded-2xl border border-brand/10 bg-gradient-to-br from-white to-red-50/20 p-8 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-2xl">🇨🇳</div>
                <h3 className="text-2xl font-bold text-brand">Kinë</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-brand-dark font-semibold">Ana</p>
                  <p className="text-sm text-brand-dark/60">CEO China</p>
                  <p className="text-brand-light font-medium mt-1">+86 152 0589 3338</p>
                </div>
                <div className="pt-2 border-t border-brand-red/10">
                  <p className="text-brand-dark font-semibold">Email</p>
                  <p className="text-brand-light font-medium mt-1">supercompani@hotmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="galeria" eyebrow="Galeria" title="Pamje nga puna" desc="Shikoni disa momente nga depoja, ngarkimet dhe bashkëpunimet tona." className="bg-gradient-to-b from-brand-dark/10 to-brand-dark/20">
        <div className="mt-10">
          <Gallery />
        </div>
      </Section>

      <Section id="blog" eyebrow="Blog" title="Videot e Fundit" desc="Shikoni momente nga puna jonë dhe shërbimet që ofrojmë." className="bg-white text-brand-dark">
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F645597724752134%2F&show_text=false&width=267&t=0", title: "Video 1" },
            { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61559773318042%2Fvideos%2F9823749231020035%2F&show_text=false&width=267&t=0", title: "Video 2" },
            { src: "https://www.facebook.com/plugins/video.php?height=494&href=https%3A%2F%2Fwww.facebook.com%2F61559773318042%2Fvideos%2F1276567577113049%2F&show_text=false&width=560&t=0", title: "Video 3" },
            { src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61559773318042%2Fvideos%2F1125898732111359%2F&show_text=false&width=267&t=0", title: "Video 4" },
          ].map((video, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -6 }} 
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-blue-50/30 border border-brand/10">
                <div className="aspect-[9/16] relative">
                  <iframe 
                    src={video.src}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-brand-dark/60">Nga puna jonë</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
