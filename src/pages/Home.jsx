import React from "react";
import Hero from "../components/Hero";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // <-- add this
import Skills from "../components/Skills";

import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import AboutContent from "../components/AboutContent";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <AboutContent />

        <Skills />
        <ProjectList />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
