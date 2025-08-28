import React from "react";
import Hero from "../components/Hero";
import "../App.css"
import 'bootstrap-icons/font/bootstrap-icons.css'; // <-- add this
import heroPhoto from "../assets/images/binod-about-us.jpg";


const Home = () => {
  return (
    <>
      <div>
        <Hero />

        {/* About Us */}
        <div className="bm-about-us">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-5">
                <div className="bm-profile-image-wrapper">
                  <div className="bm-profile-picture">
                    <img className="img-fluid" src={heroPhoto} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="bm-intro">
                  <h2>Hi, I'm Brandon - a Creative Developer</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper.
                  </p>
                </div>
                <div className="bm-skill-grid">
                  <div className="bm-skill-item">
                    <div className="bm-skill-icon">
                      <i class="bi bi-palette"></i>
                    </div>
                    <h4>Fronedn Developer</h4>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  </div>
                  <div className="bm-skill-item">
                    <div className="bm-skill-icon">
                      <i class="bi bi-palette"></i>
                    </div>
                    <h4>Fronedn Developer</h4>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  </div>
                  <div className="bm-skill-item">
                    <div className="bm-skill-icon">
                      <i class="bi bi-palette"></i>
                    </div>
                    <h4>Fronedn Developer</h4>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  </div>
                </div>

                <div className="bm-academy-timeline">
                  <div className="bm-year">2021</div>
                  <div className="bm-description">
                    Graduated with B.A. in Digital Design from Creative
                    University
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
