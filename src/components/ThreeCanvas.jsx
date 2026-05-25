'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Float } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import * as THREE from 'three';
import PerfumeBottle from './PerfumeBottle';

gsap.registerPlugin(ScrollTrigger);

function CinematicLights({ progressRef, pathname }) {
  const gold = useRef();
  const silver = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;

    if (gold.current) {
      if (pathname === '/experience') {
        gold.current.position.x = Math.sin(t * 0.8 + p * 8) * 4.5;
        gold.current.position.z = Math.cos(t * 0.8) * 3;
        gold.current.intensity = 8.5;
      } else {
        gold.current.position.x = Math.sin(t * 0.38 + p * 4) * 5.4;
        gold.current.position.y = 2.8 + Math.cos(t * 0.27) * 0.7;
        gold.current.intensity = 4.8 + Math.sin(p * Math.PI) * 2.1;
      }
    }

    if (silver.current) {
      silver.current.position.x = Math.cos(t * 0.28 + p * 5) * -4.8;
      silver.current.position.z = 2.8 + Math.sin(t * 0.22) * 1.2;
    }
  });

  return (
    <>
      <ambientLight intensity={pathname === '/experience' ? 0.45 : 0.72} />
      <directionalLight position={[-4, 5.8, 4]} intensity={pathname === '/contact' ? 3.5 : 2.6} color="#ffffff" castShadow />
      <spotLight ref={gold} position={[4.5, 4, 2]} angle={0.34} penumbra={0.95} intensity={5.2} color="#d4af37" castShadow />
      <spotLight ref={silver} position={[-4, 2.4, 3]} angle={0.42} penumbra={1} intensity={2.9} color="#f6f7f8" />
      <pointLight position={[0, 0.4, -3.5]} intensity={2.7} color="#f6ead0" />
    </>
  );
}

function getCameraProps(pathname, progress) {
  if (pathname === '/') {
    // Home Page Camera Path
    const cameraPath = [
      { p: 0, pos: [0, 0.42, 5.1], look: [0, 0.18, 0] },
      { p: 0.22, pos: [-0.65, 0.18, 4.3], look: [0.25, 0.02, 0] },
      { p: 0.42, pos: [1.45, 0.42, 5.05], look: [-0.65, 0.08, 0] },
      { p: 0.64, pos: [1.35, 0.36, 5.0], look: [-0.72, 0.02, 0] },
      { p: 0.78, pos: [-1.25, 0.05, 4.15], look: [0.4, -0.1, 0] },
      { p: 1, pos: [0, -0.25, 5.45], look: [0, -0.18, 0] },
    ];
    let i = 0;
    for (let j = 0; j < cameraPath.length - 1; j += 1) {
      if (progress >= cameraPath[j].p) i = j;
    }
    const a = cameraPath[i];
    const b = cameraPath[i + 1] || a;
    const denominator = (b.p - a.p) === 0 ? 1 : (b.p - a.p);
    const local = THREE.MathUtils.smoothstep((progress - a.p) / denominator, 0, 1);
    
    return {
      pos: a.pos.map((v, idx) => THREE.MathUtils.lerp(v, b.pos[idx], local)),
      look: a.look.map((v, idx) => THREE.MathUtils.lerp(v, b.look[idx], local)),
    };
  }
  
  if (pathname === '/collections') {
    // Collections Page Camera: stable, lets the bottle occupy the right half on desktop
    return {
      pos: [0, 0.12, 5.15],
      look: [0.28, -0.05, 0],
    };
  }
  
  if (pathname === '/about') {
    // About Page Camera: slowly pans down and back on scroll
    const pos = [0, 0.25 - progress * 0.18, 4.95 + progress * 0.4];
    const look = [-0.18 + progress * 0.18, 0.05 - progress * 0.08, 0];
    return { pos, look };
  }
  
  if (pathname === '/featured') {
    // Featured Page Camera
    const pos = [0.15 - progress * 0.2, 0.22, 5.0];
    const look = [-0.22, 0.02, 0];
    return { pos, look };
  }
  
  if (pathname === '/experience') {
    // Experience Page Camera: dynamic cinematic zoom
    const pos = [Math.sin(progress * Math.PI * 0.5) * 0.4, 0.2 - progress * 0.18, 4.75 + progress * 0.7];
    const look = [0, -0.05, 0];
    return { pos, look };
  }
  
  if (pathname === '/contact') {
    // Contact Page Camera: centered and steady
    return {
      pos: [0, 0.18, 4.85],
      look: [0, -0.05, 0],
    };
  }
  
  return {
    pos: [0, 0.42, 5.1],
    look: [0, 0.18, 0],
  };
}

function CameraRig({ mouseRef, progressRef, pathname }) {
  useFrame((state) => {
    const p = progressRef.current;
    const mouse = mouseRef.current;
    const t = state.clock.elapsedTime;
    
    const cam = getCameraProps(pathname, p);

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, cam.pos[0] + mouse.x * 0.24, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, cam.pos[1] + mouse.y * 0.18 + Math.sin(t * 0.45) * 0.025, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, cam.pos[2], 0.05);
    state.camera.lookAt(cam.look[0] + mouse.x * 0.08, cam.look[1] + mouse.y * 0.06, cam.look[2]);
  });

  return null;
}

function Particles({ progressRef, pathname, count = 130 }) {
  const group = useRef();
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        position: [(Math.random() - 0.5) * 9, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7],
        scale: Math.random() * 0.03 + 0.006,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.48 ? '#d4af37' : '#d8dce0',
      })),
    [count],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    if (group.current) {
      if (pathname === '/experience') {
        // High motion vortex particles for Campaign Experience
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, p * 3.5 + t * 0.12, 0.05);
        group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 1.5, 0.04);
      } else {
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, p * 1.2 + t * 0.02, 0.05);
        group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 0.8, 0.04);
      }
    }
  });

  return (
    <group ref={group}>
      {particles.map((item) => (
        <mesh key={item.id} position={item.position} scale={item.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.25} metalness={0.9} roughness={0.08} />
        </mesh>
      ))}
    </group>
  );
}

function ReflectiveArchitecture({ progressRef, pathname }) {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    if (group.current) {
      if (pathname === '/experience') {
        // Fast architectural spin
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, p * 2.8 + Math.sin(t * 0.3) * 0.06, 0.04);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.3 + p * 0.25, 0.04);
      } else {
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.18 + p * 0.72 + Math.sin(t * 0.22) * 0.025, 0.04);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.2 + p * 0.16, 0.04);
      }
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, -1.82, -0.18]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[3.8, 96]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.15} metalness={0.12} clearcoat={1} clearcoatRoughness={0.08} />
      </mesh>

      <Float speed={0.95} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh position={[-2.8, 0.55, -1.5]} rotation={[0.18, 0.35, 0.16]}>
          <torusGeometry args={[0.94, 0.016, 16, 144]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.08} />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.12} floatIntensity={0.24}>
        <mesh position={[2.65, -0.15, -1.2]} rotation={[0.2, -0.48, -0.24]}>
          <torusGeometry args={[1.2, 0.012, 16, 144]} />
          <meshStandardMaterial color="#d7dbe0" metalness={1} roughness={0.06} />
        </mesh>
      </Float>

      <mesh position={[0, -1.76, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.55, 1.59, 128]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

export default function ThreeCanvas() {
  const progressRef = useRef(0);
  const velocityRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset progress to starting position on pathname shift
    progressRef.current = 0;
    velocityRef.current = 0;

    const proxy = { progress: 0 };
    const tween = gsap.to(proxy, {
      progress: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.25,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          velocityRef.current = THREE.MathUtils.clamp(self.getVelocity() / 6000, -1, 1);
        },
      },
      onUpdate: () => {
        progressRef.current = proxy.progress;
      },
    });

    const onMove = (event) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    setReady(true);

    return () => {
      window.removeEventListener('pointermove', onMove);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pathname]);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none select-none">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.42, 5.1], fov: 38 }}
      >
        <color attach="background" args={['#ffffff']} />
        <fog attach="fog" args={['#ffffff', 4.0, 8.5]} />
        <PerspectiveCamera makeDefault position={[0, 0.42, 5.1]} fov={38} />
        <Environment preset="studio" />
        
        <CinematicLights progressRef={progressRef} pathname={pathname} />
        <Particles progressRef={progressRef} pathname={pathname} />
        <ReflectiveArchitecture progressRef={progressRef} pathname={pathname} />
        
        <Suspense fallback={null}>
          {ready && (
            <PerfumeBottle
              mouseRef={mouseRef}
              progressRef={progressRef}
              velocityRef={velocityRef}
              pathname={pathname}
            />
          )}
        </Suspense>
        
        <CameraRig mouseRef={mouseRef} progressRef={progressRef} pathname={pathname} />
      </Canvas>
    </div>
  );
}

