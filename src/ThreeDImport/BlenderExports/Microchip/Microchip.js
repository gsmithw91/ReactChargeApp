import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./Microchip.css"; // If you have specific styles

const Microchip = () => {
  const microchipRef = useRef();
  // The path is relative to the public directory
  const gltf = useLoader(GLTFLoader, "/BlenderExports/Microchip/Microchip.glb");

  // Scale the Microchip mesh (adjust the values as needed)
  const scale = [2, 2, 2];

  // Rotation speed in radians per second
  const rotationSpeed = 0.5;

  useFrame(({ clock }) => {
    // Rotate the mesh continuously
    microchipRef.current.rotation.x = clock.elapsedTime * rotationSpeed;
    microchipRef.current.rotation.y = clock.elapsedTime * rotationSpeed;
  });

  return <primitive ref={microchipRef} object={gltf.scene} scale={scale} />;
};

export default Microchip;
