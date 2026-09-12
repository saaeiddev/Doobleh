'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, RoundedBox, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

type Props = { entered: boolean; onEnter: () => void; reducedMotion: boolean };
const chrome = { color: '#e5e3dc', metalness: 1, roughness: .22 };
const brass = { color: '#d9ad64', metalness: .92, roughness: .28 };

function VintageMic({ entered, onEnter, reducedMotion }: Props) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }, delta) => {
    if (!group.current) return;
    const t = reducedMotion ? 0 : clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -.22 + (reducedMotion ? 0 : pointer.x * .38 + Math.sin(t * .35) * .055), 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, reducedMotion ? 0 : pointer.y * -.06, 4, delta);
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, entered ? .6 : 0, 3, delta);
  });
  return <group ref={group} position={[0,-.1,0]} onClick={onEnter}>
    {/* Cast iron weighted foot, stepped brass collar and telescopic chrome stand. */}
    <mesh position={[0,-1.73,0]}><cylinderGeometry args={[.66,.76,.14,80]}/><meshStandardMaterial color="#242b36" metalness={.75} roughness={.3}/></mesh>
    <mesh position={[0,-1.64,0]}><cylinderGeometry args={[.58,.66,.07,80]}/><meshStandardMaterial {...chrome}/></mesh>
    <mesh position={[0,-1.53,0]}><cylinderGeometry args={[.19,.28,.18,48]}/><meshStandardMaterial {...brass}/></mesh>
    <mesh position={[0,-1.04,0]}><cylinderGeometry args={[.083,.105,.88,40]}/><meshStandardMaterial {...chrome}/></mesh>
    <mesh position={[0,-.75,0]}><cylinderGeometry args={[.13,.13,.18,40]}/><meshStandardMaterial {...brass}/></mesh>
    {/* Continuous U-shaped yoke with two pivot screws. */}
    <RoundedBox args={[1.42,.15,.19]} radius={.07} position={[0,-.62,0]}><meshStandardMaterial {...chrome}/></RoundedBox>
    {[-1,1].map(side=><group key={side}>
      <RoundedBox args={[.14,1.26,.19]} radius={.06} position={[side*.65,-.05,0]}><meshStandardMaterial {...chrome}/></RoundedBox>
      <mesh position={[side*.66,.49,0]} rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.14,.14,.25,40]}/><meshStandardMaterial {...brass}/></mesh>
      <mesh position={[side*.8,.49,0]} rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.105,.105,.035,32]}/><meshStandardMaterial {...chrome}/></mesh>
    </group>)}
    <group position={[0,.57,0]} rotation={[-.08,0,0]}>
      <RoundedBox args={[1.08,1.72,.72]} radius={.27} smoothness={8}><meshStandardMaterial {...chrome}/></RoundedBox>
      {/* Black acoustic cloth is recessed beneath individually modelled curved ribs. */}
      {[-1,1].map(face=><group key={face} position={[0,0,face*.355]}>
        <RoundedBox args={[.9,1.44,.035]} radius={.2} smoothness={6}><meshStandardMaterial color="#17202a" roughness={.91}/></RoundedBox>
        {Array.from({length:35},(_,i)=><mesh key={'wire'+i} position={[(i-17)*.023,0,face*.023]}><boxGeometry args={[.005,1.12,.005]}/><meshStandardMaterial color="#6b7479" metalness={.65} roughness={.64}/></mesh>)}
        {Array.from({length:12},(_,i)=>{
          const y=(i-5.5)*.108;
          const width=.92-Math.pow(Math.abs(y)/.72,4)*.25;
          return <RoundedBox key={i} args={[width,.046,.075]} radius={.022} smoothness={3} position={[0,y,face*.044]}><meshStandardMaterial {...chrome}/></RoundedBox>;
        })}
        <RoundedBox args={[.074,1.37,.085]} radius={.025} position={[0,0,face*.063]}><meshStandardMaterial {...brass}/></RoundedBox>
      </group>)}
      <RoundedBox args={[.3,.13,.025]} radius={.025} position={[0,-.70,.36]}><meshStandardMaterial {...brass}/></RoundedBox>
      {[-1,1].map(x=><mesh key={x} position={[x*.105,-.70,.38]}><sphereGeometry args={[.015,12,12]}/><meshStandardMaterial color="#252b32" metalness={.6}/></mesh>)}
      {Array.from({length:5},(_,i)=><RoundedBox key={i} args={[.033,.018,.34]} radius={.008} position={[(i-2)*.12,.858,0]}><meshStandardMaterial color="#29323a" roughness={.6}/></RoundedBox>)}
    </group>
    <mesh position={[.12,-1.78,-.4]} rotation={[Math.PI/2,0,.4]}><torusGeometry args={[.72,.022,10,80,Math.PI*1.7]}/><meshStandardMaterial color="#282a34" roughness={.8}/></mesh>
  </group>;
}

export default function MicrophoneScene(props: Props) {
  return <div className="hero-canvas" role="img" aria-label="میکروفون سه‌بعدی کلاسیک استودیویی با بدنه کرومی و پایه فلزی">
    <Canvas dpr={[1,1.7]} camera={{position:[0,.3,6.8],fov:39}} gl={{antialias:true,alpha:true}}>
      <ambientLight intensity={.8}/>
      <spotLight position={[-3,6,5]} intensity={65} angle={.55} penumbra={1} color="#fff0d6"/>
      <pointLight position={[3,1,3]} intensity={14} color="#ff82bd"/>
      <pointLight position={[-3,0,2]} intensity={12} color="#70eedf"/>
      <Environment resolution={128}>
        <Lightformer position={[-3,2,4]} scale={[2,6,1]} intensity={4} color="#ffffff"/>
        <Lightformer position={[3,1,2]} scale={[1,5,1]} intensity={3} color="#ffe8b9"/>
        <Lightformer position={[0,5,-2]} rotation={[Math.PI/2,0,0]} scale={[5,5,1]} intensity={3}/>
      </Environment>
      <VintageMic {...props}/>
      <ContactShadows position={[0,-1.91,0]} opacity={.45} scale={7} blur={2.8} far={4} frames={1}/>
    </Canvas>
  </div>;
}
