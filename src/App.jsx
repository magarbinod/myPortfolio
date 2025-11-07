import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Header from "./components/Header";
import WelcomeLoader from "./components/WelcomeLoader";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <WelcomeLoader>
        <Router>
          <Header />
          <AppRoutes />
          <ScrollToTop /> {/* Add this line */}
        </Router>
      </WelcomeLoader>
    </>
  );
}

export default App;
