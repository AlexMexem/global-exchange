import { useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";
import React, { useContext, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import { Location } from "./Location";
import { PositionContext } from "../context";

export function Sphere() {
  let assetUrls;

  if (process.env.REACT_APP_ENVIROMENT === "Production") {
    assetUrls = process.env.REACT_APP_ASSETS_BASE;
  } else {
    assetUrls = process.env.PUBLIC_URL;
  }

  const boxRef = useRef();

  const [context] = useContext(PositionContext);

  const [colorMap] = useLoader(TextureLoader, [
    assetUrls + "textures/earth/new/earthEdges-dashed.png",
  ]);

  //colorMap.offset.x = 0.205;
  //colorMap.offset.x = 1.5708 / (2 * Math.PI);

  //colorMap.offset.x = 1.212;
  //colorMap.offset.y = -0.02;
  //colorMap.wrapS = RepeatWrapping;

  useFrame(() => {
    if (context.rotation === true) {
      boxRef.current.rotation.y += context.rotationSpeed;
    }
  });

  return (
    <>
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.05, 30, 30]} />
        <meshStandardMaterial
          transparent={true}
          map={colorMap}
          alphaMap={colorMap}
          side={DoubleSide}
          emissive={new Color(0.1, 0.3, 1).multiplyScalar(0.7)}
          color={[0, 0, 0]}
        />
        <group>
          <Location
            sphere={boxRef}
            latitude={33.0461}
            longitude={36.8516}
            location={"Israel"}
            details={{ country: ["Israel"], flags: ["il"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={335.2744}
            longitude={133.7751}
            location={"Australia"}
            details={{ country: ["Australia"], flags: ["au"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={22.3193}
            longitude={114.1694}
            location={"Hong Kong"}
            details={{ country: ["Hong Kong"], flags: ["hk"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={1.3521}
            longitude={103.8198}
            location={"Singapore"}
            details={{ country: ["Singapore"], flags: ["sg"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={36.2048}
            longitude={138.2529}
            location={"Japan"}
            details={{ country: ["Japan"], flags: ["jp"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={35.9078}
            longitude={127.7669}
            location={"South Korea"}
            details={{ country: ["South Korea"], flags: ["kr"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={330}
            longitude={26.9375}
            location={"South Africa"}
            details={{ country: ["South Africa"], flags: ["za"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={20.5937}
            longitude={78.9629}
            location={"India"}
            details={{ country: ["India"], flags: ["in"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={40.4637}
            longitude={3.7492}
            location={"Spain"}
            details={{ country: ["Spain"], flags: ["es"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={55.3781}
            longitude={-1}
            location={"United Kingdom"}
            details={{ country: ["United Kingdom"], flags: ["gb"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={41.8719}
            longitude={12.5674}
            location={"Italy"}
            details={{ country: ["Italy"], flags: ["it"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={52.8566}
            longitude={8.3522}
            location={"Benelux"}
            details={{
              country: ["Belgium", "Netherlands", "Luxembourg"],
              flags: ["be", "nl", "lu"],
            }}
            isSingle={false}
          />
          <Location
            sphere={boxRef}
            latitude={48.8566}
            longitude={19.582}
            location={"Europe"}
            details={{
              country: [
                "Sweden",
                "Austria",
                "Latvia",
                "France",
                "Denmark",
                "Portugal",
                "Norway",
                "Finland",
                "Switzerland",
                "Czech Republic",
                "Poland",
                "Lithuania",
                "Hungary",
                "Germany ",
              ],
              flags: [
                "se",
                "au",
                "lv",
                "fr",
                "dk",
                "pt",
                "no",
                "fi",
                "ch",
                "cz",
                "pl",
                "lt",
                "hu",
                "de",
              ],
            }}
            isSingle={false}
          />
          <Location
            sphere={boxRef}
            latitude={129.1304}
            longitude={81.3468}
            location={"Canada"}
            details={{ country: ["Canada"], flags: ["ca"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={145.1304}
            longitude={91.3468}
            location={"United States"}
            details={{ country: ["United States"], flags: ["us"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={162.1304}
            longitude={79.3468}
            location={"Mexico"}
            details={{ country: ["Mexico"], flags: ["mx"] }}
            isSingle={true}
          />
          <Location
            sphere={boxRef}
            latitude={200.1304}
            longitude={130.9253}
            location={"Brazil"}
            details={{ country: ["Brazil"], flags: ["br"] }}
            isSingle={true}
          />
        </group>
      </mesh>
    </>
  );
}
