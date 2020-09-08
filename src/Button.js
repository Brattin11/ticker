import React from "react";

const Button = (props) => {
  return (
    <button
      class="button"
      style={{
        flex: "1 0 25%",
        maxWidth: "25%",
      }}
      {...props}
    />
  );
};

export default Button;
