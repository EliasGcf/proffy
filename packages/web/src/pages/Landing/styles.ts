import styled from 'styled-components';
import { darken } from 'polished';

import { ButtonContainer } from '../../components/Button/styles';

export const Container = styled.div`
  height: 100vh;

  /* display: flex;
  flex-direction: column;
  align-items: center; */

  background: ${({ theme }) => theme.colors.background};
`;

export const TopContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    height: 70vh;
  }
`;

export const Header = styled.header`
  max-width: 116.8rem;
  width: 100%;
  padding: 2.4rem 2.4rem 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
    }

    span {
      font: 1.6rem Poppins;
      color: ${({ theme }) => theme.colors.textInPrimary};
      font-weight: 400;
      margin-left: 1.6rem;
    }

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    border: none;
    height: 4rem;
    width: 4rem;
    border-radius: 0.8rem;

    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.primaryDark};

    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => darken(0.03, theme.colors.primaryDark)};
    }
  }
`;

export const LogoContainer = styled.div`
  max-width: 116.8rem;
  width: 100%;
  padding: 0 2.4rem 5.6rem 2.4rem;
  margin-top: 6.4rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: ${({ theme }) => theme.colors.textInPrimary};
      font-family: Poppins;
      font-weight: 400;
      max-width: 32rem;
      text-align: center;
    }
  }

  > svg {
    width: 100%;
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
    margin: auto 0;

    div {
      align-items: flex-start;
      h1 {
        text-align: left;
      }
    }

    > svg {
      width: initial;
    }
  }
`;

export const Footer = styled.footer`
  max-width: 116.8rem;
  width: 100%;
  padding: 5.6rem 2.4rem 5.6rem 2.4rem;
  margin: 0 auto;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font: 2rem Poppins;
    font-weight: 400;
    strong {
      display: block;
    }
  }

  small {
    max-width: 14rem;
    font: 1.2rem Poppins;
    color: ${({ theme }) => theme.colors.textComplement};
    text-align: right;
    line-height: 2.6rem;

    svg {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 900px) {
    width: 48%;
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;

  ${ButtonContainer} {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary};
    height: 10.4rem;
    padding: 0 2.4rem;

    font: 2.4rem Archivo;
    font-weight: 700;

    svg {
      margin-right: 2.4rem;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  ${ButtonContainer} + ${ButtonContainer} {
    background: ${({ theme }) => theme.colors.secondary};
    margin-left: 1.6rem;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  @media (min-width: 900px) {
    margin-top: 0;
    width: 46%;
  }
`;
