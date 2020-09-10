import React, { useState } from "react";
import * as utils from "./commonUtils.js";

const Clock = ({ style = {}, ...rest }) => {
  const [time, setTime] = useState(new Date());

  const updateInterval = setInterval(() => setTime(new Date()), 10);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "column",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          margin: "0.1em",
          justifyContent: "center",
        }}
      >
        <div>
          <span>{`${
            time.getHours() % 12 || 12
          }:${time.getMinutes()}:${time.getSeconds()}`}</span>{" "}
          <span> {`${time.getHours() >= 12 ? "PM" : "AM"}`}</span>
        </div>
        <div>{`${utils.getMonthFromNumber(
          time.getMonth()
        )} ${time.getDate()}`}</div>
        <div>{`${time.getFullYear()}`}</div>
      </div>
    </div>
  );
};

export default Clock;
