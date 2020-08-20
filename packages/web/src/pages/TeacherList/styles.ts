import styled from 'styled-components';

import { InputContainer } from '../../components/Input/styles';
import { LabelContainer } from '../../components/SimpleSelect/styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  > main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const FormSearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${({ theme }) => theme.colors.textInPrimary};
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

  ${InputContainer}, ${LabelContainer} {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    ${InputContainer}, ${LabelContainer} {
      margin-top: 0;
    }
  }
`;
