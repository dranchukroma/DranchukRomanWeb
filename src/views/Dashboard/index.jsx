import React, { useEffect } from "react";
import Header from "./sections/Header";
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact";


function Dashboard({ activeSection, setActiveSection, sectionIds }) {

    useEffect(() => {
        const getActiveSection = () => {
            const scrollPosition = window.scrollY + 100;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        }

        window.addEventListener('scroll', getActiveSection);
        getActiveSection();
        return () => window.removeEventListener('scroll', getActiveSection);
    }, [activeSection, setActiveSection]);

    return (
        <div>
            <Header id="Header" />
            <About id="About" />
            <Projects id="Projects" />
            <Contact id="Contact" />
        </div>
    )
}

export default Dashboard;