import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter.js";
import * as utils from "./commonUtils.js";
import Clock from "./Clock.js";

function App() {
  return (
    <>
      <Counter />
      <Clock style={{ fontSize: "15vw", color: "whitesmoke" }} />
    </>
  );
}

export default App;
