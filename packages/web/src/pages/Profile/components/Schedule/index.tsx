import React, { useMemo } from 'react';

import SimpleSelect from '../../../../components/SimpleSelect';
import InputWithLabel from '../../../../components/InputWithLabel';
import { ClassSchedule } from '../../index';

import { ScheduleContainer, DeleteContainer, Divisor } from './styles';

interface ScheduleProps {
  schedule: ClassSchedule;
  formPath: string;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule, formPath }) => {
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
          options={weekDayOptions}
          defaultValue={weekDayOptions[schedule.week_day]}
        />
        <InputWithLabel
          name="from"
          label="Das"
          defaultValue={schedule.from_formatted}
          type="time"
        />
        <InputWithLabel
          name="to"
          label="Até"
          defaultValue={schedule.to_formatted}
          type="time"
        />
      </ScheduleContainer>
      <DeleteContainer>
        <Divisor />
        <button type="button">Excluir horário</button>
        <Divisor />
      </DeleteContainer>
    </>
  );
};

export default Schedule;
