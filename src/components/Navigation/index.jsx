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

function Navigation({ activeSection, setActiveSection, sectionIds }) {
    const [isDesktop, setWindowWidth] = useState(window.innerWidth > 576);
    const [mobileNavStatus, setMobileNav] = useState(false);

    console.log(sectionIds)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth > 576);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Sections = (
        <EntryPointsWrapper>
            {sectionIds.slice(1).map((section) => (
                <EntryPoints  key={section} active={activeSection === section}>
                    <a href={`#${section}`}>{section}</a>
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
