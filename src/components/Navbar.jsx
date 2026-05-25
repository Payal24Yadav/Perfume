'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  ['Categories', '#categories'],
  ['Featured', '#featured'],
  ['Our Story', '#story'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? 'border-white/10 bg-black/90 shadow-[0_18px_55px_rgba(0,0,0,0.34)] backdrop-blur-xl'
          : 'border-white/10 bg-black'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="group flex h-14 w-[250px] items-center sm:w-[310px]"
          aria-label="FUMELUXE home"
        >
          <img
            src="/images/fumeluxe-logo-transparent.png"
            alt="FUMELUXE"
            className="h-auto w-full object-contain opacity-95 transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
            draggable="false"
          />
        </motion.a>

        <nav className="hidden items-center gap-9 md:flex lg:gap-12">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative text-[11px] font-bold uppercase tracking-[0.34em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] transition duration-500 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:text-[#d4af37] hover:drop-shadow-[0_0_14px_rgba(212,175,55,0.35)] hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#categories"
          className="group relative inline-flex h-10 items-center justify-center overflow-hidden border border-white/65 bg-black px-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition duration-500 hover:border-gold hover:text-gold hover:shadow-[0_0_28px_rgba(212,175,55,0.22)] sm:px-7"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
          <span className="relative">Explore Scent</span>
        </a>
      </div>
    </motion.header>
  );
}
