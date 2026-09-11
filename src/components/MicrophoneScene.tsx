'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type Props = { entered: boolean; onEnter: () => void };

function Mic({ entered, onEnter }: Props) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const pointerX = state.pointer.x * .16;
    const pointerY = state.pointer.y * .08;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, hovered ? pointerX * 1.5 : pointerX, .06);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointerY, .06);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, entered ? -2.3 : Math.sin(t * .8) * .035 - .15, .035);
    group.current.rotation.z = entered ? Math.sin(t * 14) * .015 * Math.max(0, 1 - delta * 10) : Math.sin(t * .65) * .006;
    if (ring.current) ring.current.rotation.z += delta * (hovered ? 1.15 : .28);

    target.set(state.pointer.x * .16, state.pointer.y * .08, entered ? 3.65 : 6.3);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, target.x, .035);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, target.y, .035);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, target.z, entered ? .055 : .03);
    state.camera.lookAt(0, -.15, 0);
  });

  return (
    <group ref={group} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onClick={onEnter}>
      <group position={[0, .92, 0]} scale={hovered ? 1.025 : 1}>
        <mesh scale={[1.06, 1.23, .82]}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#111216" metalness={.72} roughness={.24} />
        </mesh>
        <mesh scale={[1.085, 1.255, .845]}>
          <sphereGeometry args={[1, 26, 20]} />
          <meshStandardMaterial color="#dca85a" wireframe metalness={.9} roughness={.18} emissive="#8d5d22" emissiveIntensity={hovered ? .38 : .17} transparent opacity={.78} />
        </mesh>
      </group>

      <mesh position={[0, -.32, 0]} scale={[.78, 1.15, .65]}>
        <cylinderGeometry args={[.82, .72, 1.8, 48]} />
        <meshStandardMaterial color="#0b0c10" metalness={.85} roughness={.2} />
      </mesh>

      <mesh ref={ring} position={[0, -.28, .54]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[.42, .048, 18, 64]} />
        <meshStandardMaterial color="#ffc875" emissive="#ff9b2f" emissiveIntensity={hovered ? 2.4 : 1.2} metalness={.7} roughness={.15} />
      </mesh>

      <mesh position={[0, -1.37, 0]}>
        <cylinderGeometry args={[.16, .16, .62, 32]} />
        <meshStandardMaterial color="#dca85a" metalness={.92} roughness={.14} />
      </mesh>
      <mesh position={[0, -1.71, 0]}>
        <cylinderGeometry args={[1.12, .82, .18, 64]} />
        <meshStandardMaterial color="#111216" metalness={.86} roughness={.18} />
      </mesh>
      <mesh position={[0, -1.63, 0]}>
        <torusGeometry args={[.91, .055, 16, 64]} />
        <meshStandardMaterial color="#dca85a" emissive="#6e431d" emissiveIntensity={.35} metalness={1} roughness={.15} />
      </mesh>
    </group>
  );
}

function FilmFrames() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * .15) * .035;
  });
  const frames = [-3.9,-2.7,-1.5,1.5,2.7,3.9];
  return <group ref={group} position={[0,.25,-2.9]}>
    {frames.map((x,i) => (
      <mesh key={x} position={[x, (i%2? .2:-.1), Math.abs(x)*-.04]} rotation={[0, x*.04, x*.018]}>
        <boxGeometry args={[1.25,1.75,.05]} />
        <meshStandardMaterial color={i%2?'#1a1d2c':'#211a1d'} emissive={i%2?'#171f35':'#351720'} emissiveIntensity={.35} metalness={.25} roughness={.55} />
      </mesh>
    ))}
  </group>;
}

export default function MicrophoneScene({ entered, onEnter }: Props) {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.7]} camera={{ position: [0,0,6.3], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#090c18']} />
        <fog attach="fog" args={['#090c18', 6, 13]} />
        <ambientLight intensity={.55} />
        <spotLight position={[0,5,4]} angle={.5} penumbra={.8} intensity={entered?4.8:3.3} color="#ffc875" />
        <pointLight position={[-4,1,2]} intensity={2.2} color="#8d2537" />
        <pointLight position={[4,1,1]} intensity={1.7} color="#ffb55a" />
        <FilmFrames />
        <Mic entered={entered} onEnter={onEnter} />
        <Sparkles count={entered ? 180 : 85} size={2.4} speed={entered ? .65 : .22} scale={[10,7,5]} color="#ffc875" opacity={.8} />
        <mesh position={[0,-1.84,0]} rotation={[-Math.PI/2,0,0]}>
          <circleGeometry args={[5.5,72]} />
          <meshStandardMaterial color="#0c0f1b" metalness={.55} roughness={.28} />
        </mesh>
      </Canvas>
    </div>
  );
}
