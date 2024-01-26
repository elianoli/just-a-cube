import { useFrame } from "@react-three/fiber";
import React from "react";

const AnimatedCube = () => {
  // Refers the cube to rotate it with useFrame
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    // Use clock to update the cube
    myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={0x3780ac} />
    </mesh>
  );
};

export default AnimatedCube;
