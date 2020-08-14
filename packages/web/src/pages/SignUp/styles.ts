import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

import { InputContainer } from '../../components/Input/styles';
import backgroundAsset from '../../assets/images/background-asset.svg';

interface FormProps {
  isSubmitAvailable: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: 730px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};

  padding: 0 2.4rem;

  @media (min-width: 730px) {
    width: 45%;
  }
`;

export const Form = styled(Unform)<FormProps>`
  width: 100%;
  max-width: 350px;

  a {
    margin-bottom: 1.6rem;
    display: block;
  }

  h1 {
    font: 3.6rem Poppins;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTitle};
    margin-bottom: 2.4rem;
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.textBase};
    margin-bottom: 4rem;
    line-height: 2.6rem;
    display: block;
  }

  ${InputContainer} {
    border-radius: 0.8rem 0.8rem 0 0;
  }
  ${InputContainer} + ${InputContainer} {
    border-radius: 0;
  }
  ${InputContainer} + ${InputContainer} + ${InputContainer} + ${InputContainer} {
    border-radius:  0 0 0.8rem 0.8rem;
  }

  button[type='submit'] {
    border: none;
    margin-top: 4rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.buttonNotAvailable};
    cursor: not-allowed;
    height: 5.6rem;
    border-radius: 0.8rem;
    font: 1.6rem Archivo;
    color: ${({ theme }) => theme.colors.textComplement};
    outline: none;

    transition: background 0.3s;

    &:hover {
      ${({ isSubmitAvailable }) =>
        isSubmitAvailable &&
        css`
          background: ${({ theme }) => theme.colors.secondaryDark};
        `}
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.buttonNotAvailable};
    }

    ${({ isSubmitAvailable }) =>
      isSubmitAvailable &&
      css`
        color: ${({ theme }) => theme.colors.buttonText};
        background: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
      `}
  }
`;

export const Info = styled.div`
  flex: 1;
  background: url(${backgroundAsset}) no-repeat center;

  svg {
    max-width: 33.5rem;
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textInPrimary};
    font-weight: 400;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25rem;

  @media (min-width: 730px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
