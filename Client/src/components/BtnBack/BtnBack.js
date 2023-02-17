import { useNavigate } from "react-router-dom";
import React from "react";
import "./styles.css";

const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <button className="btn_back" onClick={() => navigate(-1)}>
      <i className="bx bx-arrow-back"></i>
    </button>
  );
};

export default BtnBack;
