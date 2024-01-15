// Electrons.js
import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Electrons = () => {
  const electronsRef = useRef();
  const gltf = useLoader(GLTFLoader, "BlenderExports/Electrons/Electrons.glb");

  useFrame(() => {
    if (electronsRef.current) {
      electronsRef.current.rotation.y += 0.01; // Rotate around the y-axis
      electronsRef.current.rotation.x += 0.01; // Rotate around the x-axis
    }
  });

  return <primitive ref={electronsRef} object={gltf.scene} scale={[2, 2, 2]} />;
};

export default Electrons;
