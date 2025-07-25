import React from "react";
import Container from "../Container";
import Github from '../icons/GitHub'
import Telegram from '../icons/Telegram'
import LinkedIn from '../icons/LinkedIn'
import CV from '../icons/CV'
import { IconsWrapper, IconWrapper, FooterWrapper, Rights } from "./Footer.styled";
import AnimatedBackground from '../../components/AnimatedBackground'

function Footer() {
    const now = new Date();
    return (
        <FooterWrapper>
            <AnimatedBackground>
                <Container>
                    <IconsWrapper>
                        <IconWrapper href="https://github.com/dranchukroma" target="_blank">
                            <Github />
                            <p>GitHub</p>
                        </IconWrapper>
                        <IconWrapper href="https://t.me/dranchukroma" target="_blank">
                            <Telegram />
                            <p>Telegram</p>
                        </IconWrapper>
                        <IconWrapper href="https://www.linkedin.com/in/roman-dranchuk-5b410717a/" target="_blank">
                            <LinkedIn />
                            <p>LinkedIn</p>
                        </IconWrapper>
                        <IconWrapper href="/CV/RomanDranchukCV.pdf" target="_blank" rel="noopener noreferrer">
                            <CV />
                            <p>View CV</p>
                        </IconWrapper>
                    </IconsWrapper>
                    <Rights>
                        © {now.getFullYear()} Roman Dranchuk. <br /> All rights reserved.
                    </Rights>
                </Container>
            </AnimatedBackground>
        </FooterWrapper>
    )
}

export default Footer;