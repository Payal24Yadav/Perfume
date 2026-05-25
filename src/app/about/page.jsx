'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Cinematic subtle light glow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(214,175,55,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />

      <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section 1: Editorial Introduction / Hero Reveal */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.95 }}
              className="text-[12px] font-bold uppercase tracking-[0.48em] text-black"
            >
              The Sense of Majesty
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-heading text-6xl font-bold leading-[1.04] text-black sm:text-7xl max-w-2xl"
            >
              Parisian precision. Middle Eastern depth.
            </motion.h1>
            
            <div className="mt-8 h-px w-20 bg-gold animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35 }}
              className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-black/60"
            >
              <p>
                Founded in 2026, FUMELUXE was conceived as a collision of two worlds: the sharp, architectural precision of Parisian couture fashion and the slow, warm, eternal alchemy of Middle Eastern mineral oils.
              </p>
              <p>
                We reject the high-speed noise of modern cosmetics. We believe perfume is an architectural form: suspended in glass, triggered by heat, and sculpted in memory.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Immersive floating visual campaign still card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[340px] border border-black/10 bg-white/20 p-2.5 shadow-[0_32px_90px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            >
              <img
                src="/images/fumeluxe_hero.jpg"
                alt="FUMELUXE Paris Salons"
                className="h-full w-full object-cover grayscale contrast-125 rounded"
              />
              <div className="absolute inset-2.5 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
              <div className="absolute bottom-6 left-6 right-6 border border-white/25 bg-white/30 p-4 text-center backdrop-blur-lg">
                <span className="block font-heading text-sm font-bold tracking-[0.24em] text-black">THE HERITAGE</span>
                <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Paris / Dubai</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Narrative Reveal Grid */}
        <div className="mt-36 grid grid-cols-1 gap-14 lg:grid-cols-12 border-t border-black/10 pt-20">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="font-heading text-4xl font-semibold text-black leading-tight"
            >
              Suspended in glass. Driven by memory.
            </motion.h2>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] font-semibold text-gold">
              Olfactory Philosophy
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base leading-relaxed text-black/60">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Our bottles are physical monuments. Weighted base glass, hand-molded gold and silver metals, and optical clarity that creates premium sweeps of light across the bottle face. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="border-l-2 border-gold bg-black/[0.02] py-4 pl-6 font-heading text-xl italic leading-relaxed text-black/85"
            >
              "We do not design scents to fill rooms; we forge formulations that linger in the mind years after you have departed."
            </motion.p>
          </div>
        </div>

        {/* Section 3: Pillars of Formulation Table */}
        <div className="mt-36 border-t border-black/10 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold uppercase tracking-[0.48em] text-black"
          >
            The Structural Grid
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-heading text-5xl font-semibold text-black"
          >
            Couture Parameters
          </motion.h3>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Craftsmanship', 'Bottles are individual works of sculpture. Hand-finished gold and silver trims assembled by master couturiers in Paris.', '01'],
              ['Sourcing', 'Rare elements gathered ethically: Moroccan rose, Indian Jasmine, and aged organic Oud oil from deep within Cambodian forests.', '02'],
              ['Complexity', 'Multi-phase scent expansion. Top note projection yields to rich amber hearts, closing in deep cashmere and mineral musk.', '03'],
              ['Exclusivity', 'Small batch formulation. Each vintage contains unique atmospheric adjustments depending on the season\'s rainfall.', '04'],
            ].map(([title, desc, num], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className="group border border-black/10 bg-white/20 p-6 rounded shadow-[0_12px_36px_rgba(0,0,0,0.02)] backdrop-blur-md hover:border-gold/50 transition duration-500"
              >
                <div className="flex justify-between items-center pb-4 border-b border-black/5">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-gold uppercase">Pillar {num}</span>
                  <span className="font-heading text-3xl font-light text-black/15 group-hover:text-gold/30 transition duration-500">{num}</span>
                </div>
                <h4 className="mt-5 font-heading text-2xl font-bold text-black group-hover:text-gold transition duration-300">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-black/55">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
