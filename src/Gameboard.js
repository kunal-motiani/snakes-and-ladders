import React, { useState, useEffect } from "react";

const Gameboard = ({ gridSize }) => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    let gameSquares = [];
    const colours = [
      "yellow",
      "white",
      "red",
      "blue",
      "green",
      "yellow",
      "white",
      "red",
      "blue",
      "green",
    ];
    let number = 1;
    let bgColor = "red";
    for (let i = gridSize; i > 0; i--) {
      if (i % 2 === 0) {
        for (let j = 1; j <= gridSize; j++, ++number) {
          bgColor = colours[j - 1];
          gameSquares.push({ x: i, y: j, number, bgColor });
        }
      } else {
        for (let j = gridSize; j > 0; j--, ++number) {
          bgColor = colours[gridSize - j];
          gameSquares.push({ x: i, y: j, number, bgColor });
        }
      }
    }
    setSquares(gameSquares);
  }, [gridSize]);

  return (
    <div
      className="game-board"
      style={{
        gridTemplate: `repeat(${gridSize}, 1fr) /repeat(${gridSize}, 1fr)`,
      }}
    >
      {squares.map((square, i) => (
        <div
          style={{
            gridRow: square.x,
            gridColumn: square.y,
            background: square.bgColor,
          }}
          key={i}
          className="game-square"
        >
          {square.number}
        </div>
      ))}

      <div
        style={{ gridRow: 10, gridColumn: 1, transition: "all 1s" }}
        className="player-avatar"
      >
        <img alt="Not found" className="pawn" src={`./pawns/yellow-pawn.png`} />
      </div>

      <div
        style={{ gridRow: 10, gridColumn: 1, transition: "all 1s" }}
        className="player-avatar"
      >
        <img alt="Not found" className="pawn" src={`./pawns/blue-pawn.png`} />
      </div>

      {/* <div
        style={{
          
        }}
      > */}
      <img
        id="firstSnake"
        alt="Not found"
        style={{
          width: "100%",
          height: "100%",
          opacity: "1",
          gridRowStart: 1,
          gridColumnStart: 3,
          gridRowEnd: 10,
          gridColumnEnd: 10,
        }}
        src={`./images/snake-3.png`}
      />
      {/* </div> */}

      <div
        style={{
          gridRowStart: 7,
          gridColumnStart: 4,
          gridRowEnd: 3,
          gridColumnEnd: 7,
        }}
      >
        <img
          alt="Not found"
          style={{ width: "100%", height: "100%", transform: "rotate(90deg)" }}
          src={`./images/snake-3.png`}
        />
      </div>

      <div
        style={{
          gridRowStart: 9,
          gridColumnStart: 4,
          gridRowEnd: 11,
          gridColumnEnd: 4,
        }}
      >
        <img
          alt="Not found"
          style={{
            width: "100%",
            height: "100%",
            transform: "rotate(90deg)",
          }}
          src={`./images/snake-3.png`}
        />
      </div>
      <div
        style={{
          gridRowStart: 4,
          gridColumnStart: 2,
          gridRowEnd: 10,
          gridColumnEnd: 6,
        }}
      >
        <img
          alt="Not found"
          style={{ width: "100%", height: "100%" }}
          src={`./images/snake-3.png`}
        />
      </div>

      <div
        style={{
          gridRowStart: 5,
          gridColumnStart: 3,
          gridRowEnd: 2,
          gridColumnEnd: 1,
        }}
      >
        <img
          alt="Not found"
          style={{
            width: "50%",
            height: "100%",
            paddingLeft: "50px",
            paddingTop: "15px",
            transform: "rotate(-45deg)",
          }}
          src={`./images/ladder-1.png`}
        />
      </div>

      <div
        style={{
          gridRowStart: 8,
          gridColumnStart: 8,
          gridRowEnd: 2,
          gridColumnEnd: 8,
        }}
      >
        <img
          alt="Not found"
          style={{
            width: "70%",
            height: "95%",
            paddingRight: "50px",
            /*paddingTop: "5px", */
            transform: "rotate(45deg)",
          }}
          src={`./images/ladder-1.png`}
        />
      </div>
    </div>
  );
};

export default Gameboard;
