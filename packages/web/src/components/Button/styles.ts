import styled from 'styled-components';

export const ButtonContainer = styled.button`
  border: none;
  margin-top: 4rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};

  height: 5.6rem;
  border-radius: 0.8rem;
  font: 1.6rem Archivo;
  color: ${({ theme }) => theme.colors.buttonText};
  outline: none;

  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.buttonNotAvailable};
    color: ${({ theme }) => theme.colors.textComplement};
    cursor: not-allowed;
  }
`;
