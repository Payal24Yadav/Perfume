'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const signatureFormula = [
  {
    phase: 'Top Note',
    title: 'Velvet Bergamot',
    origin: 'Calabria, Italy',
    extraction: 'Cold pressed organic rind extraction. Light, sharp, silver-faceted air projection.',
    desc: 'Brings an immediate couture brightness that acts like the silver trim on our bottle, sharp and modern.',
  },
  {
    phase: 'Heart Note',
    title: 'French Iris',
    origin: 'Grasse, France',
    extraction: 'Steam distilled root extraction. Heavy velvet, floral powdery contrast, mineral light reflections.',
    desc: 'Acts as the glass chamber of the formulation. Extremely high value, bridging cold silver top elements with warm gold bottoms.',
  },
  {
    phase: 'Base Note',
    title: 'Golden Oud',
    origin: 'Cambodian Rainforest',
    extraction: 'Aged resinous heartwood extraction. Deep golden warmth, smoky mineral trail, infinite presence.',
    desc: 'The soul of the formulation. Rich, heavy, moving with slow cinematic gravity, anchoring the fragrance to the skin.',
  },
];

export default function FeaturedPage() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(214,175,55,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Content Layout Split */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 items-center">
          
          {/* Left Column: Signature notes breakdown */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.95 }}
              className="text-[12px] font-bold uppercase tracking-[0.48em] text-black"
            >
              Olfactory Formulation
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-heading text-6xl font-bold leading-tight text-black sm:text-7xl"
            >
              Molecular breakdown.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.25 }}
              className="mt-6 text-base leading-relaxed text-black/60 max-w-lg"
            >
              Click each key note phase to dissect the physical extraction origins and molecular behavior on the skin.
            </motion.p>

            {/* Note Selector Tabs */}
            <div className="mt-12 space-y-4">
              {signatureFormula.map((item, index) => {
                const isActive = activePhase === index;
                return (
                  <button
                    key={item.phase}
                    onClick={() => setActivePhase(index)}
                    className={`w-full text-left border p-5 transition duration-500 flex flex-col justify-between backdrop-blur-md ${
                      isActive
                        ? 'border-gold bg-gold/[0.04] shadow-[0_12px_36px_rgba(214,175,55,0.06)]'
                        : 'border-black/10 bg-white/20 hover:border-black/30 hover:bg-white/40'
                    }`}
                  >
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                        {item.phase}
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${isActive ? 'text-gold' : 'text-black/50'}`}>
                        Phase 0{index + 1}
                      </span>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between w-full">
                      <span className={`font-heading text-3xl font-bold transition duration-300 ${isActive ? 'text-black font-semibold' : 'text-black/75'}`}>
                        {item.title}
                      </span>
                      <span className="text-xs font-semibold text-black/40 italic">
                        {item.origin}
                      </span>
                    </div>

                    {/* Explanatory Dropdown Drawer */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden mt-4 pt-4 border-t border-black/5"
                        >
                          <p className="text-sm font-semibold uppercase text-gold tracking-widest">{item.origin} Extraction</p>
                          <p className="mt-2 text-sm leading-relaxed text-black/60">{item.extraction}</p>
                          <p className="mt-4 text-[13px] leading-relaxed text-black/55 border-l-2 border-black/15 pl-4">{item.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Physical Specs Card (Desktop spacing layout) */}
          <div className="lg:col-span-6 order-1 lg:order-2 min-h-[50vh] lg:min-h-0 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.3, delay: 0.2 }}
              className="w-full max-w-[380px] border border-white/35 bg-white/20 p-8 rounded-lg shadow-luxury backdrop-blur-xl"
            >
              <h3 className="font-heading text-3xl font-bold text-black border-b border-black/10 pb-5">
                Technical Specifications
              </h3>
              
              <div className="mt-6 space-y-6 text-sm">
                {[
                  ['Concentration', 'Extrait de Parfum (24% Perfume Oil)'],
                  ['Longevity', '14+ Hours on Skin / 48+ Hours on Fabric'],
                  ['Projection', 'Atmospheric cinematic envelope (2 Meters)'],
                  ['Sillage', 'Majestic gold trailing presence'],
                  ['Volume', '100ml / 3.4 FL. OZ.'],
                  ['Materials', 'Lead-free optical white glass, custom gold anodized trim, silver alloy atomizer'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start gap-4 py-2 border-b border-black/5">
                    <span className="font-bold text-black/40 uppercase tracking-widest text-[11px] w-1/3 pt-0.5">{label}</span>
                    <span className="font-semibold text-black/75 text-right w-2/3 leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
