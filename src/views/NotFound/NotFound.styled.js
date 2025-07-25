import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const PageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* або space-between, якщо більше елементів */
  align-items: center;
  padding: 50px 20px;
  text-align: center;
`

export const NotFoundCard = styled.div`
    width: max-content;
    padding: 40px;
    border-radius: 30px;

    background-color: ${theme.colors.lightWhite}80;

    p, h1 {
        font-weight: ${theme.fontWeight.semiBold}
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 20px;
    }
`

export const NotFoundHeader = styled.h1`
    font-size: 70px;
    margin-bottom: 10px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 50px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 30px;
    }
`

export const NotFoundLabel = styled.p`
    font-size: 30px;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 20px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 15px;
    }
`