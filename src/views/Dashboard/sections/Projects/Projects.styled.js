import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const ProjectWrapper = styled.div`
    position: relative;
`

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

export const Circle = styled.div`
  position: fixed;
  width: ${({ active }) => (active ? 140 : 40)}px;
  height: ${({ active }) => (active ? 140 : 40)}px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  pointer-events: none; 
  cursor: ${({ active }) => (active ? 'pointer' : 'none')};
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease, backdrop-filter 0.3s ease;
  opacity: ${({ opacity }) => (opacity)};
  z-index: 10;
  backdrop-filter: ${({ active }) => (active ? 'blur(3px) invert(1)' : 'none')};

  display: flex;
  justify-content: center;
  align-items: center;

`

export const CircleDescription = styled.p`
    height: ${({ active }) => (active ? 30 : 0)}px;
    opacity: ${({ active }) => (active ? 1 : 0)};
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.main};
    overflow: hidden;
    white-space: nowrap;
    transition: height 0.3s ease, opacity 0.3s ease;
`