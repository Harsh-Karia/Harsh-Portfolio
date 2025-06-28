import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "a CS student at UC Davis with a passion for building products that make a difference",
          "Software Developer",
          "Machine Learning Engineer",
          "Aspiring Entrepreneur",
          "Cybersecurity Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 130,
        typeSpeed: 50,
      }}
    />
  );
}

export default Type;
