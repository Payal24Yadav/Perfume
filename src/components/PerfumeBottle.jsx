'use client';

import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const keyframes = [
  { p: 0, pos: [0, -0.08, 0], rot: [0.08, -0.18, 0.02], scale: 1.34 },
  { p: 0.2, pos: [0.82, -0.05, -0.38], rot: [0.12, -0.85, -0.08], scale: 1.08 },
  { p: 0.36, pos: [-2.65, -0.18, -0.18], rot: [0.18, 2.1, 0.08], scale: 1.12 },
  { p: 0.62, pos: [-2.75, -0.2, -0.2], rot: [0.16, 2.55, 0.06], scale: 1.08 },
  { p: 0.76, pos: [1.22, -0.18, -0.34], rot: [0.04, 4.7, -0.12], scale: 1.02 },
  { p: 1, pos: [0, -0.38, -0.16], rot: [0.15, 6.45, 0.02], scale: 0.92 },
];

function getFrame(progress) {
  let index = 0;
  for (let i = 0; i < keyframes.length - 1; i += 1) {
    if (progress >= keyframes[i].p) index = i;
  }

  const a = keyframes[index];
  const b = keyframes[index + 1];
  const local = THREE.MathUtils.smoothstep((progress - a.p) / (b.p - a.p), 0, 1);

  return {
    pos: a.pos.map((v, i) => THREE.MathUtils.lerp(v, b.pos[i], local)),
    rot: a.rot.map((v, i) => THREE.MathUtils.lerp(v, b.rot[i], local)),
    scale: THREE.MathUtils.lerp(a.scale, b.scale, local),
  };
}

function LightSweep({ progressRef }) {
  const sweep = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    if (sweep.current) {
      sweep.current.position.x = THREE.MathUtils.lerp(sweep.current.position.x, -0.62 + ((t * 0.24 + p * 1.7) % 1.25), 0.08);
      sweep.current.material.opacity = 0.15 + Math.sin(t * 1.8 + p * 8) * 0.08;
    }
  });

  return (
    <mesh ref={sweep} position={[-0.65, 0.02, 0.292]} rotation={[0, 0, -0.15]}>
      <planeGeometry args={[0.09, 2.35]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
}

export default function PerfumeBottle({ mouseRef, progressRef, velocityRef }) {
  const bottle = useRef();
  const shadow = useRef();
  const texture = useTexture('/images/fumeluxe_hero.jpg');

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
  }, [texture]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progressRef.current;
    const v = velocityRef.current;
    const mouse = mouseRef.current;
    const frame = getFrame(p);

    if (bottle.current) {
      const floatX = Math.sin(t * 0.62) * 0.035;
      const floatY = Math.sin(t * 0.92) * 0.1;
      const sway = v * 0.22;

      bottle.current.position.x = THREE.MathUtils.lerp(bottle.current.position.x, frame.pos[0] + floatX + mouse.x * 0.18, 0.058);
      bottle.current.position.y = THREE.MathUtils.lerp(bottle.current.position.y, frame.pos[1] + floatY + mouse.y * 0.11, 0.058);
      bottle.current.position.z = THREE.MathUtils.lerp(bottle.current.position.z, frame.pos[2], 0.058);
      bottle.current.rotation.x = THREE.MathUtils.lerp(bottle.current.rotation.x, frame.rot[0] + mouse.y * 0.08, 0.06);
      bottle.current.rotation.y = THREE.MathUtils.lerp(bottle.current.rotation.y, frame.rot[1] + Math.sin(t * 0.38) * 0.045 + mouse.x * 0.08 + sway, 0.06);
      bottle.current.rotation.z = THREE.MathUtils.lerp(bottle.current.rotation.z, frame.rot[2] - mouse.x * 0.05 - sway * 0.25, 0.06);
      bottle.current.scale.setScalar(THREE.MathUtils.lerp(bottle.current.scale.x, frame.scale, 0.06));
    }

    if (shadow.current) {
      shadow.current.scale.setScalar(1.05 + p * 0.32 + Math.abs(v) * 0.2);
      shadow.current.material.opacity = 0.12 + (1 - p) * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={shadow} position={[0, -1.72, 0.08]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[0.98, 80]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.14} depthWrite={false} />
      </mesh>

      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.18}>
        <group ref={bottle} castShadow>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.26, 2.04, 0.44]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.34}
              roughness={0.02}
              metalness={0.08}
              transmission={0.78}
              thickness={1.4}
              ior={1.48}
              clearcoat={1}
              clearcoatRoughness={0.02}
              side={THREE.DoubleSide}
            />
          </mesh>

          <mesh position={[0, 0, 0.226]} castShadow>
            <planeGeometry args={[1.19, 1.97]} />
            <meshPhysicalMaterial map={texture} roughness={0.1} metalness={0.12} clearcoat={0.9} clearcoatRoughness={0.04} />
          </mesh>

          <mesh position={[0, 0, -0.231]}>
            <planeGeometry args={[1.22, 2]} />
            <meshStandardMaterial color="#060606" metalness={0.78} roughness={0.16} />
          </mesh>

          <mesh position={[0, 0, 0.251]}>
            <boxGeometry args={[1.31, 2.1, 0.025]} />
            <meshPhysicalMaterial color="#ffffff" transparent opacity={0.13} roughness={0.01} clearcoat={1} />
          </mesh>

          <LightSweep progressRef={progressRef} />

          <mesh position={[-0.64, 0, 0]}>
            <boxGeometry args={[0.035, 2.12, 0.49]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.08} />
          </mesh>
          <mesh position={[0.64, 0, 0]}>
            <boxGeometry args={[0.035, 2.12, 0.49]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.08} />
          </mesh>
          <mesh position={[0, 1.06, 0]}>
            <boxGeometry args={[1.31, 0.035, 0.49]} />
            <meshStandardMaterial color="#e5c45a" metalness={1} roughness={0.07} />
          </mesh>
          <mesh position={[0, -1.06, 0]}>
            <boxGeometry args={[1.31, 0.035, 0.49]} />
            <meshStandardMaterial color="#c9ccd0" metalness={1} roughness={0.06} />
          </mesh>

          <mesh position={[0, 1.18, 0]} castShadow>
            <cylinderGeometry args={[0.19, 0.22, 0.17, 48]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.06} />
          </mesh>

          <group position={[0, 1.51, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.28, 0.27, 0.48, 64]} />
              <meshStandardMaterial color="#050505" metalness={0.82} roughness={0.04} />
            </mesh>
            <mesh position={[0, 0.02, 0]} castShadow>
              <cylinderGeometry args={[0.292, 0.292, 0.075, 64]} />
              <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.05} />
            </mesh>
            <mesh position={[0, 0.28, 0]}>
              <cylinderGeometry args={[0.21, 0.25, 0.08, 64]} />
              <meshStandardMaterial color="#f7f7f7" metalness={0.85} roughness={0.05} />
            </mesh>
          </group>
        </group>
      </Float>
    </group>
  );
}
