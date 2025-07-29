import React from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router";
import Container from "../../components/Container";

function Projects() {
    const { projectName } = useParams();

    console.log(projectName);

    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default Projects;