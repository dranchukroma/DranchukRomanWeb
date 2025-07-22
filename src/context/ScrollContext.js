import React, { useState, useContext, useEffect, createContext } from "react";

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
    const sectionIds = ["Header", "About", "Projects", "Contact"];
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

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
    }, [activeSection]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }

    const value = { activeSection, setActiveSection, sectionIds, scrollTo };
    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
}