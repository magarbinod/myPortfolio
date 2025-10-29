import React from "react";
import heroPhoto from "../assets/images/binod-hero-profile.jpg";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
     
      {/* About Us */}
      <div className="bm-about-us">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            {/* Profile Image */}
            <div className="col-lg-4">
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
            <div className="col-lg-8">
              <div className="bm-intro">
                <h2>About Me — <span className="bm-hightlight">Binod Magar</span></h2>
                <p>
                  I'm a creative front-end developer with hands-on experience
                  designing and building responsive, user-friendly websites. I
                  enjoy turning ideas into clean, functional designs and
                  developing custom templates and interactive interfaces that
                  bring them to life. I take pride in writing efficient code and
                  collaborating with teams to deliver polished, visually
                  appealing digital experiences.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="bm-skill-grid">
                <div className="bm-skill-item">
                  <div className="bm-skill-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <h4>Frontend Web Development</h4>
                  <p>HTML, CSS, JavaScript, React.js, Bootstrap</p>
                </div>
                <div className="bm-skill-item">
                  <div className="bm-skill-icon">
                    <i className="bi bi-palette"></i>
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>Adobe Creative Suite, Figma, Photoshop, Illustrator</p>
                </div>
                <div className="bm-skill-item">
                  <div className="bm-skill-icon">
                    <i className="bi bi-server"></i>
                  </div>
                  <h4>Backend Basics</h4>
                  <p>C#, ASP.NET, SQL, APIs</p>
                </div>
              </div>

              {/* Education / Timeline */}
              <div className="bm-academy-timeline">
                <div className="wrapper d-flex border-start mt-5">
                  <div className="bm-year me-2 fw-bold">2015 - 2019</div>
                  <div className="bm-description">
                    Bachelor's degree in Graphic and Web Design
                  </div>
                </div>
                <div className="wrapper d-flex border-start mt-5">
                  <div className="bm-year me-2 fw-bold">2021 - 2022</div>
                  <div className="bm-description">
                   Certificate, Web Development
                  </div>
                </div>
                {/* <div className="wrapper d-flex border-start mt-5">
                  <div className="bm-year me-2 fw-bold">2021</div>
                  <div className="bm-description">
                    B.A. in Digital Design, Creative University
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
