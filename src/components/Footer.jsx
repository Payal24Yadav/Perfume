'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 w-full overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111111] via-[#050505] to-black pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <span className="font-heading text-3xl tracking-[0.25em] text-white font-semibold">
              FUMELUXE
            </span>
            <p className="text-xs font-body text-white/50 tracking-wider leading-relaxed max-w-sm">
              An immersive olfactory journey bringing designer, niche, and Middle Eastern premium raw ingredients to the world.
            </p>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-body text-white/50">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Top of Page</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors duration-300">Pillars of Scent</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white transition-colors duration-300">The Formulation</a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors duration-300">The Heritage</a>
              </li>
            </ul>
          </div>

          {/* Socials / Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">
              Follow Us
            </h4>
            <ul className="space-y-2 text-xs font-body text-white/50">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Vogue Feature</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Editorial Press</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] tracking-[0.2em] text-white/40 uppercase font-semibold font-body">
          <span>
            (C) {new Date().getFullYear()} FUMELUXE. All Rights Reserved.
          </span>
          <span className="mt-4 sm:mt-0 flex items-center space-x-2">
            <span>Dubai</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Paris</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>New York</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
