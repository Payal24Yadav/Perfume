'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedShowcase from '../components/FeaturedShowcase';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';
import ThreeCanvas from '../components/ThreeCanvas';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden selection:bg-gold selection:text-white">
      {/* Premium Minimal Navigation Bar */}
      <Navbar />

      {/* 
        Fixed 3D Canvas Rig running in the background.
        The FUMELUXE bottle will react to scroll and float/morph from section to section.
      */}
      <ThreeCanvas />

      {/* Full-screen immersive 3D Hero Section */}
      <HeroSection />

      {/* Curated Olfactory Categories */}
      <Categories />

      {/* Signature Formulation Showcase */}
      <FeaturedShowcase />

      {/* Brand Story Editorial Section */}
      <BrandStory />

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
