import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const ProjectWrapper = styled.div`
    position: relative;
`

export const CardsWrapper = styled.div`
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div{
        margin-bottom: 30px;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-wrap: no-wrap;
    }

`

export const CardsContainer = styled.div`
    width: ${({ mockupCount }) => {
        if (mockupCount === 1) {
            return 30
        } else if (mockupCount === 2) {
            return 65
        } else {
            return 100
        }
    }}%;

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
    }
`
export const ProjectPreview = styled.div`
    position: relative;

    padding: 20px;
    border-radius: 20px;

    display: flex;
    justify-content: space-around;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: 40px;
    }

`
export const CardImg = styled.img`
    height: 300px;

    @media (max-width: ${theme.breakpoints.desktop}) {
        height: 230px;
    }
    @media (max-width: ${theme.breakpoints.bigTablet}) {
        height: 170px;
    }
    @media (max-width: ${theme.breakpoints.tablet}) {
        height: 120px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
        height: auto;
    }
`
export const ProjectLabelWrapper = styled.div`
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProjectName = styled.h3`
    font-size: 20px;
    font-weight: ${theme.fontWeight.semiBold};
`
export const ProjectDescription = styled.p``

export const MouseFocurCircle = styled.div`
    position: fixed;
    top: ${({ top }) => (top || '0')}px;
    left: ${({ left }) => (left || '0')}px;
    z-index: 10;

    width: ${({ focus }) => (focus ? 140 : 40)}px;
    height: ${({ focus }) => (focus ? 140 : 40)}px;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: ${({ focus }) => (focus ? 'blur(3px) invert(1)' : 'none')};
    opacity: ${({ opacity }) => (opacity)};

    transform: translate(-50%, -50%);
    transition: 
        opacity 0.3s ease, 
        width 0.3s ease, 
        height 0.3s ease, 
        backdrop-filter 0.3s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: ${({ focus }) => (focus ? 'pointer' : 'none')};
    pointer-events: none; 
`

export const MouseFocurLabel = styled.p`
    height: ${({ focus }) => (focus ? 30 : 0)}px;
    opacity: ${({ focus }) => (focus ? 1 : 0)};

    overflow: hidden;

    color: ${theme.colors.white};

    font-family: ${theme.fontFamily.main};
    white-space: nowrap;

    transition: height 0.3s ease, opacity 0.3s ease;
`