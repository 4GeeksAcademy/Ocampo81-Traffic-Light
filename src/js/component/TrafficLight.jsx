import React, { useState } from 'react';
import "../../styles/index.css";

export function TrafficLight() {
    const [color, setColor] = useState("red");
  
    return (
      <div className="traffic-light-container">
        <div className="traffic-light">
          <div className="lights-container">
            <div className={`light red ${color === "red" ? "on" : ""}`} onClick={() => setColor("red")}>

            </div>
            <div className={`light yellow ${color === "yellow" ? "on" : ""}`} onClick={() => setColor("yellow")}>

            </div>
            <div className={`light green ${color === "green" ? "on" : ""}`} onClick={() => setColor("green")}>

            </div>
          </div>
        </div>
      </div>
    );
  }
export default TrafficLight;
