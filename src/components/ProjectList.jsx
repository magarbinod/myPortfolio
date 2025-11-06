import './ProjectList.css'
import portfolioItems from "../api/portfolioData.json";

const ProjectList = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header text-center">
          <span class="cw-badge-two">
            <i class="bi bi-code-slash me-2"></i>My Works
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

        {/* <ul className="filter-nav text-center list-inline mb-4">
          {["all", "branding", "web", "photography", "print"].map((cat) => (
            <li key={cat} className="list-inline-item mx-2">
              <button
                className={`filter-btn btn btn-outline-primary ${
                  activeFilter === cat ? "active" : ""
                }`}
                onClick={() => handleFilterClick(cat)}
              >
                {cat === "all"
                  ? "All Work"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul> */}

        <div className="row portfolio-container text-center">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-lg-6 portfolio-item mb-4">
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
                      <a target="_blank" href={item.url} className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a target="_blank" href={item.url} className="action-btn">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  {/* <p className="portfolio-description">{item.description}</p> */}
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
