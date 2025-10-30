import React from "react";
import "./Hero.css";
import heroPhoto from "../assets/images/HeroImageTwo.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation happens only once while scrolling down
    });
  }, []);
  return (
    <div>
      <div className="bm-hero">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="bm-hero-info" data-aos="fade-right">
                <h1>Frontend <span className="bm-hightlight">Developer</span></h1>
                <p className="lead">
                  I’m a front-end developer who loves creating websites that
                  look great and work smoothly. I focus on clean design,
                  responsive layouts, and turning ideas into engaging digital
                  experiences.
                </p>
                <div className="bm-button mt-5">
                  <a href="/portfolio">
                    <button className="btn btn-primary me-3">
                      View My Work
                    </button>
                  </a>
                  <a target="_blank" href="https://publuu.com/flip-book/999695/2204941">
                    <button className="btn btn-outline border-white text-white">
                      Resume <i class="bi bi-download mx-3"></i>
                    </button>
                  </a>
                </div>

                <div
                  className="social-links aos-init aos-animate mt-5"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/binod-magar-143916266/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  {/* <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a> */}
                  <a href="https://github.com/magarbinod">
                    <i className="bi bi-github"></i>
                  </a>
                  {/* <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <div className="bm-floating-element position-relative" data-aos="fade-left">
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
