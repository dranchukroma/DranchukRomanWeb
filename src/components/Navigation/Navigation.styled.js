import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NavWrapper = styled.nav`
    width: 100%;
    padding: 11px 0;
    position: fixed;
    z-index: 1000;

    > :first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const EntryPointsWrapper = styled.ul`
    @media (max-width: ${theme.breakpoints.mobile}) {
        display: flex;
        justify-content: space-between;
    }
`

export const EntryPoints = styled.li`
    display: inline;
    margin-left: 10px;
    font-size: 20px;
    padding: 10px;
    border-radius: 15px;
    transition: background-color 0.3s ease;

    background-color: ${({ active }) => active ? theme.colors.lightWhite : "transparent"};

    &:hover {
        background-color: ${theme.colors.lightWhite};
    }

    &:first-child {
        margin-left: 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 15px;
        padding: 5px;
    }
`

export const DesktopNavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const MobileNavWrapper = styled.div`
    width: 100%;
`
export const MobileButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const BurgerWrapper = styled.div`
    width: 77px;
    height: 77px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

export const BurgerElement = styled.div`
  width: 40px;
  height: 7px;
  background-color: black;
  border-radius: 10px;
  transition: all ease 0.3s;

  margin-bottom: ${({ active, position }) =>
        active && position === "top" ? "-10px" : "0"};

  margin-top: ${({ active, position }) =>
        active && position === "bottom" ? "-10px" : "0"};

  transform: ${({ active, position }) => {
        if (!active) return "rotate(0deg)";
        if (position === "middle") return "rotate(45deg)";
        if (position === "bottom") return "rotate(-45deg)";
        return "rotate(45deg)";
    }};
`;

export const SliderElement = styled.div`
    overflow: hidden;
    margin-top: 10px;
    height: ${({ open }) => open ? '30px' : '0'};
    transition: height 0.4s cubic-bezier(.4,0,.2,1);
`
