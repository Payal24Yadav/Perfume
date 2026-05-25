'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const notes = [
  ['Top', 'Velvet Bergamot / Silver Pepper / White Tea'],
  ['Heart', 'White Amber / Jasmine Petals / Iris'],
  ['Base', 'Golden Oud / Sandalwood / Cashmere Musk'],
];

export default function FeaturedShowcase() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.25, 0.7], [80, -80]);

  return (
    <section id="featured" className="relative z-20 min-h-[115vh] overflow-hidden bg-transparent py-36">
      <motion.div style={{ y }} className="pointer-events-none absolute left-1/2 top-28 h-[68vh] w-[1px] bg-gradient-to-b from-transparent via-gold/45 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        <div className="min-h-[62vh] lg:col-span-6" />

        <div className="relative z-30 lg:col-span-6">
          <motion.p initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 0.62, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-[12px] font-bold uppercase tracking-[0.48em] text-black">
            Olfactory Masterpiece
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="mt-5 font-heading text-6xl font-bold leading-tight text-black sm:text-7.5xl">
            Reflections reveal the formula.
          </motion.h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-black/60">
            As the bottle rotates through the scroll, the composition opens like a product film: bright silver air, warm gold depth, and a soft black trail that keeps the frame grounded.
          </p>

          <div className="mt-12 space-y-4">
            {notes.map(([phase, ingredients], index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.14 }}
                className="border-b border-black/10 bg-white/35 px-1 py-5 backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-3xl font-semibold text-black">{phase}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Phase 0{index + 1}</span>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase leading-6 tracking-[0.16em] text-black/65">{ingredients}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
