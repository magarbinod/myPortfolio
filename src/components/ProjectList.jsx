import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './ProjectList.css'
import portfolioItems from "../api/portfolioData.json";

const ProjectList = () => {
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
    <section className="portfolio-section">
      <div className="container">
        <div 
          className="section-header text-center"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <span className="cw-badge-two">
            <i className="bi bi-code-slash me-2"></i>My Works
          </span>{" "}
          <h2>
            Projects & <span className="bm-highlight">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A few examples of my recent work. I love turning ideas into
            interactive, well-built websites that look great and perform even
            better.
          </p>
        </div>

        <div className="row portfolio-container text-center">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="col-lg-6 portfolio-item mb-4"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
              data-aos-duration="800"
            >
              <div className="portfolio-card">
                <div className="portfolio-image position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a target="_blank" href={item.url} className="action-btn" rel="noreferrer">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a target="_blank" href={item.url} className="action-btn" rel="noreferrer">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;