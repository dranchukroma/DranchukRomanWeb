import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
    width: 1140px;
    margin: 0 auto;
    padding: 0 10px;

    @media (max-width: ${theme.breakpoints.desktop}) {
        width: 930px;
    }
    @media (max-width: ${theme.breakpoints.bigTablet}) {
        width: 690px;
    }
    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 510px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 290px;
    }
`