import React from "react";
import { Outlet } from "react-router";
import Container from "../../components/Container";

function Projects() {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default Projects;