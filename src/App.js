import React, { useState } from "react";
import "./App.css";

const OperatorButton = ({ operator, count, setCount }) => {
  switch (operator) {
    case "add":
      return (
        <button
          class="button"
          style={{ height: "2rem", width: "2rem" }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      );
    case "subtract":
      return (
        <button
          class="button"
          style={{ height: "2rem", width: "2rem" }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      );
  }
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          width: "100vw",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <OperatorButton operator="add" count={count} setCount={setCount} />
        <div style={{ margin: "5px", color: "white" }}>{count}</div>
        <OperatorButton operator="subtract" count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
