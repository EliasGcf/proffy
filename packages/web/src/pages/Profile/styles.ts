import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import ProfileBackground from '../../assets/images/profile-background.svg';

import { LabelContainer as LabelTextAreaContainer } from '../../components/TextArea/styles';
import { LabelContainer as LabelInputWithLabelContainer } from '../../components/InputWithLabel/styles';
import { LabelContainer as LabelSimpleSelectContainer } from '../../components/SimpleSelect/styles';
import { ButtonContainer } from '../../components/Button/styles';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

export const Banner = styled.div`
  background: url(${ProfileBackground}) no-repeat center;
  height: 47.2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 18rem;
    width: 18rem;
    border-radius: 50%;
  }

  h1 {
    font: 3.6rem Archivo;
    color: ${({ theme }) => theme.colors.titleInPrimary};
    font-weight: 700;
    margin-top: 3.2rem;
  }

  span {
    font: 2.4rem Poppins;
    color: ${({ theme }) => theme.colors.textInPrimary};
    margin-top: 0.8rem;
  }
`;

export const Form = styled(Unform)`
  background: ${({ theme }) => theme.colors.boxBase};
  margin-top: -6.4rem;
  border-radius: 0.8rem 0.8rem 0 0;
  padding: 5.6rem 6.4rem;

  /* display: flex; */
  max-width: 73.6rem;
  margin: -6.4rem auto 0 auto;

  h2 {
    font: 2.4rem Archivo;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTitle};
  }

  ${LabelTextAreaContainer} {
    margin-top: 1.6rem;
  }
`;

export const Block = styled.fieldset`
  border: none;

  & + fieldset {
    margin-top: 6.4rem;
  }

  legend {
    font: 2.4rem Archivo;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTitle};
    width: 100%;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.lineInWhite}`};
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      outline: none;
      font: 1.6rem Archivo;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const InputGroup = styled.div`
  & + & {
    margin-top: 1.6rem;
  }

  ${LabelSimpleSelectContainer} + ${LabelInputWithLabelContainer} {
    margin-top: 1.6rem;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;

    ${LabelInputWithLabelContainer} {
      margin: 0;
    }

    ${LabelInputWithLabelContainer} + ${LabelInputWithLabelContainer}  {
      margin-left: 3.2rem;
    }

    ${LabelSimpleSelectContainer} + ${LabelInputWithLabelContainer} {
      margin-top: 0;
      margin-left: 3.2rem;
    }
  }
`;

export const SubmitContainer = styled.div`
  background: ${({ theme }) => theme.colors.boxFooter};
  max-width: 73.6rem;
  margin: 0 auto;
  border-radius: 0 0 0.8rem 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lineInWhite};
  padding: 4rem 6.3rem;

  margin-bottom: 8rem;

  ${ButtonContainer} {
    font: 1.6rem Archivo;
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 1.6rem;
    }

    p {
      font: 1.2rem Poppins;
      color: ${({ theme }) => theme.colors.primary};
      line-height: 2rem;

      span {
        display: block;
        color: ${({ theme }) => theme.colors.textComplement};
      }
    }
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ButtonContainer} {
      max-width: 20rem;
      margin: 0;
    }
  }
`;
