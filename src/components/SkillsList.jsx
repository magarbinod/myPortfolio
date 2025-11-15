import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillsList.css";
import Badge from "../styles/Badge";
import { useGlobalContext } from "../Context";

const SkillsList = () => {
  const { frontendDevelopment, backendDevelopment, designAndTools } =
    useGlobalContext();
  const data = {
    subTitle: "My Skills",
  };
  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row text-center">
          <div className="col-lg-12">
            <Badge {...data} />
            <h2 className="mb-5">
              Professional <span className="bm-highlight">Expertise</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {/* ===== Left Column (Skill Categories) ===== */}
          <div className="col-lg-12">
            <div className="skills-grid">
              <div className="row g-4">
                {/* === Frontend Development === */}
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="skill-card">
                    <div className="skill-header">
                      <i className="bi bi-code-slash"></i>
                      <h3>Frontend Development</h3>
                    </div>
                    <div className="skills-animation">
                      {frontendDevelopment.length > 0 ? (
                        frontendDevelopment.map((skill, index) => (
                          <div className="skill-item" key={index}>
                            <div className="skill-info">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-percentage">
                                {skill.percent}%
                              </span>
                            </div>
                            <div className="skill-bar progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={skill.percent}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: `${skill.percent}%` }}
                              ></div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>Loading skills...</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* === Backend Development === */}
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="skill-card">
                    <div className="skill-header">
                      <i className="bi bi-server"></i>
                      <h3>Backend Development</h3>
                    </div>
                    <div className="skills-animation">
                      {backendDevelopment.map((skill, index) => (
                        <div className="skill-item" key={index}>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">
                              {skill.percent}%
                            </span>
                          </div>
                          <div className="skill-bar progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={skill.percent}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* === Design & Tools === */}
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="skill-card">
                    <div className="skill-header">
                      <i className="bi bi-palette"></i>
                      <h3>Design &amp; Tools</h3>
                    </div>
                    <div className="skills-animation">
                      {designAndTools.map((skill, index) => (
                        <div className="skill-item" key={index}>
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">
                              {skill.percent}%
                            </span>
                          </div>
                          <div className="skill-bar progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={skill.percent}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsList;
