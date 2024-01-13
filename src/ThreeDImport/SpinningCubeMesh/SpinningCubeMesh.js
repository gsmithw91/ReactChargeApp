import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "./SpinningMesh.css"; // Assuming you have some CSS to import

const SpinningMesh = ({ position, args, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default SpinningMesh;
