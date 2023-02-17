import React from "react";
import "./style.css";

const Logo = ({ font = 3 }) => {
  return (
    <h1 className="Logo__main" style={{ "--font": `${font}rem` }}>
      MACHI
    </h1>
  );
};

export default Logo;
