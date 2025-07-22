import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterWrapper = styled.footer`
    padding: 30px 0 10px 0;
`

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const IconWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    text-decoration: none;
    color: black;
    
    min-width: 145px;
    box-sizing: border-box;
    padding: 10px;

    border-radius: 15px;

    transition: background-color 0.3s ease;

    @media (max-width: ${theme.breakpoints.mobile}) {
        justify-content: left;
    }

    > p{
        font-weight: ${theme.fontWeight.semiBold}
    }

    &:hover {
        background-color: ${theme.colors.lightWhite}
    }
`

export const Rights = styled.p`
    margin-top: 10px;
    text-align: center;
    line-height: 1.2em;

    
`