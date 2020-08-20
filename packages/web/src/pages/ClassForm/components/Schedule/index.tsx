import React, { useMemo, useCallback } from 'react';

import SimpleSelect from '../../../../components/SimpleSelect';
import InputWithLabel from '../../../../components/InputWithLabel';

import { ScheduleContainer, DeleteContainer, Divisor } from './styles';

interface ScheduleProps {
  removeSchedule: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ removeSchedule }) => {
  const weekDayOptions = useMemo(() => {
    return [
      { value: 0, label: 'Domingo' },
      { value: 1, label: 'Segunda-Feira' },
      { value: 2, label: 'Terça-Feira' },
      { value: 3, label: 'Quarta-Feira' },
      { value: 4, label: 'Quinta-Feira' },
      { value: 5, label: 'Sexta-Feira' },
      { value: 6, label: 'Sabado' },
    ];
  }, []);

  return (
    <>
      <ScheduleContainer>
        <SimpleSelect
          name="week_day"
          label="Dia da semana"
          placeholder="Selecione um dia da semana"
          options={weekDayOptions}
          defaultValue={weekDayOptions[0]}
        />
        <InputWithLabel
          name="from"
          label="Das"
          defaultValue="00:00"
          type="time"
        />
        <InputWithLabel
          name="to"
          label="Até"
          defaultValue="00:00"
          type="time"
        />
      </ScheduleContainer>
      <DeleteContainer>
        <Divisor />
        <button onClick={removeSchedule} type="button">
          Excluir horário
        </button>
        <Divisor />
      </DeleteContainer>
    </>
  );
};

export default Schedule;
