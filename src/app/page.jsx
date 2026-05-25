'use client';

import React from 'react';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedShowcase from '../components/FeaturedShowcase';
import BrandStory from '../components/BrandStory';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Full-screen immersive 3D Hero Section */}
      <HeroSection />

      {/* Curated Olfactory Categories */}
      <Categories />

      {/* Signature Formulation Showcase */}
      <FeaturedShowcase />

      {/* Brand Story Editorial Section */}
      <BrandStory />
    </div>
  );
}

