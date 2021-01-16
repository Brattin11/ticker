import React, { useState, useEffect } from "react";

const wait = async (millis) =>
  new Promise((resolve) => setTimeout(resolve, millis));

const formatTime = (millis) => {
  const seconds = millis / 1000;
  return `${Math.floor(seconds / 60) > 0 ? Math.floor(seconds / 60) : ""}${
    Math.floor(seconds / 60) > 0 ? ":" : ""
  }${(seconds % 60).toFixed(2)}`;
};

const StopWatch = ({ style = {}, ...rest }) => {
  const [timing, setTiming] = useState(false);

  const [elapsedTime, setElapsedTime] = useState(0);

  const [lap, setLap] = useState(0);

  useEffect(() => {
    if (timing) {
      const update = async () => {
        await wait(200);
        setElapsedTime(elapsedTime + 200);
      };
      update();
    }
  }, [elapsedTime, timing]);

  useEffect(() => {
    setElapsedTime(0);
  }, [lap]);

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
            justifyContent: "center",
          }}
        >
          <div>{formatTime(elapsedTime)}</div>
          <button
            onClick={() => {
              setTiming(!timing);
            }}
          >
            {timing ? "stop" : "start"}
          </button>
          <button
            onClick={() => {
              setElapsedTime(0);
              setTiming(false);
            }}
          >
            reset
          </button>
          <button
            onClick={() => {
              setLap(elapsedTime);
            }}
          >
            lap
          </button>
          {lap > 0 && <div>{formatTime(lap)}</div>}
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
