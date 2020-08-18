import React, { useState, FormEvent, useCallback } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
// import Select from '../../components/Select';

import { Container, FormSearchTeachers } from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, time, week_day],
  );

  return (
    <Container>
      <PageHeader title="Estes são os Proffys disponívies.">
        <FormSearchTeachers onSubmit={searchTeachers}>
          {/* <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Portugues', label: 'Portugues' },
            ]}
          /> */}

          {/* <Select
            name="week-day"
            label="Dia da Semana"
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sabado' },
            ]}
          /> */}

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </FormSearchTeachers>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </Container>
  );
};

export default TeacherList;
