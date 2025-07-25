import React from "react";
import { CardsContainer, ProjectPreview, ProjectLabelWrapper, ProjectName, ProjectDescription } from "./Projects.styled";
import { CardImg } from "./Projects.styled";
import ArrowCTA from "../../../../components/icons/ArrowCTA";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from '../../../../components/AnimatedBackground'

function Card({ project, setIsHover }) {
    const navigate = useNavigate();
    const projectImages = [project.images?.mobileImage, project.images?.desktopImage, project.images?.tabletImage]

    return (
        <CardsContainer mockupCount={Object.keys(project.images).length}>
            <AnimatedBackground>
                <ProjectPreview

                    onMouseLeave={() => setIsHover(false)}
                    onMouseEnter={() => setIsHover(true)}
                    onClick={() => navigate(`project/${project.urlName}`)}
                >
                    {projectImages.filter(Boolean).map((url, i) => <CardImg src={url} key={i} />)}
                </ProjectPreview>
            </AnimatedBackground>
            <ProjectLabelWrapper>
                <div>
                    <ProjectName>
                        {project.name}
                    </ProjectName>
                    <ProjectDescription>
                        {project.description || null}
                    </ProjectDescription>
                </div>
                <ArrowCTA onClick={() => navigate(`project/${project.urlName}`)} />
            </ProjectLabelWrapper>
        </CardsContainer >
    )
}

export default Card;