import styled from 'styled-components';

import { LabelContainer as LabelInputWithLabelContainer } from '../../../../components/InputWithLabel/styles';
import { LabelContainer as LabelSimpleSelectContainer } from '../../../../components/SimpleSelect/styles';

export const ScheduleContainer = styled.div`
  & + & {
    margin-top: 2.4rem;
  }

  width: 100%;

  ${LabelSimpleSelectContainer} + ${LabelInputWithLabelContainer} {
    margin-top: 1.6rem;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;


    ${LabelSimpleSelectContainer} {
      max-width: 32rem;
    }

    ${LabelInputWithLabelContainer} {
      margin-top: 0;
      margin-left: 1.6rem;
      max-width: 12.8rem;
    }

    ${LabelSimpleSelectContainer} + ${LabelInputWithLabelContainer} {
      margin-top: 0;
    }
  }
`;

export const Divisor = styled.div`
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.lineInWhite};
  width: 100%;
`;

export const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.6rem 0;

  button {
    margin: 0 2.4rem;
    background: none;
    border: none;
    outline: none;
    font: 1.4rem Archivo;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.error};
    white-space: nowrap;
  }
`;
