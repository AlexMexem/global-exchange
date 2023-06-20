import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

export function Ring({ rotation, scale, i }) {
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh
      position={[0, 0, 0]}
      scale={scale}
      rotation={rotation}
      castShadow
      receiveShadow
      ref={ref}
      key={i}
    >
      <torusGeometry args={[1.3, 0.001, 16, 100]} />
      <meshStandardMaterial
        emissive={new Color(0.1, 0.15, 17.5).multiplyScalar(0.5)}
      />
    </mesh>
  );
}
