import styled from "styled-components";
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding-top: 40px;
`

export const Heading = styled.div`
    font-size: 35px;
    font-weight: ${theme.fontWeight.semiBold};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 25px;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background-color: black;
`