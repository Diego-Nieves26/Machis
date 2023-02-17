import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";
import "./styles.css";

const Nav = ({ links }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigate();

  const navigate = () => {
    navigation("/login");
  };
  return (
    <nav>
      <div className="container">
        <label htmlFor="check" className="bar">
          <input
            id="check"
            type="checkbox"
            onChange={(e) => setShowMenu(e.target.checked)}
            checked={showMenu}
          />
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </label>
        <div className={`menu ${showMenu ? "activeMenu" : "hiddenMenu"}`}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li onClick={navigate}>SingUp</li>
          </ul>
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
