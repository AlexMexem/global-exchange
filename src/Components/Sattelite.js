import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, MeshStandardMaterial } from "three";

export function Sattelite() {
  let assetUrls;

  if (process.env.REACT_APP_ENVIROMENT === "Production") {
    assetUrls = process.env.REACT_APP_ASSETS_BASE;
  } else {
    assetUrls = process.env.PUBLIC_URL;
  }

  const gltf = useLoader(
    GLTFLoader,
    assetUrls + "models/sattelite/sattelite.glb"
  );

  const sattelite = useRef();

  useFrame(() => {
    sattelite.current.rotation.y += 0.007;
  });

  useEffect(() => {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material = new MeshStandardMaterial();
        object.material.color.set("white");
        object.material.wireframe = true;
      }
    });
  }, [gltf]);

  return <primitive ref={sattelite} object={gltf.scene} />;
}
