import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Header from "./components/Header";
import WelcomeLoader from "./components/WelcomeLoader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import {AppProvider} from "./Context"
function App() {
  // Create Theme Provider
  const MWtheme = {
    color: {
      heading: "#fbbf24",
    },
  };

  return (
    <>
      <ThemeProvider theme={MWtheme}>
        <GlobalStyle/>
        <WelcomeLoader>
          <AppProvider>
            <Router>
            <Header />
            <AppRoutes />
            <Footer />
            <ScrollToTop /> {/* Add this line */}
          </Router>
          </AppProvider>
        </WelcomeLoader>
      </ThemeProvider>
    </>
  );
}

export default App;
