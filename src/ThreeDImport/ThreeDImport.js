// ThreeDImport.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import "./ThreeDImport.css"; // Assuming you have specific styles

const ThreeDImport = ({ children }) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {children}
      </Canvas>
    </div>
  );
};

export default ThreeDImport;
