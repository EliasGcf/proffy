import styled, { css } from 'styled-components';

interface InputContainerProps {
  isField: boolean;
  isErrored: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  height: 7.2rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.inputBackground};
  border: ${({ theme, isErrored }) =>
    `1px solid ${isErrored ? theme.colors.error : theme.colors.lineInWhite}`};
  padding: 0 2.4rem;

  display: flex;

  label {
    font: 1.2rem Poppins;
    color: ${({ theme }) => theme.colors.textComplement};
    position: absolute;
    left: 2.4rem;
    top: 4rem;
    opacity: 0;

    transition: top 0.3s, opacity 0.15s;
  }

  input {
    width: 100%;

    background: ${({ theme }) => theme.colors.inputBackground};
    border: none;
    outline: none;
    font: 1.6rem Poppins;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textComplement};
    }

    &:focus {
      margin-top: 1.6rem;

      ::placeholder {
        color: transparent;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0px 1000px #fff inset;
      transition: 'color 9999s ease-out, background-color 9999s ease-out';
      transition-delay: 9999s;
    }
  }

  ${props =>
    props.isField &&
    css`
      label {
        opacity: 1;
        top: 1.4rem;
      }

      input {
        margin-top: 1.6rem;
      }
    `}

  &:focus-within {
    label {
      opacity: 1;
      top: 1.4rem;
    }

    ::after {
      width: 2px;
      height: 48px;
      content: '';
      background: ${({ theme }) => theme.colors.primaryLight};
      border-radius: 0.8rem;
      position: absolute;
      left: 0;
      bottom: 1.2rem;
      top: 1.2rem;
    }
  }
`;
