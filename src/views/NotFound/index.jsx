import React from "react";
import { PageWrapper } from "./NotFound.styled";
import { NotFoundCard, NotFoundHeader, NotFoundLabel } from "./NotFound.styled";

function NotFound() {
    return (
        <PageWrapper>
            <NotFoundCard>
                <NotFoundHeader>
                    404
                </NotFoundHeader>
                <NotFoundLabel>
                    Sorry, the page you're looking for doesn't exist.
                </NotFoundLabel>
            </NotFoundCard>
        </PageWrapper>
    )
}

export default NotFound;