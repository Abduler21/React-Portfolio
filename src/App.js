import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./styles/App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router Basename="https://abduler21.github.io/React-Portfolio/">
        <Navbar />

        <Route exact path="/React-Portfolio/" component={Home} />
        <Route exact path="/React-Portfolio/about" component={AboutMe} />
        <Route exact path="/React-Portfolio/portfolio" component={Portfolio} />
        <Route exact path="/React-Portfolio/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
