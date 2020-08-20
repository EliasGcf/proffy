// This page needs to be refactored
import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { FormHandles, Scope } from '@unform/core';
import {
  formatPrice,
  convertMinutsToHours,
  convertHoursToMinutes,
} from '@proffy/utils';

import { WarningIcon } from '../../assets/images/icons';

import api from '../../services/api';

import Header from '../../components/Header';
import InputWithLabel from '../../components/InputWithLabel';
import TextArea from '../../components/TextArea';
import Select from '../../components/SimpleSelect';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Banner,
  Form,
  InputGroup,
  Block,
  SubmitContainer,
} from './styles';
import Schedule from './components/Schedule';

export interface ClassSchedule {
  id: string;
  week_day: number;
  from: number;
  from_formatted: string;

  to: number;
  to_formatted: string;
}

interface Class {
  id: string;
  cost: string;
  cost_formatted: string;
  subject: string;
  class_schedule: ClassSchedule[];
}

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  whatsapp: string;
  bio: string;
  class: {
    subject: number;
    cost: string;
    class_schedule?: Array<{
      week_day: string;
      from: string;
      to: string;
    }>;
    newClassSchedules?: Array<{
      from: string;
      to: string;
      class_id: string;
      week_day: string;
    }>;
  };
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [classes, setClasses] = useState<Class[]>([]);
  const [newClassSchedules, setNewClassSchedules] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubjectValue, setSelectedSubjectValue] = useState<
    null | number
  >(null);

  const { user, updateUser } = useAuth();

  useEffect(() => {
    api.get<{ classes: Class[] }>('/users/me').then(response => {
      const data = response.data.classes.map(classOption => ({
        ...classOption,
        cost_formatted: formatPrice(classOption.cost),
        class_schedule: classOption.class_schedule.map(classSchedule => ({
          ...classSchedule,
          to_formatted: convertMinutsToHours(classSchedule.to),
          from_formatted: convertMinutsToHours(classSchedule.from),
        })),
      }));

      setLoading(false);
      setClasses(data);
    });
  }, []);

  const initialFormData = useMemo(() => {
    return {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      whatsapp: user.whatsapp,
      bio: user.bio,
    };
  }, [user]);

  const subjectOptions = useMemo(() => {
    if (classes.length !== 0) {
      const options = classes.map((classOption, index) => ({
        value: index,
        label: classOption.subject,
      }));

      return options;
    }

    return [];
  }, [classes]);

  const handleSubjectSelectChange = useCallback(
    (option: any) => {
      formRef.current?.setData({
        class: {
          cost: classes[option?.value]?.cost,
        },
      });

      setSelectedSubjectValue(option?.value);
      // setNewClassSchedules([]);
    },
    [classes],
  );

  const handleRemoveClassScheduleFromState = useCallback((id: string) => {
    setClasses(state =>
      state.map(classOption => ({
        ...classOption,
        class_schedule: classOption.class_schedule.filter(
          classSchedule => classSchedule.id !== id,
        ),
      })),
    );
  }, []);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setLoading(true);

        const userData = {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          whatsapp: data.whatsapp,
          bio: data.bio,
        };

        const userResponse = await api.put('/users', userData);

        updateUser(userResponse.data);

        if (selectedSubjectValue !== null) {
          const classData: any = {
            ...data.class,
            subject: subjectOptions[data.class.subject].label,
            class_schedule: [],
          };

          if (data.class.class_schedule) {
            classData.class_schedule = data.class.class_schedule.map(
              (classSchedule, index) => ({
                ...classes[selectedSubjectValue].class_schedule[index],
                ...classSchedule,
                from: convertHoursToMinutes(classSchedule.from),
                to: convertHoursToMinutes(classSchedule.to),
              }),
            );
          }

          if (data.class.newClassSchedules) {
            const classSchedules = data.class.newClassSchedules.map(
              schedule => ({
                ...schedule,
                class_id: classes[selectedSubjectValue].id,
                to: convertHoursToMinutes(schedule.to),
                from: convertHoursToMinutes(schedule.from),
              }),
            );

            classData.class_schedule = [
              ...classData.class_schedule,
              ...classSchedules,
            ];
          }

          const classResponse = await api.put(
            `/classes/${classes[selectedSubjectValue].id}`,
            classData,
          );

          const formatedClassResponse = {
            ...classResponse.data,
            cost_formatted: formatPrice(classResponse.data.cost),
            class_schedule: classResponse.data.class_schedule.map(
              (classSchedule: any) => ({
                ...classSchedule,
                to_formatted: convertMinutsToHours(classSchedule.to),
                from_formatted: convertMinutsToHours(classSchedule.from),
              }),
            ),
          };

          setClasses(
            classes.map(classOption =>
              classOption.id === classes[selectedSubjectValue].id
                ? formatedClassResponse
                : classOption,
            ),
          );
          setNewClassSchedules([]);
        }
      } catch (err) {
        console.log(err);
        // eslint-disable-next-line no-alert
        alert('Não foi possivel salvar o cadastro, tente novamente mais tarde');
      } finally {
        // eslint-disable-next-line no-alert
        alert('Cadastro atualizado com sucesso!');
        setLoading(false);
      }
    },
    [classes, selectedSubjectValue, subjectOptions, updateUser],
  );

  return (
    <Container>
      <Header backTo="/landing" title="Meu Perfil" />
      <Banner>
        <img
          src={
            user.avatar ||
            'https://api.adorable.io/avatars/180/abott@adorable.png'
          }
          alt="Profile"
        />
        <h1>{user.first_name}</h1>
        {selectedSubjectValue !== null && (
          <span>{subjectOptions[selectedSubjectValue].label}</span>
        )}
      </Banner>

      <Form initialData={initialFormData} ref={formRef} onSubmit={handleSubmit}>
        <Block>
          <legend>Seus dados</legend>

          <InputGroup>
            <InputWithLabel label="Nome" name="first_name" />
            <InputWithLabel label="Sobrenome" name="last_name" />
          </InputGroup>

          <InputGroup>
            <InputWithLabel label="E-mail" name="email" type="email" />
            <InputWithLabel
              label="Whatsapp"
              name="whatsapp"
              placeholder="(  ) _ ____ ____"
            />
          </InputGroup>

          <TextArea
            name="bio"
            label="Biografia"
            message="(Máximo 300 caracteres)"
          />
        </Block>

        <Scope path="class">
          <Block>
            <legend>Sobre a aula</legend>
            <InputGroup>
              <Select
                name="subject"
                label="Matéria"
                placeholder="Selecione uma matéria"
                options={subjectOptions}
                noOptionsMessage={() => 'Nenhuma opção disponível'}
                onChange={handleSubjectSelectChange}
              />
              <InputWithLabel label="Custo da sua hora por aula" name="cost" />
            </InputGroup>
          </Block>

          {selectedSubjectValue !== null && (
            <Block>
              <legend>
                Horários disponívies
                <button
                  onClick={() => {
                    setNewClassSchedules(state => [...state, state.length]);
                  }}
                  type="button"
                >
                  + Novo horário
                </button>
              </legend>

              {classes[selectedSubjectValue].class_schedule.map(
                (schedule, index) => (
                  <Scope path={`class_schedule[${index}]`} key={schedule.id}>
                    <Schedule
                      removeSchedule={handleRemoveClassScheduleFromState}
                      schedule={schedule}
                    />
                  </Scope>
                ),
              )}

              {newClassSchedules.length !== 0 &&
                newClassSchedules.map(value => (
                  <Scope key={value} path={`newClassSchedules[${value}]`}>
                    <Schedule />
                  </Scope>
                ))}
            </Block>
          )}
        </Scope>
      </Form>

      <SubmitContainer>
        <div>
          <WarningIcon />
          <p>
            Important
            <span>Preencha todos os dados corretamente.</span>
          </p>
        </div>
        <Button
          isLoading={loading}
          disabled={loading}
          onClick={() => formRef.current?.submitForm()}
        >
          Salvar cadastro
        </Button>
      </SubmitContainer>
    </Container>
  );
};

export default Profile;
