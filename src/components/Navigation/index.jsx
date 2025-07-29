import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useScroll } from "../../context/ScrollContext";
import AnimatedBackground from '../../components/AnimatedBackground'

function Navigation() {
    const navigate = useNavigate();
    const [isDesktop, setWindowWidth] = useState(window.innerWidth > 576);
    const [mobileNavStatus, setMobileNav] = useState(false);

    const { sectionIds, activeSection } = useScroll();

    const handleClick = (id) => {
        navigate(`/#${id}`);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth > 576);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Sections = (
        <EntryPointsWrapper>
            {sectionIds.slice(1).map((sectionId) => (
                <EntryPoints
                    key={sectionId}
                    active={activeSection === sectionId}
                    onClick={() => handleClick(sectionId)}
                >
                    {sectionId}
                </EntryPoints>
            ))}
        </EntryPointsWrapper>
    );

    return (
        <NavWrapper>
            <AnimatedBackground>
                <Container>
                    {isDesktop ? (
                        <DesktopNavWrapper>
                            <PageIcon
                                onClick={() => handleClick('Header')}
                            />
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
            </AnimatedBackground>
        </NavWrapper>
    );
}

export default Navigation;
