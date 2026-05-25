'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Float } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import PerfumeBottle from './PerfumeBottle';

gsap.registerPlugin(ScrollTrigger);

function CinematicLights({ progressRef }) {
  const gold = useRef();
  const silver = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;

    if (gold.current) {
      gold.current.position.x = Math.sin(t * 0.38 + p * 4) * 5.4;
      gold.current.position.y = 2.8 + Math.cos(t * 0.27) * 0.7;
      gold.current.intensity = 4.8 + Math.sin(p * Math.PI) * 2.1;
    }

    if (silver.current) {
      silver.current.position.x = Math.cos(t * 0.28 + p * 5) * -4.8;
      silver.current.position.z = 2.8 + Math.sin(t * 0.22) * 1.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.72} />
      <directionalLight position={[-4, 5.8, 4]} intensity={2.6} color="#ffffff" castShadow />
      <spotLight ref={gold} position={[4.5, 4, 2]} angle={0.34} penumbra={0.95} intensity={5.2} color="#d4af37" castShadow />
      <spotLight ref={silver} position={[-4, 2.4, 3]} angle={0.42} penumbra={1} intensity={2.9} color="#f6f7f8" />
      <pointLight position={[0, 0.4, -3.5]} intensity={2.7} color="#f6ead0" />
    </>
  );
}

function CameraRig({ mouseRef, progressRef }) {
  useFrame((state) => {
    const p = progressRef.current;
    const mouse = mouseRef.current;
    const t = state.clock.elapsedTime;
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
      if (p >= cameraPath[j].p) i = j;
    }

    const a = cameraPath[i];
    const b = cameraPath[i + 1];
    const local = THREE.MathUtils.smoothstep((p - a.p) / (b.p - a.p), 0, 1);
    const pos = a.pos.map((v, idx) => THREE.MathUtils.lerp(v, b.pos[idx], local));
    const look = a.look.map((v, idx) => THREE.MathUtils.lerp(v, b.look[idx], local));

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pos[0] + mouse.x * 0.34, 0.055);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, pos[1] + mouse.y * 0.24 + Math.sin(t * 0.4) * 0.035, 0.055);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, pos[2], 0.055);
    state.camera.lookAt(look[0] + mouse.x * 0.11, look[1] + mouse.y * 0.08, look[2]);
  });

  return null;
}

function Particles({ progressRef, count = 120 }) {
  const group = useRef();
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        position: [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6],
        scale: Math.random() * 0.034 + 0.008,
        speed: Math.random() * 0.6 + 0.25,
        color: Math.random() > 0.45 ? '#d4af37' : '#d8dce0',
      })),
    [count],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, p * 1.2 + t * 0.025, 0.05);
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -p * 0.8, 0.04);
    }
  });

  return (
    <group ref={group}>
      {particles.map((item) => (
        <mesh key={item.id} position={item.position} scale={item.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.35} metalness={0.9} roughness={0.08} />
        </mesh>
      ))}
    </group>
  );
}

function ReflectiveArchitecture({ progressRef }) {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -0.18 + p * 0.72 + Math.sin(t * 0.22) * 0.025, 0.04);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.2 + p * 0.16, 0.04);
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, -1.82, -0.18]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[3.65, 96]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.18} metalness={0.12} clearcoat={1} clearcoatRoughness={0.08} />
      </mesh>

      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh position={[-2.8, 0.55, -1.5]} rotation={[0.18, 0.35, 0.16]}>
          <torusGeometry args={[0.94, 0.016, 16, 144]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.08} />
        </mesh>
      </Float>

      <Float speed={0.75} rotationIntensity={0.12} floatIntensity={0.24}>
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

  useEffect(() => {
    const proxy = { progress: 0 };
    const tween = gsap.to(proxy, {
      progress: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.35,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          velocityRef.current = THREE.MathUtils.clamp(self.getVelocity() / 6500, -1, 1);
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
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none select-none">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.42, 5.1], fov: 38 }}
      >
        <color attach="background" args={['#ffffff']} />
        <fog attach="fog" args={['#ffffff', 4.2, 8.2]} />
        <PerspectiveCamera makeDefault position={[0, 0.42, 5.1]} fov={38} />
        <Environment preset="studio" />
        <CinematicLights progressRef={progressRef} />
        <Particles progressRef={progressRef} />
        <ReflectiveArchitecture progressRef={progressRef} />
        <Suspense fallback={null}>
          {ready && <PerfumeBottle mouseRef={mouseRef} progressRef={progressRef} velocityRef={velocityRef} />}
        </Suspense>
        <CameraRig mouseRef={mouseRef} progressRef={progressRef} />
      </Canvas>
    </div>
  );
}
