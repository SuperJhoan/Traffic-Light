import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function TrafficLight() {
  const [color, setColor] = useState("red");

  // Función para cambiar el color al hacer clic en una luz
  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "selected" : ""}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "selected" : ""}`}
        onClick={() => handleClick("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "selected" : ""}`}
        onClick={() => handleClick("green")}
      ></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<TrafficLight />);
