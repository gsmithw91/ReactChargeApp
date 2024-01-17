// ThreeDImport.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import "./ThreeDImport.css"; // Import your CSS styles if you have any

const ThreeDImport = ({ children, ambientIntensity, pointLightPosition }) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={ambientIntensity} />
        <pointLight position={pointLightPosition} />
        {children}
      </Canvas>
    </div>
  );
};

export default ThreeDImport;
