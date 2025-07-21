import React, { useEffect, useState } from "react";
import {
    NavWrapper,
    DesktopNavWrapper,
    MobileNavWrapper,
    MobileButtonsWrapper,
    BurgerElement,
    EntryPointsWrapper,
    EntryPoints,
    BurgerWrapper,
    SliderElement
} from './Navigation.styled';
import PageIcon from "../icons/PageIcon";
import Container from '../Container';

function Navigation() {
    const [isDesktop, setWindowWidth] = useState(window.innerWidth > 576);
    const [mobileNavStatus, setMobileNav] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth > 576);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sections = ["About", "Projects", "Contact"];

    const Sections = (
        <EntryPointsWrapper>
            {sections.map((section) => (
                <EntryPoints key={section}>
                    {section}
                </EntryPoints>
            ))}
        </EntryPointsWrapper>
    );

    return (
        <NavWrapper className="gradient-bg">
            <Container>
                {isDesktop ? (
                    <DesktopNavWrapper>
                        <PageIcon />
                        {Sections}
                    </DesktopNavWrapper>
                ) : (
                    <MobileNavWrapper>
                        <MobileButtonsWrapper>
                            <PageIcon />
                            <BurgerWrapper onClick={() => setMobileNav((prev) => !prev)}>
                                <BurgerElement active={mobileNavStatus} position='top' />
                                <BurgerElement active={mobileNavStatus} position='middle' />
                                <BurgerElement active={mobileNavStatus} position='bottom' />
                            </BurgerWrapper>
                        </MobileButtonsWrapper>
                        <SliderElement open={mobileNavStatus}>{Sections}</SliderElement>
                    </MobileNavWrapper>
                )}
            </Container>
        </NavWrapper>
    );
}

export default Navigation;
