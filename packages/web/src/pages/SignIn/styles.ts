import styled from 'styled-components';
import { darken } from 'polished';
import { Form as Unform } from '@unform/web';

import backgroundAsset from '../../assets/images/background-asset.svg';

import { InputContainer } from '../../components/Input/styles';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: 730px) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  flex: 1;
  background: url(${backgroundAsset}) no-repeat center;

  svg {
    max-width: 33.5rem;
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textInPrimary};
    font-weight: 400;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25rem;

  @media (min-width: 730px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};

  padding: 0 2.4rem;

  @media (min-width: 730px) {
    width: 45%;
  }
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 350px;

  h1 {
    font: 3.6rem Poppins;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTitle};
    margin-bottom: 4rem;
  }

  ${InputContainer} {
    border-radius: 0.8rem 0.8rem 0 0;
  }

  ${InputContainer} + ${InputContainer} {
    border-radius:  0 0 0.8rem 0.8rem;
  }
`;

export const OptionsBlock = styled.div`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.textComplement};

    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => darken(0.3, theme.colors.textComplement)};
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 12.8rem;
  width: 100%;
  max-width: 350px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    line-height: 3.2rem;
    color: ${({ theme }) => theme.colors.textBase};

    a {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};

      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }

  small {
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.8rem;
    }
  }
`;
