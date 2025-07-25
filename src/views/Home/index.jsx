import React from "react";
import Header from "./sections/Header";
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact";


function Home() {
    return (
        <div>
            <Header id="Header" />
            <About id="About" />
            <Projects id="Projects" />
            <Contact id="Contact" />
        </div>
    )
}

export default Home;