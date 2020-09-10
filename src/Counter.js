import React, { useState } from "react";
import "./App.css";
import Minus from "./minus.js";
import Plus from "./plus.js";
import Button from "./Button.js";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          width: "100vw",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "100vw",
            paddingBottom: "20%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "stretch",
            minHeight: "100vh",
            flex: 1,
          }}
        >
          <Button onClick={() => setCount(count - 1)}>
            <Minus
              style={{
                width: "100%",
                fill: "whitesmoke",
                height: "100%",
              }}
            />
          </Button>
          <div
            style={{
              color: "whitesmoke",
              fontSize: "25vw",
              flex: "2 0 50%",
              textAlign: "center",
              maxWidth: "50%",
              alignSelf: "center",
              fontFamily: "Ariel, sans-serif",
            }}
          >
            {count}
          </div>
          <Button onClick={() => setCount(count + 1)}>
            <Plus
              style={{
                width: "100%",
                fill: "whitesmoke",
                height: "100%",
              }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
