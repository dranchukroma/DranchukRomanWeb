import React from "react";
import { CardsContainer, ProjectPreview, ProjectLabelWrapper, ProjectName, ProjectDescription } from "./Projects.styled";
import { CardImg } from "./Projects.styled";
import ArrowCTA from "../../../../components/icons/ArrowCTA";

function Card({ project, setIsHover }) {
    const projectImages = [project.images?.mobileImage, project.images?.desktopImage, project.images?.tabletImage]

    return (
        <CardsContainer mockupCount={Object.keys(project.images).length}>
            <ProjectPreview
                className="gradient-bg"
                onMouseLeave={() => setIsHover(false)}
                onMouseEnter={() => setIsHover(true)}
            >
                {projectImages.filter(Boolean).map((url, i) => <CardImg src={url} key={i} />)}
            </ProjectPreview>
            <ProjectLabelWrapper>
                <div>
                    <ProjectName>
                        {project.name}
                    </ProjectName>
                    <ProjectDescription>
                        {project.description || null}
                    </ProjectDescription>
                </div>
                <ArrowCTA />
            </ProjectLabelWrapper>
        </CardsContainer>
    )
}

export default Card;