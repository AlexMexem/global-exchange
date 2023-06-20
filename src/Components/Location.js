import React, { useContext, useRef, useEffect } from "react";
import { Vector3 } from "three";
import { PositionContext } from "../context";

export function Location({ latitude, longitude, sphere, location, details }) {
  const [context, setContext] = useContext(PositionContext);

  const locationRef = useRef();

  /*   const [colorMap] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + "textures/earth/new/dot.png",
  ]);
   */

  function handlePointerIn(e) {
    setContext({
      y: e.offsetY,
      x: e.offsetX,
      location,
      display: "flex",
      rotation: false,
      rotationSpeed: 0.0,
      details,
    });
  }

  function latLonToCart(userLat, userLng, radius) {
    const lat = userLat * (Math.PI / 180) - 0.06;
    const lng = userLng * (Math.PI / 180) + 20.2;

    const z = radius * Math.cos(lat) * Math.cos(lng);

    const x = radius * Math.cos(lat) * Math.sin(lng);
    const y = radius * Math.sin(lat);

    return [x, y, z];
  }

  useEffect(() => {
    var lookDirection = new Vector3();
    var target = new Vector3();

    lookDirection
      .subVectors(locationRef.current.position, sphere.current.position)
      .normalize();
    target.copy(locationRef.current.position).add(lookDirection);
    locationRef.current.lookAt(target);
  }, [sphere, locationRef]);

  return (
    <mesh
      onPointerEnter={(e) => {
        e.stopPropagation();
        handlePointerIn(e);
      }}
      ref={locationRef}
      position={latLonToCart(latitude, longitude, 1.07)}
    >
      <circleGeometry attach="geometry" args={[0.03, 32]} />
      <meshStandardMaterial color={"white"} metalness={0} flatShading={true} />
    </mesh>
  );
}
