import styled from 'styled-components';

export const LabelContainer = styled.label`
  width: 100%;

  small {
    font: 1.4rem Poppins;
    color: ${({ theme }) => theme.colors.textComplement};
    display: block;
    margin-bottom: 0.8rem;
  }
`;
