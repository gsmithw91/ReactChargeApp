import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router v6

const Microchip = ({ size, position, rotation }) => {
  const microchipRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [dragRotation, setDragRotation] = useState({ x: 0, y: 0 });
  const gltf = useLoader(GLTFLoader, "BlenderExports/Microchip/Microchip.glb");
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Mouse event handlers
  const handleMouseDown = (event) => {
    event.stopPropagation(); // Prevent click event when starting drag
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

  useFrame(() => {
    if (microchipRef.current) {
      if (isDragging) {
        microchipRef.current.rotation.x = dragRotation.x;
        microchipRef.current.rotation.y = dragRotation.y;
      }
    }
  });

  return (
    <mesh
      ref={microchipRef}
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

export default Microchip;
