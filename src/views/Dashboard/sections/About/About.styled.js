import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const AboutText = styled.p`
    font-size: 25px;
    padding: 50px 0;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 20px;
    }

`