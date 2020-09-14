import React, { useState } from "react";

const GifReel = () => {
  const gifs = [
    "https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif",
    "https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif",
    "https://media.giphy.com/media/IzVwOO8xZsfks/giphy.gif",
    "https://media.giphy.com/media/NbsN8ERSfcCys/giphy.gif",
    "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    "https://media.giphy.com/media/5wWf7H89PisM6An8UAU/giphy.gif",
  ];

  let [currentGifPosition, setGifPosition] = useState(0);

  const getNextGifPosition = () =>
    console.log("in getNextGifPosition") ||
    (currentGifPosition + 1) % gifs.length;

  setInterval(() => {
    setGifPosition(getNextGifPosition());
    console.log("running");
  }, 5000);

  console.log("GifReel called");

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              src={gifs[currentGifPosition]}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default GifReel;
