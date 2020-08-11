import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: ${({ theme }) => `1px solid ${theme.colors.lineInWhite}`};
    outline: none;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${({ theme }) => theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;
