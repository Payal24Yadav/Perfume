'use client';

import React, { useEffect, useState } from 'react';

export default function FloatingParticles({ count = 30 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => {
      const isGold = Math.random() > 0.5;
      return {
        id: i,
        size: Math.random() * 5 + 2, // 2px to 7px
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 12 + 10}s`,
        color: isGold ? 'rgba(212, 175, 55, 0.4)' : 'rgba(192, 192, 192, 0.4)',
        boxShadow: isGold 
          ? '0 0 10px rgba(212, 175, 55, 0.6)' 
          : '0 0 10px rgba(192, 192, 192, 0.6)',
      };
    });
    setParticles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
            backgroundColor: p.color,
            boxShadow: p.boxShadow,
            animationDelay: p.delay,
            animationDuration: p.duration,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes float-dust {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float-dust;
        }
      `}</style>
    </div>
  );
}
