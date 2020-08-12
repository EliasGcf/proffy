import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.textInPrimary};
  background: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  > img {
    width: 100%;
  }

  > span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 700px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';

    > img {
      grid-area: hero;
      justify-self: end;
    }

    > span {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  img {
    height: 10rem;
  }

  @media (min-width: 700px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonText};

    transition: background-color 0.3s;

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &:first-child {
      margin-right: 1.6rem;
      background: ${({ theme }) => theme.colors.primaryLighter};

      &:hover {
        background: ${({ theme }) => theme.colors.primaryLight};
      }
    }

    &:nth-child(2) {
      background: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background: ${({ theme }) => theme.colors.secondaryDark};
      }
    }
  }

  @media (min-width: 700px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;
