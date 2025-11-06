import React from "react";
import skillsData from "../api/skillsData.json"; // ✅ Import the JSON data
import './Skills.css'
const Skills = () => {
  const {
    frontendDevelopment,
    backendDevelopment,
    designAndTools,
    professionalExpertise,
    certifications,
  } = skillsData;

  return (
    <section id="skills" className="skills section">
      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row text-center">
          <div className="col-lg-12">
            <span class="cw-badge-two">
              <i class="bi bi-code-slash me-2"></i>My Skills
            </span>
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
                  className="col-md-4 aos-init aos-animate"
                  data-aos="flip-left"
                  data-aos-delay="200"
                >
                  <div className="skill-card">
                    <div className="skill-header">
                      <i className="bi bi-code-slash"></i>
                      <h3>Frontend Development</h3>
                    </div>
                    <div className="skills-animation">
                      {frontendDevelopment.map((skill, index) => (
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

                {/* === Backend Development === */}
                <div
                  className="col-md-4 aos-init aos-animate"
                  data-aos="flip-left"
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
                  className="col-md-4 aos-init aos-animate"
                  data-aos="flip-left"
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

                {/* ===== Right Column ===== */}
                {/* <div className="col-lg-12">
                  <div
                    className="skills-summary aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <h3>Professional Expertise</h3>
                    <p>{professionalExpertise.description}</p>

                    <div className="summary-stats">
                      {professionalExpertise.stats.map((stat, i) => (
                        <div
                          className="stat-item aos-init aos-animate"
                          data-aos="zoom-in"
                          data-aos-delay={300 + i * 100}
                          key={i}
                        >
                          <div className="stat-circle">
                            <i className={`bi bi-${stat.icon}`}></i>
                          </div>
                          <div className="stat-info">
                            <span className="stat-number">{stat.num}</span>
                            <span className="stat-label">{stat.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="skills-badges aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <h4>Certifications</h4>
                      <div className="badge-list">
                        {certifications.map((cert, i) => (
                          <div className="skill-badge" key={i}>
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
