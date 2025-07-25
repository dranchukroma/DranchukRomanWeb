import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  background-color: ${({ color }) => color};
  transition: background-color 2s ease;
`;

