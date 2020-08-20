import styled from 'styled-components';

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font: 1.4rem Poppins;
  color: ${({ theme }) => theme.colors.textComplement};

  & + & {
    margin-top: 1.6rem;
  }
`;

export const Input = styled.input`
  font: 1.6rem Poppins;
  outline: none;
  height: 5.6rem;
  background: ${({ theme }) => theme.colors.boxFooter};
  border: 1px solid ${({ theme }) => theme.colors.lineInWhite};
  color: ${({ theme }) => theme.colors.textBase};
  border-radius: 0.8rem;
  margin-top: 0.8rem;
  padding: 0 2.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;
