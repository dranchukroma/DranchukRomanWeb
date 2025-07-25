import React from "react";
import Container from "../../../../components/Container";
import SectionHeading from "../../../../components/SectionHeader";
import { ContentWrapper, InfoWrapper, LinkWrapper, FullName, Position, ContactLink, ContactWrapper } from "./Contact.styled";
import AnimatedBackground from '../../../../components/AnimatedBackground'

function Contact({ id }) {
    return (
        <ContactWrapper id={id}>
            <Container>
                <SectionHeading heading={'Contact'} />
                <ContentWrapper>
                    <InfoWrapper>
                        <FullName>Roman Dranchuk</FullName>
                        <Position>Frontend developer</Position>
                    </InfoWrapper>
                    <LinkWrapper>
                        <AnimatedBackground>

                            <ContactLink className="gradient-bg" href={'mailto:dranchuk.roma@gmail.com'}>
                                Contact me
                            </ContactLink>
                        </AnimatedBackground>

                    </LinkWrapper>
                </ContentWrapper>
            </Container>
        </ContactWrapper>
    )
}

export default Contact;