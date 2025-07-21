import React from "react";
import { Wrapper, Heading, Line } from "./SectionHeader.styled";

function SectionHeading({ heading = 'No heading' }) {
    return (
        <Wrapper>
            <Heading><h1>{heading}</h1></Heading>
            <Line />
        </Wrapper>
    )
}

export default SectionHeading;