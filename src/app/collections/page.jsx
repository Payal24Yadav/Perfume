'use client';

import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 'designer',
    number: '01',
    category: 'Designer',
    tagline: 'Silver Couture / Airy Projection',
    description: 'Crisp couture signatures with polished projection, clean silver lift, and bright modern elegance. Crafted for the bright morning sun and high-fashion salons.',
    notes: 'Velvet Bergamot / Silver Pepper / White Tea / Modern Vetiver',
    character: 'Radiant, Sharp, Pristine',
    borderClass: 'border-white/20 hover:border-white/60 bg-white/10 hover:bg-white/20',
    tagColor: 'text-white/60',
  },
  {
    id: 'niche',
    number: '02',
    category: 'Niche',
    tagline: 'Golden Alchemy / Complex Character',
    description: 'Rare oils, high contrast textures, and a signature golden trail built for the collector. An intricate formulation that morphs over hours on the skin.',
    notes: 'White Amber / Jasmine Petals / French Iris / Soft Velvet Suede',
    character: 'Enigmatic, Layered, Luxurious',
    borderClass: 'border-gold/20 hover:border-gold/55 bg-gold/[0.02] hover:bg-gold/[0.06]',
    tagColor: 'text-gold',
  },
  {
    id: 'middle-eastern',
    number: '03',
    category: 'Middle Eastern',
    tagline: 'Oud Majesty / Eternal Warmth',
    description: 'Amber, golden oud, and smoked mineral warmth moving with slow cinematic gravity. Rich resinous depths and eternal presence that anchors the room.',
    notes: 'Golden Oud / Mysore Sandalwood / Cashmere Musk / Smoked Olibanum',
    character: 'Majestic, Infinite, Warm',
    borderClass: 'border-white/20 hover:border-white/60 bg-white/10 hover:bg-white/20',
    tagColor: 'text-gold/90',
  },
];

export default function CollectionsPage() {
  const triggerHover = (categoryId) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('fumeluxe-category-hover', { detail: { category: categoryId } })
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Background radial gradient overlay to set up luxury tone */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.02),transparent_60%)] pointer-events-none" />

      <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.95 }}
            className="text-[12px] font-bold uppercase tracking-[0.48em] text-black"
          >
            Curated Olfactory Pillars
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-heading text-6xl font-bold leading-[1.05] tracking-tight text-black sm:text-7xl"
          >
            The Three Chapters.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.25 }}
            className="mt-6 text-base leading-relaxed text-black/60 max-w-xl"
          >
            Hover each capsule to pivot the floating 3D bottle in real-time, aligning the formulation with its structural architectural counterpart.
          </motion.p>
        </div>

        {/* 3D Interactive Columns Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.25, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => triggerHover(item.id)}
              onMouseLeave={() => triggerHover(null)}
              className={`group flex flex-col justify-between border p-8 rounded-lg shadow-luxury backdrop-blur-xl transition duration-750 ease-out hover:-translate-y-2 hover:shadow-luxury-hover ${item.borderClass}`}
            >
              <div>
                {/* Chapter Number Label */}
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-black/40">
                    Chapter {item.number}
                  </span>
                  <span className="font-heading text-5xl font-light text-black/[0.08] group-hover:text-gold/25 transition duration-700">
                    {item.number}
                  </span>
                </div>

                {/* Scent Title */}
                <h2 className="mt-8 font-heading text-4xl font-bold text-black group-hover:text-gold transition duration-500">
                  {item.category}
                </h2>
                <p className={`mt-2 text-[11px] font-bold uppercase tracking-[0.2em] ${item.tagColor}`}>
                  {item.tagline}
                </p>

                {/* Description copy */}
                <p className="mt-6 text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>

                {/* Scent Formulation Specs */}
                <div className="mt-8 space-y-4 border-t border-black/5 pt-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Olfactory Elements</h4>
                    <p className="mt-1 text-[13px] font-semibold text-black/75 tracking-wide leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Expression State</h4>
                    <p className="mt-1 text-[12px] font-bold uppercase text-gold tracking-[0.18em]">
                      {item.character}
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal Luxury Interactive Button */}
              <div className="mt-12">
                <button
                  className="w-full flex h-11 items-center justify-center border border-black/60 bg-transparent text-[11px] font-bold uppercase tracking-[0.28em] text-black transition duration-500 hover:bg-black hover:text-white"
                >
                  Acquire Formulation
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
