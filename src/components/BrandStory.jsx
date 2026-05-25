'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section id="story" className="relative z-20 min-h-screen overflow-hidden border-t border-black/5 bg-transparent py-36">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/[0.035] to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 0.6, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-[10px] font-bold uppercase tracking-[0.48em] text-black">
            The Heritage of Purity
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 38, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.25, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="mt-5 font-heading text-5xl font-bold leading-[1.06] text-black sm:text-6xl">
            A couture film for scent, light, and memory.
          </motion.h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.15, delay: 0.3 }} className="mt-10 max-w-2xl space-y-6 text-sm leading-8 text-black/62">
            <p>
              FUMELUXE blends Parisian precision with Middle Eastern depth. The website follows that same rhythm: controlled, weightless, reflective, and intentionally cinematic.
            </p>
            <p>
              The product remains the protagonist as every chapter changes the camera, light angle, and depth field around it.
            </p>
            <p className="border-l-2 border-gold bg-white/20 py-2 pl-6 font-heading text-xl italic leading-8 text-black backdrop-blur-sm">
              We do not create fragrances to be smelled; we craft them to be remembered.
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto aspect-[4/5] w-full max-w-[380px] border border-black/10 bg-white/20 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.055)] backdrop-blur-xl lg:col-span-5">
          <img src="/images/fumeluxe_hero.jpg" alt="FUMELUXE campaign still" className="h-full w-full object-cover grayscale contrast-125" />
          <div className="absolute inset-3 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
          <div className="absolute bottom-8 left-8 right-8 border border-white/35 bg-white/30 p-5 text-center backdrop-blur-lg">
            <span className="block font-heading text-sm font-bold tracking-[0.28em] text-black">PARIS / DUBAI</span>
            <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.32em] text-gold">The Sense of Majesty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
