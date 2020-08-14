import styled from 'styled-components';

import backgroundAsset from '../../../../assets/images/success-background.svg';

export const Container = styled.div`
  background: url(${backgroundAsset}) no-repeat center;
  background-color: ${({ theme }) => theme.colors.primary};

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font: 5.4rem Archivo;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.titleInPrimary};
    margin: 4rem 0 2.4rem 0;
  }

  span {
    font: 1.6rem Poppins;
    color: ${({ theme }) => theme.colors.textInPrimary};
    line-height: 2.6rem;
  }

  a {
    text-decoration: none;
    margin-top: 8rem;
    height: 5.6rem;
    background: ${({ theme }) => theme.colors.secondary};
    padding: 0 4rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font: 1.6rem Archivo;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.buttonText};

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
`;
