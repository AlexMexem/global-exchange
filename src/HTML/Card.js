import React, { useContext } from "react";
import { PositionContext } from "../context";

export default function Card() {
  const [context, setContext] = useContext(PositionContext);
  console.log(context);

  function handleCardClick(e) {
    window.location.href = `www.google.com`;
  }

  function handleMouseLeave(e) {
    setContext({
      ...context,
      display: "none",
      rotationSpeed: 0.001,
      rotation: true,
    });
    console.log(context);
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="cardBox"
      style={{
        top: context.y - 20,
        left: context.x - 30,
        display: context.display,
      }}
    >
      <h2> {context.location} </h2>
      <div className="countryFlags">
        {context.details.flags.map((flag) => (
          <a
            onClick={handleCardClick}
            className="cardBoxLink"
            href="https://mexem-redesign-v03.webflow.io/exchange-listings"
          >
            <span className={`fi fi-${flag} fis flag`}></span>
          </a>
        ))}
      </div>
    </div>
  );
}
