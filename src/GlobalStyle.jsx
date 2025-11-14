import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap");
body {
  background-color: #000814;
  color: #f5f5f5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter Tight", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
h2 {
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  color: #ffffff;
  background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  background-clip: text;
  line-height: 1.2;
}
h4 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.btn-primary {
  background-color: var(--color-primary);
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}
  
/* img {
  border-radius: 25px;
} */

/* Navbar ========================================================= */
/* Navbar transitions */
/* Extra Small devices (portrait phones, less than 576px) */
/* No media query needed since this is the default */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  /* Your CSS for small devices */
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* Your CSS for medium devices */
}

/* Large devices (desktops, 992px and up) */
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

  /* Your CSS for large devices */
}

/* Extra Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  /* Your CSS for extra large devices */
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  /* Your CSS for extra extra large devices */
}

.navbar {
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Modern Fullscreen Menu */
.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.98) 0%,
    rgba(20, 20, 20, 0.98) 100%
  );
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}

.fullscreen-menu.open {
  opacity: 1;
  visibility: visible;
}

/* Close button styling */
.fullscreen-menu .close-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
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
  background: white;
  color: black;
  border-color: white;
  transform: rotate(90deg);
}
  

/* Menu links styling */
.fullscreen-menu a {
  color: white;
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

/* Staggered animation for links */
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

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effect for links */
.fullscreen-menu a::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, white, transparent);
  transition: all 0.4s ease;
  transform: translateX(-50%);
}

.fullscreen-menu a:hover::before {
  width: 100%;
}

.fullscreen-menu a:hover {
  color: #fff;
  letter-spacing: 4px;
  transform: scale(1.05);
}

/* Responsive adjustments */
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



.bm-title {
  background-color: #000814;
  padding: 2rem 0;
}

.btn:hover {
  background-color: #fff !important;
  color: #000000 !important;
}


`;
