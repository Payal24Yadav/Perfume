'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  ['Home', '/'],
  ['Collections', '/collections'],
  ['Featured', '/featured'],
  ['About Brand', '/about'],
  ['Experience', '/experience'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? 'border-white/10 bg-black/95 shadow-[0_18px_55px_rgba(0,0,0,0.34)] backdrop-blur-xl'
          : 'border-white/10 bg-black/90'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex h-14 -ml-2 w-[200px] items-center sm:w-[235px]"
          aria-label="FUMELUXE home"
        >
          <img
            src="/images/fumeluxe-logo-transparent.png"
            alt="FUMELUXE"
            className="h-auto w-[92%] object-contain opacity-95 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            draggable="false"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map(([label, href]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`relative text-[12px] font-bold uppercase tracking-[0.25em] transition duration-500 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:text-[#d4af37] hover:drop-shadow-[0_0_14px_rgba(212,175,55,0.35)] hover:after:w-full ${
                  isActive 
                    ? 'text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] after:w-full' 
                    : 'text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/collections"
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden border border-white/65 bg-black px-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition duration-500 hover:border-gold hover:text-gold hover:shadow-[0_0_28px_rgba(212,175,55,0.22)] sm:px-7"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative">Explore Scent</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className={`h-0.5 w-6 bg-white transition duration-300 ${mobileMenuOpen ? 'translate-y-2 rotate-45 bg-gold' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition duration-300 ${mobileMenuOpen ? '-translate-y-2 -rotate-45 bg-gold' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navItems.map(([label, href]) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`text-sm font-bold uppercase tracking-[0.3em] transition duration-300 ${
                      isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/collections"
                className="mt-4 flex h-11 items-center justify-center border border-gold text-xs font-bold uppercase tracking-[0.24em] text-gold"
              >
                Explore Scent
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
