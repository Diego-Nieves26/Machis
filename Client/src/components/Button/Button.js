import React from "react";
import "./style.css";

const Button = ({ content, color }) => {
  return (
    <button className="primary__button" style={{ "--color": color }}>
      {content}
    </button>
  );
};

export default Button;
