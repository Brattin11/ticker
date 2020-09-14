import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter.js";
import * as utils from "./commonUtils.js";
import Clock from "./Clock.js";

import GifReel from "./GifReel.js";

function App() {
  return (
    <>
      <Counter />
      <Clock style={{ fontSize: "15vw", color: "whitesmoke" }} />
      {/* <GifReel /> */}
    </>
  );
}

export default App;
