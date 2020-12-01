import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <h2>Logo</h2>
      <ul className="ul__menu">
        <Link to="/">
          <li className="menu__home">Home</li>
        </Link>
        <Link to="/profile">
          <li className="menu__profile">Profile</li>
        </Link>
        <Link to="/infomation">
          <li className="menu__infomation">Infomation</li>
        </Link>
        <a hreff="#">
          <li className="menu__hum"></li>
        </a>
      </ul>
    </nav>
  );
};

export default Header;
