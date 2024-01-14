// CameraController.js
import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";

const CameraController = ({ position, lookAt }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useEffect(() => {
    // Only set the position and lookAt once, no need to include in the animation loop
    cameraRef.current.position.set(...position);
    cameraRef.current.lookAt(...lookAt);
  }, [position, lookAt]); // Only re-run if position or lookAt changes

  useFrame(() => {
    // Perform per-frame updates here if necessary, for now we keep it empty
  });

  return null;
};

export default CameraController;
