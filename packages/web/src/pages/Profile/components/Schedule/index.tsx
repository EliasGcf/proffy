import React, { useMemo, useCallback } from 'react';

import api from '../../../../services/api';

import SimpleSelect from '../../../../components/SimpleSelect';
import InputWithLabel from '../../../../components/InputWithLabel';
import { ClassSchedule } from '../../index';

import { ScheduleContainer, DeleteContainer, Divisor } from './styles';

interface ScheduleProps {
  schedule?: ClassSchedule;
  removeSchedule?: (id: string) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ schedule, removeSchedule }) => {
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

  const handleDeleteSchedule = useCallback(async () => {
    if (schedule) {
      await api.delete(`/class-schedule/${schedule.id}`);
      removeSchedule && removeSchedule(schedule.id);
    }
  }, [removeSchedule, schedule]);

  return (
    <>
      <ScheduleContainer>
        <SimpleSelect
          name="week_day"
          label="Dia da semana"
          placeholder="Selecione um dia da semana"
          options={weekDayOptions}
          defaultValue={schedule ? weekDayOptions[schedule.week_day] : null}
        />
        <InputWithLabel
          name="from"
          label="Das"
          defaultValue={schedule?.from_formatted}
          type="time"
        />
        <InputWithLabel
          name="to"
          label="Até"
          defaultValue={schedule?.to_formatted}
          type="time"
        />
      </ScheduleContainer>
      <DeleteContainer>
        <Divisor />
        <button onClick={handleDeleteSchedule} type="button">
          Excluir horário
        </button>
        <Divisor />
      </DeleteContainer>
    </>
  );
};

export default Schedule;
