import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { PositionContext } from "../context";

export function DotSphere({ meshPosition }) {
  let assetUrls;

  if (process.env.REACT_APP_ENVIROMENT === "Production") {
    assetUrls = process.env.REACT_APP_ASSETS_BASE;
  } else {
    assetUrls = process.env.PUBLIC_URL;
  }

  // This reference gives us direct access to our points
  const points = useRef();

  const [context] = useContext(PositionContext);

  const [colorMap] = useLoader(TextureLoader, [
    assetUrls + "textures/earth/new/earthAlpha.png",
  ]);

  useFrame(() => {
    if (context.rotation === true) {
      points.current.rotation.y += context.rotationSpeed;
    } else {
      points.current.rotation.y += context.rotationSpeed;
    }
  });

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1.02, 208, 208]} />
      <pointsMaterial
        color="#FBF2BA"
        size={0.005}
        sizeAttenuation
        alphaMap={colorMap}
        alphaTest={1}
        transparent={false}
      />
    </points>
  );
}
