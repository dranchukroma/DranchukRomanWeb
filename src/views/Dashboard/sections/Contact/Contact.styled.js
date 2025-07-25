import styled from "styled-components"
import { theme } from "../../../../styles/theme"

export const ContactWrapper = styled.div``

export const ContentWrapper = styled.div`
    padding: 50px 0;
    
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: stretch;

    @media (max-width: ${theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`

export const InfoWrapper = styled.div`
    width: max-content;
    padding: 40px 0;

    p, h1 {
        font-weight: ${theme.fontWeight.semiBold}
    }
    
    flex: 1;
`

export const FullName = styled.h1`
    font-size: 50px;
    margin-bottom: 10px;

    @media (max-width: ${theme.breakpoints.bigTablet}) {
        font-size: 40px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 30px;
    }
`

export const Position = styled.p`
    font-size: 40px;

    @media (max-width: ${theme.breakpoints.bigTablet}) {
        font-size: 30px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 23px;
    }
`

export const LinkWrapper = styled.p`
    flex: 1;

    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;
    }
`
export const ContactLink = styled.a`
    height: 100%;
    border-radius: 20px;

    font-size: 25px;
    font-weight: ${theme.fontWeight.semiBold};

    color: black;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    @media (max-width: ${theme.breakpoints.tablet}) {
        height: 100px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        height: 70px;
        font-size: 20px;
    }
`

