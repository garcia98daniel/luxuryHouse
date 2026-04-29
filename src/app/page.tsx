"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Gem, Hammer, Home, ShieldCheck, Sparkles, Star, Ruler, PhoneCall, MessageCircle } from "lucide-react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import ImageCarousel from "@/components/ImageCarousel";
import { trackMetaPixelEvent } from "@/lib/metaPixel";


export default function LuxuryRemodelingFunnel() {
  const { t, language } = useLanguageContext();
  const WHATSAPP_URL = `https://wa.me/573233534319?text=${t.hero.whatsappText}`;
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [videoClicked, setVideoClicked] = React.useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="min-h-screen bg-[#090806] text-[#f7efe3] selection:bg-[#c6a15b] selection:text-black">
      <h1 className="sr-only">
        Remodelación de lujo en Santa Marta, Barranquilla y Valledupar
      </h1>
      <div className="fixed top-4 right-4 z-40 md:top-6 md:right-6">
        <div 
          className="relative group cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => window.open('https://www.instagram.com/luxuryhousecolombia_/', '_blank', 'noopener,noreferrer')}
        >
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <p className="text-[#c6a15b] text-xs font-medium flex items-center gap-1 bg-black/80 px-2 py-1 rounded-full md:text-sm md:px-3">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
              <span className="hidden md:inline">@luxuryhousecolombia_</span>
              <span className="md:hidden">IG</span>
            </p>
          </div>
          <div className="rounded-full overflow-hidden shadow-lg md:shadow-xl group-hover:shadow-2xl group-hover:shadow-[#c6a15b]/20 transition-all duration-300">
            <Image 
              src="/assets/imgs/logo.png" 
              alt="Luxury Remodeling Logo" 
              width={100} 
              height={100} 
              className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] object-contain transition-transform duration-300 group-hover:rotate-6"
            />
          </div>
        </div>
      </div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,161,91,0.28),transparent_38%),linear-gradient(120deg,rgba(0,0,0,.2),rgba(0,0,0,.86))]" />
        <div className="absolute right-0 top-0 h-full w-1/2">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/assets/video/videoHero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center px-6 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c6a15b]/30 bg-white/5 px-4 py-2 text-sm text-[#dfc894] backdrop-blur">
              <Sparkles size={16} /> {t.hero.badge}
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-[-0.05em] text-balance md:text-6xl lg:text-7xl">
              {t.hero.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 pr-12 max-w-2xl text-lg leading-8 text-[#d8cdbd] md:text-xl">
              {t.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a 
                href={WHATSAPP_URL} 
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a15b] px-7 py-4 font-semibold text-black shadow-2xl shadow-[#c6a15b]/20 transition hover:scale-[1.02] hover:bg-[#e1c176]"
                onClick={() => {
                  trackMetaPixelEvent('Lead', {
                    content_name: 'Hero WhatsApp CTA',
                    source: 'landing_luxury_house',
                    position: 'hero_section'
                  });
                }}
              >
                {t.hero.ctaPrimary} <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </a>
              <a 
                href="#portafolio" 
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white/90 backdrop-blur transition hover:border-[#c6a15b]/70 hover:bg-white/5"
                onClick={() => {
                  trackMetaPixelEvent('ViewContent', {
                    content_name: 'Portfolio CTA',
                    source: 'landing_luxury_house',
                    position: 'hero_section'
                  });
                }}
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 grid gap-0 sm:grid-cols-3">
              {t.stats.map(([num, label]) => (
                <div key={num} className="border-l border-[#c6a15b]/40 pl-2">
                  <p className="text-3xl font-semibold text-[#dfc894]">{num}</p>
                  <p className="mt-1 text-sm leading-5 text-white/60">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#c6a15b] px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm uppercase tracking-[0.25em] text-black/45 font-semibold">
          {t.categories.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c6a15b]">{t.services.title}</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.services.subtitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {t.services.items.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#c6a15b]/40">
                <CheckCircle2 className="mb-5 text-[#c6a15b]" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8dfd2] px-6 py-24 text-[#16120c] lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div  id="portafolio">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8d6b2f]">{t.portfolio.badge}</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.portfolio.title}</h2>
            </div>
            <p className="max-w-sm text-lg leading-8 text-black/80">{t.portfolio.description}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <ImageCarousel 
              images={t.portfolio.carousel} 
              className="lg:col-span-2"
            />
            <div className="grid gap-6">
              <div className="min-h-[247px] rounded-[2rem] bg-[url('/assets/imgs/workers.jpeg')] bg-cover bg-center p-6 shadow-2xl" />
              <div 
                className="group relative min-h-[247px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => {
                  setShowVideoModal(true);
                  setVideoClicked(true);
                  trackMetaPixelEvent('ViewVideo', {
                    content_name: 'Portfolio Video',
                    source: 'landing_luxury_house',
                    position: 'portfolio_section'
                  });
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[247px] w-full object-cover"
                >
                  <source src="/assets/video/netflix.mp4" type="video/mp4" />
                </video>
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex items-center justify-center ${
                  videoClicked 
                    ? 'opacity-0' 
                    : 'opacity-100 group-hover:opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <div className="mb-2">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{language === 'es' ? 'Ver en pantalla completa' : 'View full screen'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {t.steps.map((step, index) => (
            <div key={step.title} className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
              <span className="text-6xl font-semibold text-[#c6a15b]/25">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{step.text}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a 
            href={WHATSAPP_URL} 
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a15b] px-8 py-5 text-lg font-semibold text-black shadow-2xl shadow-[#c6a15b]/20 transition hover:scale-[1.02] hover:bg-[#e1c176]"
            onClick={() => {
              trackMetaPixelEvent('Lead', {
                content_name: 'Steps WhatsApp CTA',
                source: 'landing_luxury_house',
                position: 'steps_section'
              });
            }}
          >
            {t.stepsCTA.button} <ArrowRight className="transition group-hover:translate-x-1" size={19} />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-[#c6a15b]/20 bg-[#15120d] lg:grid-cols-[.85fr_1.15fr]">
          <div className="min-h-[440px] bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="p-8 md:p-14">
            <Gem className="text-[#c6a15b]" size={42} />
            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.quality.title}</h2>
            <div className="mt-8 grid gap-5 text-white/70">
              {t.quality.features.map((feature, index) => (
                <p key={index} className="flex gap-3">
                  {index === 0 && <ShieldCheck className="shrink-0 text-[#c6a15b]" />}
                  {index === 1 && <Ruler className="shrink-0 text-[#c6a15b]" />}
                  {index === 2 && <Hammer className="shrink-0 text-[#c6a15b]" />}
                  {index === 3 && <Home className="shrink-0 text-[#c6a15b]" />}
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8dfd2] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl text-black mb-16">{t.team.title}</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {t.team.members.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => {
                  window.open(`https://www.instagram.com/${member.instagram}`, '_blank', 'noopener,noreferrer');
                  trackMetaPixelEvent('Engagement', {
                    content_name: `Team Member: ${member.name}`,
                    source: 'landing_luxury_house',
                    position: 'team_section',
                    instagram_handle: member.instagram
                  });
                }}
              >
                <div className="w-50 h-70 rounded-full bg-[#c6a15b]/20 flex items-center justify-center mb-4 overflow-hidden">
                  <Image 
                    src={`/assets/imgs/${member.image}`} 
                    alt={member.name} 
                    width={188} 
                    height={188} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-0">{member.name}</h3>
                <b className="text-[12px] font-semibold text-black mt-[-5px]">{member.profession}</b>
                <p className="text-black text-sm">{member.role}</p>
                
                {/* Instagram handle - appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <p className="text-[#c6a15b] text-sm font-medium flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                    @{member.instagram}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,161,91,.22),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c6a15b]">{t.cta.badge}</p>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">{t.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">{t.cta.description}</p>
          <a 
            href={WHATSAPP_URL} 
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a15b] px-8 py-5 text-lg font-semibold text-black shadow-2xl shadow-[#c6a15b]/20 transition hover:scale-[1.02] hover:bg-[#e1c176]"
            onClick={() => {
              trackMetaPixelEvent('Lead', {
                content_name: 'Final CTA WhatsApp',
                source: 'landing_luxury_house',
                position: 'final_cta_section'
              });
            }}
          >
            <PhoneCall size={20} /> {t.cta.button}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/45">
        <p>{t.footer}</p>
      </footer>
      
      {/* Botón flotante de WhatsApp */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 fixed bottom-6 right-6 z-50 flex h-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110 md:bottom-8 md:right-8 md:h-16"
        aria-label="Contactar por WhatsApp"
        onClick={() => {
          trackMetaPixelEvent('Lead', {
            content_name: 'Floating WhatsApp Button',
            source: 'landing_luxury_house',
            position: 'floating_button'
          });
        }}
      >
        <Image src="/assets/imgs/wp.png" alt="WhatsApp" width={30} height={30} className="md:w-12 md:h-12" />
        <p className="font-bold">{t.whatsapp}</p>
      </a>
      
      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            >
              <source src="/assets/video/netflix.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </main>
  );
}
