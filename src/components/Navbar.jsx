'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/45 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center space-x-2 group">
          <span className="font-heading text-2xl tracking-[0.25em] text-black font-semibold transition-all duration-300 group-hover:text-gold">
            FUMELUXE
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-12">
          <a href="#categories" className="text-xs uppercase tracking-[0.2em] font-medium text-black/70 hover:text-gold transition-colors duration-300">
            Categories
          </a>
          <a href="#featured" className="text-xs uppercase tracking-[0.2em] font-medium text-black/70 hover:text-gold transition-colors duration-300">
            Featured
          </a>
          <a href="#story" className="text-xs uppercase tracking-[0.2em] font-medium text-black/70 hover:text-gold transition-colors duration-300">
            Our Story
          </a>
        </nav>

        <div>
          <a
            href="#categories"
            className="text-xs uppercase tracking-[0.18em] font-semibold border-b border-black/80 pb-1 text-black hover:text-gold hover:border-gold transition-all duration-300"
          >
            Explore Scent
          </a>
        </div>
      </div>
    </motion.header>
  );
}
