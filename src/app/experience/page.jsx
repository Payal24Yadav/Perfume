'use client';

import React from 'react';
import { motion } from 'framer-motion';

const campaignChapters = [
  {
    chapter: 'Chapter I',
    title: 'The Inhalation',
    tagline: 'Suspended air. Glass reflections.',
    copy: 'A weightless capsule containing raw resin, suspended between silver morning dew and golden twilight. Cold lead-free glass captures the early morning Graine de Bergamote, projecting a couture vapor into the light.',
    alignment: 'text-left lg:mr-auto lg:ml-0',
    number: '01',
    theme: 'silver',
    badgeClass: 'border-black/15 bg-black/[0.03] text-black/70',
    accentColor: 'bg-black/30',
  },
  {
    chapter: 'Chapter II',
    title: 'The Alchemy',
    tagline: 'Molecular touch. Meltdown state.',
    copy: 'Warmth triggers the signature formulation. Molecular light sweeps across the hand-finished gold framework. The heart opens: jasmine petals and French Iris merge, morphing to compose a memory profile that remains entirely individual.',
    alignment: 'text-right lg:ml-auto lg:mr-0',
    number: '02',
    theme: 'gold',
    badgeClass: 'border-gold/30 bg-gold/[0.04] text-gold',
    accentColor: 'bg-gold',
  },
  {
    chapter: 'Chapter III',
    title: 'The Memory Still',
    tagline: 'Infinite presence. Eternal trail.',
    copy: 'Aged Cambodian Oud and smoked sandalwood anchor the sillage, ensuring the scent lingers in the room. The camera stands still. The bottle orbits weightlessly, leaving a rich golden mineral imprint that defies the passage of time.',
    alignment: 'text-left lg:mr-auto lg:ml-0',
    number: '03',
    theme: 'dark',
    badgeClass: 'border-black/15 bg-black/[0.04] text-gold/90',
    accentColor: 'bg-gold/80',
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative bg-transparent text-black overflow-hidden selection:bg-gold selection:text-white">
      {/* Light subtle visual glow gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(214,175,55,0.03),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.8),transparent_60%)] pointer-events-none z-0" />

      {/* Campaign Content Stack */}
      <div className="relative z-30">
        {campaignChapters.map((item, index) => (
          <section
            key={item.chapter}
            className="relative flex min-h-screen flex-col justify-center px-6 py-28 md:px-12 lg:px-24 border-b border-black/5 last:border-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_75%)] pointer-events-none" />

            <div className={`mx-auto max-w-6xl w-full flex flex-col justify-center ${item.alignment}`}>
              <div className="inline-block w-full max-w-[620px] border border-black/10 bg-white/34 p-9 md:p-12 rounded-lg shadow-luxury backdrop-blur-xl hover:border-gold/30 transition duration-700">
                
                {/* Chapter metadata tag */}
                <div className="flex items-center gap-4">
                  <span className={`inline-flex h-7 items-center px-4 text-[10px] font-bold uppercase tracking-[0.25em] border rounded-full ${item.badgeClass}`}>
                    {item.chapter}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/45">
                    Campaign Section
                  </span>
                </div>

                {/* Chapter Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.15, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-7 font-heading text-5xl font-bold leading-none text-black sm:text-6xl"
                >
                  {item.title}
                </motion.h2>

                {/* Tagline */}
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                  {item.tagline}
                </p>

                {/* Divider bar */}
                <div className={`mt-7 h-px w-16 ${item.accentColor}`} />

                {/* Description copy */}
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.15, delay: 0.22 }}
                  className="mt-7 text-sm md:text-base leading-relaxed text-black/60 font-body"
                >
                  {item.copy}
                </motion.p>

                {/* Interactive footer for section */}
                <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between">
                  <span className="font-heading text-7xl font-light text-black/[0.035] tracking-tighter">
                    {item.number}
                  </span>
                  <a
                    href="#explore"
                    className="group flex h-11 items-center justify-center border border-black/60 bg-transparent px-6 text-[10px] font-bold uppercase tracking-[0.28em] text-black transition duration-500 hover:border-gold hover:text-gold"
                  >
                    Watch Chapter
                  </a>
                </div>

              </div>
            </div>

            {/* Absolute positioning backdrop element */}
            <div className="absolute bottom-8 left-12 hidden lg:flex items-center gap-4 text-black/35 text-[10px] font-bold uppercase tracking-[0.3em]">
              <span>Paris Salons</span>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span>Dubai Archives</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

