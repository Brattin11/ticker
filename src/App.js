import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter.js";
import * as utils from "./commonUtils.js";
import Clock from "./Clock.js";
import GifReel from "./GifReel.js";
import { ToDos } from "./Todo";
import StopWatch from "./StopWatch";

function App() {
  return (
    <>
      <Counter />
      <Clock style={{ fontSize: "15vw", color: "whitesmoke" }} />
      {/* <GifReel /> */}
      <ToDos />
      <StopWatch />
    </>
  );
}

export default App;
