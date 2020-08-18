import styled from 'styled-components';

import { HeaderContent } from '../../components/PageHeader/styles';
import { InputContainer } from '../../components/Input/styles';
import { LabelContainer as SelectLabelContainer } from '../../components/SimpleSelect/styles';
import { LabelContainer } from '../../components/TextArea/styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  max-width: 700px;

  main {
    background: ${({ theme }) => theme.colors.boxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    label {
      color: ${({ theme }) => theme.colors.textComplement};
    }
  }

  ${HeaderContent} {
    margin-bottom: 6.3rem;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    ${HeaderContent} {
      margin-bottom: 0;
    }
  }
`;

export const Block = styled.fieldset`
  border: none;
  padding: 0 2.4rem;

  & + fieldset {
    margin-top: 6.4rem;
  }

  ${SelectLabelContainer} + ${InputContainer},
  ${InputContainer} + ${InputContainer},
  ${InputContainer} + ${LabelContainer}  {
    margin-top: 2.4rem;
  }

  legend {
    font: 700 2.4rem Archivo;
    color: ${({ theme }) => theme.colors.textTitle};
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.lineInWhite}`};

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.primary};
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;

    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }

    .schedule-item ${InputContainer} {
      margin-top: 0;
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: ${({ theme }) => theme.colors.boxFooter};
  border-top: ${({ theme }) => `1px solid ${theme.colors.lineInWhite}`};
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.textComplement};

    img {
      margin-right: 2rem;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.buttonText};
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
