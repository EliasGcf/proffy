import styled from 'styled-components';

export const Container = styled.header`
  height: 6.4rem;
  background: ${({ theme }) => theme.colors.primaryDarker};
  display: flex;
  justify-content: center;

  div {
    max-width: 116.8rem;
    width: 100%;
    padding: 0 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
    }

    span {
      font: 1.6rem Archivo;
      color: ${({ theme }) => theme.colors.textInPrimary};
      font-weight: 500;

      & + svg {
        height: 1.5rem;
        width: 5.2rem;
        path {
          fill: ${({ theme }) => theme.colors.textInPrimary};
        }
      }
    }
  }
`;
