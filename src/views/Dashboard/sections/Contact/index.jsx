import React from "react";
import Container from "../../../../components/Container";
import SectionHeading from "../../../../components/SectionHeader";
import { ContentWrapper, InfoWrapper, LinkWrapper, FullName, Position, ContactLink } from "./Contact.styled";

function Contact() {
    return (
        <Container>
            <SectionHeading heading={'Contact'} />
            <ContentWrapper>
                <InfoWrapper>
                    <FullName>Roman Dranchuk</FullName>
                    <Position>Frontend developer</Position>
                </InfoWrapper>
                <LinkWrapper>
                    <ContactLink className="gradient-bg" href={'adf'}>
                        Contact me
                    </ContactLink>
                </LinkWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default Contact;