import styled, { css } from 'styled-components';

interface InputContainerProps {
  isField: boolean;
  isErrored: boolean;
  isDisabled: boolean | undefined;
}

interface LabelProps {
  isField: boolean;
  isDisabled: boolean | undefined;
}

interface InputProps {
  isField: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  ${({ theme: { colors }, isErrored, isDisabled }) => css`
    background: ${colors.inputBackground};
    border: ${`1px solid ${isErrored ? colors.error : colors.lineInWhite}`};
    cursor: ${isDisabled ? 'not-allowed' : 'text'};
  `}

  position: relative;
  height: 7.2rem;
  border-radius: 0.8rem;
  padding: 0 2.4rem;
  display: flex;

  &:focus-within {
    label {
      top: 1.4rem;
      font-size: 1.2rem;
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

export const Label = styled.label<LabelProps>`
  ${({ theme: { colors }, isDisabled }) => css`
    color: ${colors.textComplement};
    cursor: ${isDisabled ? 'not-allowed' : 'text'};
  `}

  font: 1.6rem Poppins;
  position: absolute;
  left: 2.4rem;
  top: 2.5rem;

  transition: top 0.3s, font-size 0.3s;

  ${({ isField }) =>
    isField &&
    css`
      top: 1.4rem;
      font-size: 1.2rem;
    `}
`;

export const SInput = styled.input<InputProps>`
  width: 100%;

  background: none;
  border: none;
  outline: none;
  font: 1.6rem Poppins;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    margin-top: 1.6rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ isField }) =>
    isField &&
    css`
      margin-top: 1.6rem;
    `}

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: 'color 9999s ease-out, background-color 9999s ease-out';
    transition-delay: 9999s;
  }
`;
