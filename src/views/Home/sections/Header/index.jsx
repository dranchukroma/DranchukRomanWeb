import React from "react";
import Container from "../../../../components/Container";
import { HeaderWrapper, HeaderCard, FullName, Position } from "./Header.styled";
import AnimatedBackground from '../../../../components/AnimatedBackground'

function Header({ id }) {
    return (
        <AnimatedBackground>
            <HeaderWrapper id={id}>
                <Container>
                    <HeaderCard>
                        <FullName>Roman Dranchuk</FullName>
                        <Position>Frontend developer</Position>
                    </HeaderCard>
                </Container>
            </HeaderWrapper >
        </AnimatedBackground>
    )
}

export default Header;