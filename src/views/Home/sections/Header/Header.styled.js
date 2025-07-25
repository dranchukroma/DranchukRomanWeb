import styled from "styled-components";
import { theme } from '../../../../styles/theme';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: left;

    @media (max-width: ${theme.breakpoints.bigTablet}) {
        > div{
            display: flex;
            justify-content: center;
        }
    }
`

export const HeaderCard = styled.div`
    width: max-content;
    margin-top: -100px;
    padding: 40px;
    border-radius: 30px;

    background-color: ${theme.colors.lightWhite}80;

    p, h1 {
        font-weight: ${theme.fontWeight.semiBold}
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 20px;
    }
`

export const FullName = styled.h1`
    font-size: 70px;
    margin-bottom: 10px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 50px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 30px;
    }
`

export const Position = styled.p`
    font-size: 56px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 40px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 25px;
    }
`