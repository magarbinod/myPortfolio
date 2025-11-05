import React from "react";
import Hero from "../components/Hero";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // <-- add this
import Skills from "./Skills";
import About from "./About";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <About />

        <Skills />
        <ProjectList />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
