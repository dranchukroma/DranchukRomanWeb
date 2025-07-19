import React from "react";
import PageWrapper from "../../components/Layouts/PageWrapper";
import { Outlet } from "react-router";

function Projects() {
    return (
        <PageWrapper>
            <Outlet />
        </PageWrapper>
    )
}

export default Projects;