import React, { useState } from "react";
import Container from "../../../../components/Container";
import SectionHeading from "../../../../components/SectionHeader";
import { projectList } from "./projectList.js";
import { ContentWrapper, Card, Circle, CardPreview, CardImg, CardInfoWrapper, CardInfoContainer, ProjectDescription, ProjectName, ProjectWrapper } from "./Projects.styled.js";
import ArrowCTA from "../../../../components/icons/ArrowCTA/index.jsx";

function Projects({ id }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeCard, setActiveCard] = useState(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <ProjectWrapper id={id}>
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
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => setActiveCard(null)}
                                onMouseEnter={() => setActiveCard(index)}
                            >
                                {[
                                    project.images?.mobileImage,
                                    project.images?.desktopImage,
                                    project.images?.tabletImage,
                                ].filter(Boolean).map((imageUrl, idx) => (
                                    <div>
                                        <Circle
                                            opacity={activeCard === index ? 1 : 0}
                                            style={{
                                                top: position.y,
                                                left: position.x,
                                            }}
                                        />
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