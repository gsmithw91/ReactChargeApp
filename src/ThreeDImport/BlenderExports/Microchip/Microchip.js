import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router v6

const Microchip = () => {
  const microchipRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
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
      setRotation({
        x: rotation.x + event.movementY * 0.005,
        y: rotation.y + event.movementX * 0.005,
      });
    }
  };

  const handleClick = () => {
    navigate("/login"); // Navigate to login using useNavigate
  };

  useFrame(() => {
    if (microchipRef.current) {
      if (isDragging) {
        microchipRef.current.rotation.x = rotation.x;
        microchipRef.current.rotation.y = rotation.y;
      } else {
        microchipRef.current.rotation.y += 0.002; // Continuous rotation when not dragging
      }
    }
  });

  return (
    <mesh
      ref={microchipRef}
      onClick={handleClick}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
      onPointerOut={handleMouseUp}
      onPointerMove={handleMouseMove}
    >
      <primitive object={gltf.scene} scale={[2, 2, 2]} />
    </mesh>
  );
};

export default Microchip;
