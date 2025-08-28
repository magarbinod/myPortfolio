import React from "react";
import "./Hero.css";
import heroPhoto from "../assets/images/binod-hero-profile.jpg";

const Hero = () => {
  return (
    <div>
      <div className="bm-hero">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="bm-hero-info">
                <h1>Frontend Developer</h1>
                <p className="lead">
                  I create digital experiences that inspire and engage. With a
                  passion for clean design and innovative solutions, I transform
                  ideas into beautiful, functional realities.
                </p>
                <a href="http://">
                  <button className="btn btn-primary">View My Work</button>
                </a>
                <a href="http://">
                  <button className="btn btn-primary">Get In Touch</button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="bm-floating-element position-relative">
                <img
                  className="img-fluid cw-hero-img"
                  src={heroPhoto}
                  alt="hero-img"
                />
                <div className="cw-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
