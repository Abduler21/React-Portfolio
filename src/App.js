import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./styles/App.css"

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
        <Router basename="/React-Portfolio">
          <Navbar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
        </Router>
        <Footer />
    </div>
  );
}

export default App;

