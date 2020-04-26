import React from "react";
import "./App.css";
import Gameboard from "./Gameboard";

function App() {
  return (
    <div className="App">
      <div style={{ fontSize: "2rem" }}>
        <p style={{ marginLeft: "5vh" }}>Player 1</p>
        <img
          alt="Not found"
          style={{ height: "30vh" }}
          src={`./pawns/blue-pawn.png`}
        />
      </div>
      <Gameboard gridSize={10} />

      <div style={{ fontSize: "2rem" }}>
        <p style={{ marginLeft: "5vh" }}>Player 2</p>
        <img
          alt="Not found"
          style={{ height: "30vh" }}
          src={`./pawns/yellow-pawn.png`}
        />
      </div>
      {/* <Monopoly gridSize={10} /> */}
    </div>
  );
}

export default App;
