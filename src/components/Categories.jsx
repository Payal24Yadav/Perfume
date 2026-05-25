'use client';

import React from 'react';
import { motion } from 'framer-motion';

const chapters = [
  ['01', 'Designer', 'Crisp couture signatures with polished projection and clean silver lift.'],
  ['02', 'Niche', 'Rare oils, high contrast textures, and a golden trail built for collectors.'],
  ['03', 'Middle Eastern', 'Amber, oud, and mineral warmth moving with slow cinematic gravity.'],
];

export default function Categories() {
  return (
    <section id="categories" className="relative z-20 min-h-screen overflow-hidden border-t border-black/5 bg-transparent py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 0.6, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-[10px] font-bold uppercase tracking-[0.48em] text-black">
            Curated Atmospheres
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.25, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="mt-5 font-heading text-5xl font-bold leading-[1.02] text-black sm:text-6xl">
            Three scenes. One suspended bottle.
          </motion.h2>
          <div className="mt-8 h-px w-16 bg-gold" />
        </div>

        <div className="lg:col-span-7 lg:pt-24">
          <div className="space-y-6">
            {chapters.map(([number, title, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 80, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 1.1, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden border border-black/10 bg-white/30 p-7 shadow-[0_26px_70px_rgba(0,0,0,0.035)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/50"
              >
                <span className="absolute right-7 top-5 font-heading text-7xl text-black/[0.035] transition group-hover:text-gold/15">{number}</span>
                <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-gold">Chapter {number}</p>
                <h3 className="mt-5 font-heading text-3xl font-semibold text-black">{title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
