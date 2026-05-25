'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Background soft ambient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(214,175,55,0.02),transparent_50%)] pointer-events-none" />

      <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 items-start">
          
          {/* Left Column: Salon Coordinates */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.95 }}
              className="text-[12px] font-bold uppercase tracking-[0.48em] text-black"
            >
              Worldwide Salons
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-heading text-6xl font-bold leading-[1.05] tracking-tight text-black sm:text-7xl"
            >
              Reach out.
            </motion.h1>
            <div className="mt-8 h-px w-16 bg-gold" />
            
            <p className="mt-7 text-sm font-semibold leading-relaxed text-black/55 max-w-sm uppercase tracking-wider">
              By appointment only. We welcome editorial reviews, premium fashion collaborations, and boutique inquiries.
            </p>

            {/* Salon Locations */}
            <div className="mt-14 space-y-8">
              {[
                ['Paris Salons', '12 Rue de la Couture, 8th Arrondissement', 'paris@fumeluxe.com', '+33 1 40 20 50 12'],
                ['Dubai Arch', 'The Penthouse Arch, Marina Luxury District', 'dubai@fumeluxe.com', '+971 4 420 5000'],
                ['New York Room', 'The Light Chamber, Tribeca Triborough', 'nyc@fumeluxe.com', '+1 212 966 3000'],
              ].map(([city, street, email, phone]) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="border-b border-black/10 pb-5 max-w-sm"
                >
                  <h3 className="font-heading text-2xl font-bold text-black">{city}</h3>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">{street}</p>
                  <div className="mt-3 flex gap-5 text-xs font-bold uppercase tracking-wider">
                    <a href={`mailto:${email}`} className="text-gold hover:text-black transition duration-300">{email}</a>
                    <span className="text-black/30">/</span>
                    <span className="text-black/60">{phone}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Minimal Luxury Contact Form */}
          <div className="lg:col-span-7 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.25, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[540px] border border-black/15 bg-white/20 p-8 md:p-10 rounded-lg shadow-luxury backdrop-blur-xl"
            >
              <h2 className="font-heading text-3xl font-bold text-black mb-2">Bespoke Inquiry</h2>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold border-b border-black/10 pb-6 mb-8">
                General & Editorial Contacts
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 text-center"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold text-2xl mb-5 font-light">
                    ✓
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-black">Inquiry Transmitted</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/55 max-w-xs mx-auto">
                    Your luxury atmospheric formulation inquiry has been securely routed. Our salon representatives will establish contact shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  
                  {/* Name field */}
                  <div className="relative group border-b border-black/15 focus-within:border-gold transition duration-500">
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="YOUR COUTURE NAME"
                      className="w-full bg-transparent py-3 text-sm font-semibold uppercase tracking-wider text-black placeholder-black/35 outline-none"
                    />
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  {/* Email field */}
                  <div className="relative group border-b border-black/15 focus-within:border-gold transition duration-500">
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="YOUR LUXURY EMAIL"
                      className="w-full bg-transparent py-3 text-sm font-semibold uppercase tracking-wider text-black placeholder-black/35 outline-none"
                    />
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  {/* Message field */}
                  <div className="relative group border-b border-black/15 focus-within:border-gold transition duration-500">
                    <textarea
                      rows="4"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="MESSAGE FORMULATION INQUIRY"
                      className="w-full bg-transparent py-3 text-sm font-semibold uppercase tracking-wider text-black placeholder-black/35 outline-none resize-none"
                    />
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="relative w-full overflow-hidden border border-black bg-black py-4 text-[11px] font-bold uppercase tracking-[0.34em] text-white transition duration-500 hover:bg-transparent hover:text-black hover:border-black"
                    >
                      Transmit Inquiry
                    </button>
                  </div>
                  
                </form>
              )}
            </motion.div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
