import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/portfolio" element = {<Portfolio/>}></Route>
        <Route path="/resume" element = {<Resume/>}></Route>
        <Route path="/services" element = {<Services/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
    </Routes>
  )
}

export default AppRoutes