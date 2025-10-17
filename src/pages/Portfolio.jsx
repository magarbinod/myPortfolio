import React, { useState } from "react";
import "../App.css";

import portfolioItems from "../api/portfolioData.json";


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            A curated selection of recent work spanning brand identity, digital
            experiences, and visual storytelling.
          </p>
        </div>

        <ul className="filter-nav text-center list-inline mb-4">
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
        </ul>

        <div className="row portfolio-container">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 portfolio-item mb-4">
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
                      <a href="#" className="action-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-meta">
                    {/* <span className="portfolio-category">{item.meta[0]}</span>
                    <span className="portfolio-year">{item.meta[1]}</span> */}
                  </div>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
