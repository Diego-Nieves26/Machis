import React from "react";
import Logo from "../Logo/Logo";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__main">
        <h3>
          Con <i className="bx bxs-heart" style={{ color: "#ffffff" }}></i>{" "}
          @Diego Nieves
        </h3>
        <ul>
          <li>
            <a href="https://github.com/Diego-Nieves26">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/diego-nieves-04b409242/">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
