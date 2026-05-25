"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Robot({ speaking }) {
  return (
    <group>

      {/* HEAD */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.7, 64, 64]} />
        <meshStandardMaterial color="#cfe2ff" />
      </mesh>

      {/* BODY */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1.4, 1.8, 0.8]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      {/* LEFT EYE */}
      <mesh position={[-0.25, 0.45, 0.62]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* RIGHT EYE */}
      <mesh position={[0.25, 0.45, 0.62]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* MOUTH */}
      <mesh
        position={[0, 0.05, 0.65]}
        scale={speaking ? [1.6, 1.2, 1] : [1, 1, 1]}
      >
        <boxGeometry args={[0.25, 0.05, 0.05]} />
        <meshStandardMaterial color="#7c2d12" />
      </mesh>

    </group>
  );
}

export default function Avatar({ isTalking }) {
  return (
    <div className="w-[220px] h-[320px] rounded-3xl overflow-hidden bg-[#081225]">

      <Canvas camera={{ position: [0, 0, 4] }}>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[2, 2, 5]}
          intensity={2}
        />

        <Robot speaking={isTalking} />

        <OrbitControls enableZoom={false} />

      </Canvas>

    </div>
  );
}