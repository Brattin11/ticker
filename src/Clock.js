import React, { useState } from "react";
import * as utils from "./commonUtils.js";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const updateInterval = setInterval(() => setTime(new Date()), 10);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2em" }}>
      <div
        style={{ fontSize: "15vw" }}
      >{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${utils.getMonthFromNumber(
        time.getMonth()
      )} ${time.getDate()} ${time.getFullYear()}`}</div>
    </div>
  );
};

export default Clock;
