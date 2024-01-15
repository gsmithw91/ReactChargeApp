// ThreeDImport.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import "./ThreeDImport.css"; // Import your CSS styles if you have any

const ThreeDImport = ({ children }) => {
  return (
    <div className="canvas-container">
      <Canvas>
        {/* Ambient light illuminates the scene without a specific source */}
        <ambientLight intensity={0.5} />

        {/* Point light is like a light bulb: it has a position and casts shadows */}
        <pointLight position={[10, 10, 10]} />

        {/* Render children components, which could be your 3D models, camera controllers, etc. */}
        {children}
      </Canvas>
    </div>
  );
};

export default ThreeDImport;
