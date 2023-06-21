import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { SceneContainer } from "./SceneContainer";
import Card from "./HTML/Card";
import { PositionContext } from "./context";

function App() {
  const [context, setContext] = useState({
    y: 30,
    x: 130,
    location: "N/A",
    display: "none",
    rotation: false,
    rotationSpeed: 0.001,
    details: {
      country: "",
      flags: [],
    },
    isSingle: false,
  });
  return (
    <>
      <PositionContext.Provider value={[context, setContext]}>
        <Card />
        <Canvas shadows className="globeCanvas">
          <SceneContainer />
        </Canvas>
      </PositionContext.Provider>
    </>
  );
}

export default App;
