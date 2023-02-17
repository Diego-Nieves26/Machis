import React from "react";
import "./styles.css";

const InfoCard = ({ name, img, description, i }) => {
  return (
    <div className="info-card gallery__span" style={{ "--i": i }}>
      <div className="info-card-img">
        <img src={img} alt="Card-Img" />
      </div>
      <div className="info-card-info">
        <p className="text-title">{name}</p>
        <p className="text-body">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
