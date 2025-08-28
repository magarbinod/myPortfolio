import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  // State for menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand text-white" href="/">
            Logo
          </a>
          <button className="btn btn-dark" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen menu */}
      <div className={`fullscreen-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>x</button>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
