import React from "react";
import Hero from "../components/Hero";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // <-- add this
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import About from "./About";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <About />

        <Skills />
        <Portfolio />
      </div>
    </>
  );
};

export default Home;
