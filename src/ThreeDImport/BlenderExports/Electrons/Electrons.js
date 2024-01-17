import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useNavigate } from "react-router-dom"; // If you need navigation

const Electrons = ({ size, position, rotation }) => {
  const electronsRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [dragRotation, setDragRotation] = useState({ x: 0, y: 0 });
  const gltf = useLoader(GLTFLoader, "BlenderExports/Electrons/Electrons.glb");

  // Navigation removed for simplicity unless needed
  // const navigate = useNavigate();

  // Mouse event handlers similar to Microchip component
  const handleMouseDown = (event) => {
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setDragRotation({
        x: dragRotation.x + event.movementY * 0.005,
        y: dragRotation.y + event.movementX * 0.005,
      });
    }
  };

  // Animation or rotation logic
  useFrame(() => {
    if (electronsRef.current) {
      if (isDragging) {
        electronsRef.current.rotation.x = dragRotation.x;
        electronsRef.current.rotation.y = dragRotation.y;
      }
    }
  });

  return (
    <mesh
      ref={electronsRef}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
      onPointerOut={handleMouseUp}
      onPointerMove={handleMouseMove}
      position={position}
      rotation={rotation}
      scale={[size, size, size]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Electrons;
