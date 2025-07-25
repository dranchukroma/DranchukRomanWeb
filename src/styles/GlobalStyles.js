import { createGlobalStyle, keyframes } from "styled-components";
import { theme } from "./theme";

const changingBgColor = keyframes`
  0% {
    background-color: ${theme.colors.bg1};
  }
  20% {
    background-color: ${theme.colors.bg2};
  }
  40% {
    background-color: ${theme.colors.bg3};
  }
  60% {
    background-color: ${theme.colors.bg4};
  }
  80% {
    background-color: ${theme.colors.bg5};
  }
  100% {
    background-color: ${theme.colors.bg6};
  }
`;

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  html {
    scroll-behavior: smooth;
    scroll-margin-top: 100px;
  }

  h1, h2, h3, h4, h5, h6, p, li {
    font-family: ${theme.fontFamily.main};
  }

  .gradient-bg {
    animation: ${changingBgColor} 20s infinite;
  }
`;
