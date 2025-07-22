import React from "react";
import Container from "../../../../components/Container";
import SectionHeading from "../../../../components/SectionHeader";
import { AboutText, AboutWrapper } from "./About.styled";

function About({ id }) {
    return (
        <AboutWrapper id={id}>
            <Container>
                <SectionHeading heading={'About'} />
                <AboutText>
                    As a dedicated Frontend Developer based in Ukraine, I'm on a continuous journey of learning and creating. Coding isn't just my profession, it's my passion. Join me on this exciting web development adventure! Let's build the web together!
                    As a dedicated Frontend Developer based in Ukraine, I'm on a continuous journey of learning and creating. Coding isn't just my profession, it's my passion. Join me on this exciting web development adventure! Let's build the web together!
                    As a dedicated Frontend Developer based in Ukraine, I'm on a continuous journey of learning and creating. Coding isn't just my profession, it's my passion. Join me on this exciting web development adventure! Let's build the web together!
                    As a dedicated Frontend Developer based in Ukraine, I'm on a continuous journey of learning and creating. Coding isn't just my profession, it's my passion. Join me on this exciting web development adventure! Let's build the web together!
                </AboutText>
            </Container>
        </AboutWrapper>
    )
}

export default About;