import React from "react";
import "./script.js";
import "./style.css";

const CardNintendo = ({ img, titleGame }) => {
  return (
    <div className="container__games__card">
      <gameboy-cartridge></gameboy-cartridge>
      <div className="games__card__img">
        <img src={img} alt="Img-game" />
      </div>
      <h2>{titleGame}</h2>
    </div>
  );
};

export default CardNintendo;
