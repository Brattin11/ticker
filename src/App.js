import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter.js";
import * as utils from "./commonUtils.js";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const updateInterval = setInterval(() => setTime(new Date()), 500);

  const getMonthFromNumber = (num) => {
    switch (num) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <div>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${utils.getMonthFromNumber(
      time.getMonth()
    )} ${time.getDate()} ${time.getFullYear()}`}</div>
  );
};

function App() {
  return (
    <>
      <Counter />
      <Clock />
    </>
  );
}

export default App;
