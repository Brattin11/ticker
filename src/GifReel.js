import React, { useState, useEffect } from "react";

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

  const getNextGifPosition = (itt) => (currentGifPosition + itt) % gifs.length;

  let gifPositionTimeout;

  useEffect(() => {
    gifPositionTimeout = setTimeout(() => {
      setGifPosition(getNextGifPosition(1));
    }, 1000);
    return () => {
      clearTimeout(gifPositionTimeout);
    };
  }, [currentGifPosition]);

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
          <button
            onClick={() => {
              setGifPosition(getNextGifPosition(-1));
              clearTimeout(gifPositionTimeout);
            }}
          >
            &larr;
          </button>
          <img
            style={{
              borderRadius: "10px",
            }}
            src={gifs[currentGifPosition]}
          ></img>

          <button
            onClick={() => {
              setGifPosition(getNextGifPosition(1));
              clearTimeout(gifPositionTimeout);
            }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default GifReel;
