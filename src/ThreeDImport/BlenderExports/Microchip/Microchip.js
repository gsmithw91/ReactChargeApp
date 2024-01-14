// Microchip.js
import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./Microchip.css";

const Microchip = () => {
  const microchipRef = useRef();
  const gltf = useLoader(GLTFLoader, "/BlenderExports/Microchip/Microchip.glb");

  // This rotation value will flip the microchip upside down.
  useFrame(() => {
    microchipRef.current.rotation.y += 0.01;
  });

  return <primitive ref={microchipRef} object={gltf.scene} scale={[2, 2, 2]} />;
};

export default Microchip;
