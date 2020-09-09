import React, { useState } from "react";
import * as utils from "./commonUtils.js";

const Clock = ({ style = {}, ...rest }) => {
  const [time, setTime] = useState(new Date());

  const updateInterval = setInterval(() => setTime(new Date()), 10);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0.1em",
        }}
      >
        <div style={{}}>{`${
          time.getHours() % 12
        }:${time.getMinutes()}:${time.getSeconds()} ${
          time.getHours() > 12 ? "PM" : "AM"
        } ${utils.getMonthFromNumber(
          time.getMonth()
        )} ${time.getDate()} ${time.getFullYear()}`}</div>
      </div>
    </div>
  );
};

export default Clock;
