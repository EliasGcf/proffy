import React, { useMemo } from 'react';

import SimpleSelect from '../../../../components/SimpleSelect';
import InputWithLabel from '../../../../components/InputWithLabel';

import { FormContainer, DeleteContainer, Divisor } from './styles';

interface ScheduleProps {
  scheduleFormRef:
  schedule: {
    id: string;
    week_day: number;
    from: number;
    to: number;
  };
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }) => {
  const weekDayOptions = useMemo(() => {
    return [
      { value: '0', label: 'Domingo' },
      { value: '1', label: 'Segunda-Feira' },
      { value: '2', label: 'Terça-Feira' },
      { value: '3', label: 'Quarta-Feira' },
      { value: '4', label: 'Quinta-Feira' },
      { value: '5', label: 'Sexta-Feira' },
      { value: '6', label: 'Sabado' },
    ];
  }, []);

  return (
    <>
      <FormContainer
        initialData={{
          to: schedule.to / 60,
          from: schedule.from / 60,
          week_day: weekDayOptions[schedule.week_day],
        }}
        onSubmit={() => null}
      >
        <SimpleSelect
          name="week_day"
          label="Dia da semana"
          options={weekDayOptions}
        />
        <InputWithLabel name="from" label="Das" />
        <InputWithLabel name="to" label="Até" />
      </FormContainer>
      <DeleteContainer>
        <Divisor />
        <button type="button">Excluir horário</button>
        <Divisor />
      </DeleteContainer>
    </>
  );
};

export default Schedule;
