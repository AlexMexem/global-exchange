import React, { Suspense, useRef, useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Sphere } from "./Components/Sphere";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { DotSphere } from "./Components/DotSphere";
import { LandMoss } from "./Components/LandMass";

export function SceneContainer() {
  //const cameraControlsRef = useRef();

  const cameraRef = useRef();

  /*   useFrame(() => {
    if (cameraControlsRef) {
      console.log(cameraControlsRef);
      cameraControlsRef.current?.setFocalOffset(-1, 0, -3.2, false);
      console.log("ive run");
    }
  }); */

  return (
    <Suspense fallback={null}>
      {/* 
      maxPolarAngle={1.45}
      target={[0, 0, 0]}
      <OrbitControls />
      <CameraControls ref={cameraControlsRef} camera={cameraRef} />
      <PerspectiveCamera ref={cameraRef} position={[-4, 0, 4]} />
      <SkyBox />
      <color args={[0.18, 0.24, 0.31]} attach={"background"} />

      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={50}
        position={[-0.3, 0, 2.9]}
      />

       
      */}

      <OrbitControls
        target={[0, 0, 0]}
        dampingFactor={0.2}
        maxPolarAngle={Math.PI * 0.5}
        enableZoom={false}
      />
      <PerspectiveCamera makeDefault ref={cameraRef} position={(0, 0, 2)} />

      <group>
        <Sphere />
        <DotSphere />
        <LandMoss />

        {/* <Ring key={1} rotation={[20, 13, 0]} scale={[0.8, 0.8, 0.8]} />
        <Ring key={2} rotation={[10, 13, 4]} scale={[0.9, 0.9, 0.9]} /> */}
      </group>

      <spotLight
        color={"#FBF2BA"}
        intensity={0.7}
        angle={1.6}
        penumbra={1.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={(0.14, 0.5, 1)}
        intensity={1.5}
        angle={1.6}
        penumbra={1.5}
        position={[5, -25, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={2.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={1.2}
        angle={2.6}
        penumbra={0.5}
        position={[-5, -35, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={6}
          kernelSize={2}
          width={1200}
          luminanceThreshold={0.2}
          luminanceSmoothing={3}
        ></Bloom>
      </EffectComposer>
    </Suspense>
  );
}
