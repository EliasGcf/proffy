import styled from 'styled-components';

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;

  font: 1.4rem Poppins;
  color: ${({ theme }) => theme.colors.textComplement};

  div {
    span {
      font: 1.2rem Poppins;
      color: ${({ theme }) => theme.colors.textComplement};
      margin-left: 1.6rem;
    }
  }

  textarea {
    outline: none;
    background: ${({ theme }) => theme.colors.boxFooter};
    border: 1px solid ${({ theme }) => theme.colors.lineInWhite};
    color: ${({ theme }) => theme.colors.textBase};
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    padding: 1.6rem 2.4rem;
    resize: vertical;
    font: 1.6rem Poppins;
    min-height: 8rem;
    height: 23rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholder};
    }
  }
`;
