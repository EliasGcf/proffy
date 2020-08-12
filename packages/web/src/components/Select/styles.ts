import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;

  /* & + div {
    margin-top: 1.4rem;
  } */

  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: ${({ theme }) => `1px solid ${theme.colors.lineInWhite}`};
    outline: none;
    padding: 0 1.6rem;
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
    bottom: 0;
  }
`;
