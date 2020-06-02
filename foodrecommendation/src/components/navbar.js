import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

//stateless functional component

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/foodlist" className="navbar-entry">
        Food List
      </Link>
      <Link to="/randompick" className="navbar-entry">
        Random pick
      </Link>
    </nav>
  );
};

export default NavBar;
