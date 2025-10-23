import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/images/Binod-Magar-Logo.png"

const Header = () => {
  // State for menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State for scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle function
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar fixed-top navbar-dark ${isScrolled ? "scrolled" : ""}`}>
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand text-white" href="/">
            <img src={Logo} className="img-fluid"></img>
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
        <Link to="/portfolio" onClick={toggleMenu}>
          Portfolio
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;