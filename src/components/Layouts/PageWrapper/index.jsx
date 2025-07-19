import React from "react";
import { Container } from "./PageWrapper.styled";

function PageWrapper({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default PageWrapper;