import React from "react";
import { useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function SkyBox() {
  let assetUrls;

  if (process.env.REACT_APP_ENVIROMENT === "Production") {
    assetUrls = process.env.REACT_APP_ASSETS_BASE;
  } else {
    assetUrls = process.env.PUBLIC_URL;
  }

  const { scene } = useThree();

  const [colorMap] = useLoader(TextureLoader, [
    assetUrls + "textures/earth/universe.jpg",
  ]);

  scene.background = colorMap;
  scene.backgroundIntensity = 0.2;
  return <React.Fragment>{null}</React.Fragment>;
}
