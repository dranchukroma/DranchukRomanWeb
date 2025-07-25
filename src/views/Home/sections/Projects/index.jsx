import React, { useState, useEffect } from "react";
import Container from "../../../../components/Container/index.jsx";
import SectionHeading from "../../../../components/SectionHeader/index.jsx";
import { projectList } from "./projectList.js";
import { CardsWrapper, MouseFocurCircle, ProjectWrapper, MouseFocurLabel } from "./Projects.styled.js";
import Card from "./Card.jsx";

function Projects({ id }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeRing, setActiveRing] = useState(false);
    const [hoverCardPreview, setHoverCardPreview] = useState(false);
    const [isDesktop, setWindowWidth] = useState(window.innerWidth > 576);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <ProjectWrapper
            id={id}
            onMouseLeave={() => setActiveRing(false)}
            onMouseEnter={() => setActiveRing(true)}
        >
            {isDesktop ? <MouseFocurCircle
                focus={hoverCardPreview}
                opacity={activeRing ? 1 : 0}
                top={position.y}
                left={position.x}
            >
                <MouseFocurLabel focus={hoverCardPreview}>Click to see more</MouseFocurLabel>
            </MouseFocurCircle> : null}
            <Container>
                <SectionHeading heading={'Projects'} />
                <CardsWrapper>
                    {projectList.map((project, index) => (
                        <Card
                            key={index}
                            project={project}
                            setIsHover={setHoverCardPreview}
                        />
                    ))}
                </CardsWrapper>
            </Container>
        </ProjectWrapper >
    )
}

export default Projects;