import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroPhoto from "../assets/images/binod-hero-profile.jpg";
import "./AboutContent.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
      easing: 'ease-in-out',
    });
    
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* About Us */}
      <div className="bm-about-us">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            {/* Profile Image */}
            <div 
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="bm-profile-image-wrapper">
                <div className="bm-profile-picture">
                  <img
                    className="img-fluid"
                    src={heroPhoto}
                    alt="Binod Magar"
                  />
                </div>
              </div>
            </div>

            {/* Intro & Skills */}
            <div 
              className="col-lg-6 px-0 px-lg-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="bm-intro">
                <span className="cw-badge-two">
                  <i className="bi bi-code-slash me-2"></i>About
                </span>{" "}
                <h2>
                  Who I <span className="bm-highlight">Am</span>
                </h2>
                <p>
                  I'm a creative front-end developer with hands-on experience
                  designing and building responsive, user-friendly websites. I
                  enjoy turning ideas into clean, functional designs and
                  developing custom templates and interactive interfaces that
                  bring them to life. I take pride in writing efficient code and
                  collaborating with teams to deliver polished, visually
                  appealing digital experiences.
                </p>
                <div className="mt-3">
                  <div className="wrapper d-flex">
                    <div className="me-2 fw-bold">
                      <i className="bi bi-mortarboard me-3"></i>2015 - 2019
                    </div>
                    <div className="bm-description">
                      Bachelor's degree in Graphic and Web Design
                    </div>
                  </div>
                  <div className="wrapper d-flex">
                    <div className="me-2 fw-bold">
                      <i className="bi bi-mortarboard me-3"></i>2021 - 2022
                    </div>
                    <div className="bm-description">
                      Certificate, Web Development
                    </div>
                  </div>
                  <a href="/about">
                    <button className="btn btn-primary mt-4">Learn More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;