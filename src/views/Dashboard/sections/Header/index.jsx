import React from "react";
import Container from "../../../../components/Container";
import { HeaderWrapper, HeaderCard, FullName, Position} from "./Header.styled";

function Header() {
    return (
        <HeaderWrapper className="gradient-bg">
            <Container>
                <HeaderCard>
                    <FullName>Roman Dranchuk</FullName>
                    <Position>Frontend developer</Position>
                </HeaderCard>
            </Container>
        </HeaderWrapper>
    )
}

export default Header;