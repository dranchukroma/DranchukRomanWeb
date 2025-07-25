import React, { useState, useEffect } from "react";
import Container from "../../../../components/Container";
import SectionHeading from "../../../../components/SectionHeader";
import { projectList } from "./projectList.js";
import { ContentWrapper, Card, Circle, CardPreview, CardImg, CardInfoWrapper, CardInfoContainer, ProjectDescription, ProjectName, ProjectWrapper, CircleDescription } from "./Projects.styled.js";
import ArrowCTA from "../../../../components/icons/ArrowCTA/index.jsx";

function Projects({ id }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeRing, setActiveRing] = useState(false);
    const [hoverCardPreview, setHoverCardPreview] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <ProjectWrapper id={id}
            onMouseLeave={() => setActiveRing(false)}
            onMouseEnter={() => setActiveRing(true)}
        >
            <Circle
                active={hoverCardPreview}
                opacity={activeRing ? 1 : 0}
                style={{
                    top: position.y,
                    left: position.x,
                }}
            >
                <CircleDescription
                    active={hoverCardPreview}
                >
                    Click to see more
                </CircleDescription>
            </Circle>
            <Container>
                <SectionHeading heading={'Projects'} />
                <ContentWrapper>
                    {projectList.map((project, index) => (
                        <Card
                            key={index}
                            $widthCount={Object.keys(project.images).length}
                        >
                            <CardPreview
                                className="gradient-bg"
                                onMouseLeave={() => {
                                    console.log('New state: ', false);
                                    setHoverCardPreview(false);
                                }}
                                onMouseEnter={() => {
                                    console.log('New state: ', true);
                                    setHoverCardPreview(true);
                                }}
                            >
                                {[
                                    project.images?.mobileImage,
                                    project.images?.desktopImage,
                                    project.images?.tabletImage,
                                ].filter(Boolean).map((imageUrl, idx) => (
                                    <div>
                                        <CardImg src={imageUrl} key={idx} />
                                    </div>
                                ))}
                            </CardPreview>
                            <CardInfoContainer>
                                <CardInfoWrapper>
                                    <ProjectName>
                                        {project.name}
                                    </ProjectName>
                                    <ProjectDescription>
                                        {project.description || null}
                                    </ProjectDescription>
                                </CardInfoWrapper>
                                <ArrowCTA />
                            </CardInfoContainer>
                        </Card>
                    ))}
                </ContentWrapper>
            </Container>
        </ProjectWrapper>
    )
}

export default Projects;