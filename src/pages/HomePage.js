
import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


function Home() {

    return (
        <div>
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>

                    
    )
};

export default Home;