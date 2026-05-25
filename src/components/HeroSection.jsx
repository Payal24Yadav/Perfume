'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 760], [0, 130]);
  const titleOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const filmY = useTransform(scrollY, [0, 900], [0, -110]);
  const railY = useTransform(scrollY, [0, 900], [0, 150]);

  return (
    <section className="relative z-20 min-h-[118vh] overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.08),rgba(255,255,255,0.9)_46%,#ffffff_78%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
      <FloatingParticles count={42} />

      <motion.div style={{ y: filmY }} className="absolute left-[5vw] top-[18vh] hidden h-[58vh] w-[17vw] max-w-[230px] overflow-hidden rounded-lg border border-black/10 bg-white/20 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.06)] backdrop-blur-md lg:block">
        <img src="/images/fumeluxe_hero.jpg" alt="FUMELUXE side profile" className="h-full w-full object-cover object-left grayscale contrast-125" />
      </motion.div>

      <motion.div style={{ y: railY }} className="absolute right-[5vw] top-[30vh] hidden h-[52vh] w-[16vw] max-w-[210px] overflow-hidden rounded-lg border border-black/10 bg-white/20 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.05)] backdrop-blur-md lg:block">
        <img src="/images/fumeluxe_hero.jpg" alt="FUMELUXE luxury detail" className="h-full w-full object-cover object-right grayscale contrast-125" />
      </motion.div>

      <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between px-6 pb-14 pt-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12px] font-semibold uppercase tracking-[0.48em] text-black/70"
        >
          Est. 2026 / The Sense of Majesty
        </motion.p>

        <div className="pointer-events-none my-auto">
          <motion.h1
            initial={{ opacity: 0, y: 46, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(2.2rem,5.5vw,6rem)] font-bold leading-[0.92] tracking-[0.08em] text-black sm:tracking-[0.12em]"
          >
            FUME LUXE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-2xl text-sm font-medium uppercase leading-loose tracking-[0.28em] text-black/60 sm:text-base"
          >
            A floating cinematic fragrance experience in glass, gold, silver, and light.
          </motion.p>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          href="#categories"
          className="group pointer-events-auto inline-flex h-12 items-center gap-4 border border-black/70 bg-white/40 px-7 text-[11px] font-bold uppercase tracking-[0.32em] text-black backdrop-blur-md transition duration-500 hover:border-black hover:bg-black hover:text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold transition group-hover:bg-white" />
          Enter the Film
        </motion.a>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.36em] text-black/40">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-black/15">
          <motion.span animate={{ y: [-18, 48] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} className="absolute left-0 top-0 h-5 w-px bg-gold" />
        </span>
      </div>
    </section>
  );
}
