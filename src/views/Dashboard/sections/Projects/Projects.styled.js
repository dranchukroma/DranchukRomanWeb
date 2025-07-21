import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const ContentWrapper = styled.div`
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

export const Card = styled.div`
    width: ${({ $widthCount }) => {
        if ($widthCount === 1) {
            return 30
        } else if ($widthCount === 2) {
            return 65
        } else {
            return 100
        }
    }}%;

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
    }
`
export const CardPreview = styled.div`
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
export const CardInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`
export const CardInfoWrapper = styled.div`
    
`

export const ProjectName = styled.h3`
    font-size: 20px;
    font-weight: ${theme.fontWeight.semiBold};
`
export const ProjectDescription = styled.p`

`
