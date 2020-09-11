import React, { useState, useEffect } from "react";
import * as utils from "./commonUtils.js";

const Clock = ({ style = {}, ...rest }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateInterval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(updateInterval);
      console.log("running");
    };
  }, []);

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{`${utils.padString(
            time.getHours() % 12 || 12,
            2,
            "0"
          )}:${utils.padString(time.getMinutes(), 2, "0")}:${utils.padString(
            time.getSeconds(),
            2,
            "0"
          )}`}</span>{" "}
          <span
            style={{
              paddingRight: "18rem",
            }}
          >
            {`${time.getHours() >= 12 ? "PM" : "AM"}`}
          </span>
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
