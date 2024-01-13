import React from "react";
import { Canvas } from "@react-three/fiber";

const ThreeDImport = ({ children }) => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {children} {/* Render any child components */}
      </Canvas>
    </div>
  );
};

export default ThreeDImport;
