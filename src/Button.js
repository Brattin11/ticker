import React, { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      class="button"
      style={{
        outline: 0,
        flex: "1 0 25%",
        maxWidth: "25%",
        boxShadow: hover ? "0 5px 10px rgba(0,0,0,0.3)" : "none",
        borderRadius: "10px",
        backgroundColor: hover ? "rgba(255,255,255,0.05)" : "",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    />
  );
};

export default Button;
