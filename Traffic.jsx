import React, { useState } from "react";
import ReactDOM from "react-dom";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  // Función para alternar entre los colores del semáforo
  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  // Función para añadir el color púrpura
  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div style={styles.container}>
      <div id="trafficLight">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c}`}
            onClick={() => setColor(c)}
            style={{
              ...styles.light,
              backgroundColor: c,
              boxShadow: color === c ? `0 0 30px ${c}` : "none",
            }}
          ></div>
        ))}
      </div>
      <button onClick={toggleColor} style={styles.button}>
        Cambiar Color
      </button>
      <button onClick={addPurple} style={styles.button}>
        Añadir Púrpura
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  light: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px 0",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
