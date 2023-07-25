import React, { useContext } from "react";
import { PositionContext } from "../context";

export default function Card() {
  const [context, setContext] = useContext(PositionContext);
  console.log(context);

  function handleMouseLeave(e) {
    setContext({
      ...context,
      display: "none",
      rotationSpeed: 0.001,
      rotation: true,
    });
  }

  return (
    <div
      className="cardBox"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",

        display: context.display,
      }}
    >
      <h2> {context.location} </h2>
      <div className="countryFlags">
        {context.details.flags.map((flag) => (
          <a
            className="cardBoxLink"
            target="_parent"
            href="https://mexem-redesign-v03.webflow.io/exchange-listings"
          >
            <span className={`fi fi-${flag} fis flag`}></span>
          </a>
        ))}
      </div>
      <svg
        className="card-x"
        onClick={handleMouseLeave}
        style={{
          display: "flex",
          position: "absolute",
          right: "5px",
          top: "5px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16 8L8 16M8.00001 8L16 16"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
