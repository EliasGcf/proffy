import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import ProfileBackground from '../../assets/images/profile-background.svg';

import { LabelContainer as LabelTextAreaContainer } from '../../components/TextArea/styles';
import { LabelContainer as LabelInputWithLabelContainer } from '../../components/InputWithLabel/styles';

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
  border-radius: 0.8rem;
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

  @media (min-width: 700px) {
    margin-bottom: 8rem;
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
  }
`;

export const InputGroup = styled.div`
  margin-top: 2.4rem;

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;

    ${LabelInputWithLabelContainer} {
      margin: 0;
    }

    ${LabelInputWithLabelContainer} + ${LabelInputWithLabelContainer}  {
      margin-left: 3.2rem;
    }
  }
`;
