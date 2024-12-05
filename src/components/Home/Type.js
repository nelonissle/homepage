import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Noch Schüler",
          "C#, Java, Javascript",
          "Software Entwicklung",
          "Erkundung der IT",
          "MariaDB, SQL Server",
          ".Net Blazor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
