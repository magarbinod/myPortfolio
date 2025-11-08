import React from "react";
import Hero from "../components/Hero";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // <-- add this
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import AboutContent from "../components/AboutContent";
import SkillsList from "../components/SkillsList";


const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <SkillsList />
        <AboutContent />
        <ProjectList />
      </div>
    </>
  );
};

export default Home;
