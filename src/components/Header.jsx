import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/images/Binod-Magar-Logo.png";
import styled from "styled-components";

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
      <nav className={`navbar navbar-dark ${isScrolled ? "scrolled" : ""}`}>
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand text-white" to="/">
            <img src={Logo} className="img-fluid"></img>
          </Link>

          <MenuToggle className="btn btn-dark" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </MenuToggle>
        </div>
      </nav>

      {/* Fullscreen menu */}
      <div className={`fullscreen-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          x
        </button>
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

const MenuToggle = styled.button`
  padding: 14px 32px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  /* ------------------------------
   NAVBAR (Desktop)
------------------------------ */
  @media (min-width: 992px) {
    .navbar {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1030;
    }

    .bm-spacer {
      margin-top: 4rem;
    }

    .bm-spacer-two {
      margin-top: 6rem;
    }
  }

  /* Default navbar */
  .navbar {
    background-color: transparent;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000;
  }

  /* When scrolling */
  .navbar.scrolled {
    background-color: #000000f2;
    box-shadow: 0 2px 10px #0000001a;
  }

  /* ------------------------------
   NAV TOGGLE BUTTON
------------------------------ */
  .cw-open-btn {
    padding: 12px 20px;
    border-radius: 50px;
    background: #000;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .cw-open-btn:hover {
    background: #fff !important;
    color: #000 !important;
  }

  /* ------------------------------
   FULLSCREEN MENU OVERLAY
------------------------------ */
  .fullscreen-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #000000fa, #141414fa);
    backdrop-filter: blur(10px);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
  }

  /* Menu open state */
  .fullscreen-menu.open {
    opacity: 1;
    visibility: visible;
  }

  /* Close button */
  .fullscreen-menu .close-btn {
    position: absolute;
    top: 30px;
    right: 40px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    font-size: 28px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-weight: 300;
    line-height: 1;
  }

  .fullscreen-menu .close-btn:hover {
    background: #fff;
    color: #000;
    border-color: #fff;
    transform: rotate(90deg);
  }

  /* Menu links */
  .fullscreen-menu a {
    color: #fff;
    text-decoration: none;
    font-size: 3rem;
    font-weight: 300;
    margin: 20px 0;
    position: relative;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.4s ease;
  }

  /* Staggered animations */
  .fullscreen-menu.open a:nth-child(2) {
    animation: fadeInUp 0.6s ease forwards 0.1s;
  }
  .fullscreen-menu.open a:nth-child(3) {
    animation: fadeInUp 0.6s ease forwards 0.2s;
  }
  .fullscreen-menu.open a:nth-child(4) {
    animation: fadeInUp 0.6s ease forwards 0.3s;
  }
  .fullscreen-menu.open a:nth-child(5) {
    animation: fadeInUp 0.6s ease forwards 0.4s;
  }

  /* Keyframes */
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Hover underline + scale */
  .fullscreen-menu a:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, white, transparent);
    transition: all 0.4s ease;
    transform: translate(-50%);
  }

  .fullscreen-menu a:hover:before {
    width: 100%;
  }

  .fullscreen-menu a:hover {
    color: #fff;
    letter-spacing: 4px;
    transform: scale(1.05);
  }

  /* ------------------------------
   MOBILE RESPONSIVE
------------------------------ */
  @media (max-width: 768px) {
    .fullscreen-menu a {
      font-size: 2rem;
      margin: 15px 0;
    }

    .fullscreen-menu .close-btn {
      top: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .fullscreen-menu a {
      font-size: 1.5rem;
      margin: 12px 0;
    }
  }

  

  /* ------------------------------
   MISC
------------------------------ */
`;

export default Header;
