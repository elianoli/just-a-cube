"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import AnimatedCube from "./components/animatedCube";

export default function Home() {
  return (
    <div className="absolute w-full h-full p-10">
      <Canvas>
        <ambientLight intensity={0.8}></ambientLight>
        <directionalLight
          position={[0, 0, 5]}
          intensity={0.5}
        ></directionalLight>

        {/* My animated cube component */}
        <AnimatedCube></AnimatedCube>
      </Canvas>
    </div>
  );
}
