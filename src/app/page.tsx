"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Gem, Hammer, Home, ShieldCheck, Sparkles, Star, Ruler, PhoneCall, MessageCircle } from "lucide-react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import ImageCarousel from "@/components/ImageCarousel";


export default function LuxuryRemodelingFunnel() {
  const { t, language } = useLanguageContext();
  const WHATSAPP_URL = `https://wa.me/573006674009?text=${t.hero.whatsappText}`;

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="min-h-screen bg-[#090806] text-[#f7efe3] selection:bg-[#c6a15b] selection:text-black">
      <a 
        href="https://www.instagram.com/luxuryhousecolombia_/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden fixed top-6 right-6 z-40 md:top-8 md:right-8 rounded-full overflow-hidden shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#c6a15b]/20 group md:block"
      >
        <Image 
          src="/assets/imgs/logo.png" 
          alt="Luxury Remodeling Logo" 
          width={150} 
          height={150} 
          className="object-contain transition-transform duration-300 group-hover:rotate-6"
        />
      </a>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,161,91,0.28),transparent_38%),linear-gradient(120deg,rgba(0,0,0,.2),rgba(0,0,0,.86))]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(90deg,rgba(9,8,6,.4),rgba(9,8,6,.24)),url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center px-6 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c6a15b]/30 bg-white/5 px-4 py-2 text-sm text-[#dfc894] backdrop-blur">
              <Sparkles size={16} /> {t.hero.badge}
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-[-0.05em] text-balance md:text-6xl lg:text-7xl">
              {t.hero.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-[#d8cdbd] md:text-xl">
              {t.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={WHATSAPP_URL} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a15b] px-7 py-4 font-semibold text-black shadow-2xl shadow-[#c6a15b]/20 transition hover:scale-[1.02] hover:bg-[#e1c176]">
                {t.hero.ctaPrimary} <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </a>
              <a href="#portafolio" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white/90 backdrop-blur transition hover:border-[#c6a15b]/70 hover:bg-white/5">
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

      <section id="portafolio" className="bg-[#e8dfd2] px-6 py-24 text-[#16120c] lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#8d6b2f]">{t.portfolio.badge}</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.portfolio.title}</h2>
            </div>
            <p className="max-w-sm text-lg leading-8 text-black/60">{t.portfolio.description}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <ImageCarousel 
              images={t.portfolio.carousel} 
              className="lg:col-span-2"
            />
            <div className="grid gap-6">
              <div className="min-h-[247px] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center p-6 shadow-2xl" />
              <div className="min-h-[247px] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center p-6 shadow-2xl" />
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
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#c6a15b]/20 flex items-center justify-center mb-4">
                  <span className="text-4xl text-[#c6a15b]">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                <p className="text-black text-sm">{member.role}</p>
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
          <a href={WHATSAPP_URL} className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a15b] px-8 py-5 text-lg font-semibold text-black shadow-2xl shadow-[#c6a15b]/20 transition hover:scale-[1.02] hover:bg-[#e1c176]">
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
      >
        <Image src="/assets/imgs/wp.png" alt="WhatsApp" width={30} height={30} className="md:w-12 md:h-12" />
        <p className="font-bold">{t.whatsapp}</p>
      </a>
    </main>
  );
}
