import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const IconWrapper = styled.div`
    width: 77px;
    height: 77px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {    
        font-weight: ${theme.fontWeight.semiBold}
    }

    .name {
        font-size: 16px;
        margin-bottom: -2px;
    }
    .surname {
        font-size: 11.5px;
    }
`