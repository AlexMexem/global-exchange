import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { useContext, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PositionContext } from "../context";

export function LandMoss() {
  let assetUrls;

  if (process.env.REACT_APP_ENVIROMENT === "Production") {
    assetUrls = process.env.REACT_APP_ASSETS_BASE;
  } else {
    assetUrls = process.env.PUBLIC_URL;
  }

  // This reference gives us direct access to our points
  const land = useRef();

  const [context] = useContext(PositionContext);

  const [colorMap] = useLoader(TextureLoader, [
    assetUrls + "textures/earth/new/earthbump1k.jpg",
  ]);

  /* const [alpha] = useLoader(TextureLoader, [
    assetUrls + "textures/earth/new/earthAlpha2.png",
  ]); */

  useEffect(() => {
    if (land) {
      land.current.rotation.y += -0.8;
    }
  }, []);

  useFrame(() => {
    if (context.rotation === true) {
      land.current.rotation.y += context.rotationSpeed;
    }
  });

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <mesh ref={land}>
      <sphereGeometry args={[0.98, 208, 208]} />
      <meshPhongMaterial
        specular={"#828282"}
        shininess={1}
        map={colorMap}
        opacity={1}
        displacementMap={colorMap}
        displacementScale={0.22}
      />
    </mesh>
  );
}
