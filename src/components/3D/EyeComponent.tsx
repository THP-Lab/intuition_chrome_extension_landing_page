import React, { useRef } from "react";
import { useEyeScene } from "./useEyeScene";

interface EyeComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

const EyeComponent: React.FC<EyeComponentProps> = ({ className = "", style = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);


  useEyeScene(
    containerRef,
    new URL("/src/assets/Eye-1K.glb", import.meta.url).toString(),
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr" // HDRI d’environnement
  );

  return (
    <div
      ref={containerRef}
      className={`eye-component ${className}`}
      style={{
        width: "500px",
        height: "800px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        ...style,
      }}
    />
  );
};

export default EyeComponent;
