import React from "react";
import Container from "../../../../components/Container";
import SectionHeading from "../../../../components/SectionHeader";
import { projectList } from "./projectList.js";
import { ContentWrapper, Card, CardPreview, CardImg, CardInfoWrapper, CardInfoContainer, ProjectDescription, ProjectName, ProjectWrapper } from "./Projects.styled.js";
import ArrowCTA from "../../../../components/icons/ArrowCTA/index.jsx";

function Projects({ id }) {
    return (
        <ProjectWrapper id={id}>
            <Container>
                <SectionHeading heading={'Projects'} />
                <ContentWrapper>
                    {projectList.map((project, index) => (
                        <Card key={index} $widthCount={Object.keys(project.images).length}>
                            <CardPreview className="gradient-bg">
                                {[
                                    project.images?.mobileImage,
                                    project.images?.desktopImage,
                                    project.images?.tabletImage,
                                ].filter(Boolean).map((imageUrl, idx) => (
                                    <CardImg src={imageUrl} key={idx} />
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