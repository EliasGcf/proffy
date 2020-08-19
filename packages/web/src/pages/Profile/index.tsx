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
    class_schedule: Array<{
      week_day: string;
      from: string;
      to: string;
    }>;
  };
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedSubjectValue, setSelectedSubjectValue] = useState<
    null | number
  >(null);

  const { user } = useAuth();

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
    },
    [classes],
  );

  const handleSubmit = useCallback(
    async (data: FormData) => {
      if (selectedSubjectValue !== null) {
        const classData = {
          ...data.class,
          subject: subjectOptions[data.class.subject].label,
          class_schedule: classes[selectedSubjectValue].class_schedule.map(
            classSchedule => ({
              ...classSchedule,
              ...data.class.class_schedule[selectedSubjectValue],
              to: convertHoursToMinutes(
                data.class.class_schedule[selectedSubjectValue].to,
              ),
              from: convertHoursToMinutes(
                data.class.class_schedule[selectedSubjectValue].from,
              ),
            }),
          ),
        };

        console.log(classData.class_schedule);

        // const response = await api.put(
        //   `/classes/${classes[selectedSubjectValue].id}`,
        //   classData,
        // );

        // setClasses(
        //   classes.map(classOption =>
        //     classOption.id === classes[selectedSubjectValue].id
        //       ? response.data
        //       : classOption,
        //   ),
        // );
      }
    },
    [classes, selectedSubjectValue, subjectOptions],
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
                <button type="button">+ Novo horário</button>
              </legend>

              {classes[selectedSubjectValue].class_schedule.map(
                (schedule, index) => (
                  <Scope path={`class_schedule[${index}]`} key={schedule.id}>
                    <Schedule schedule={schedule} />
                  </Scope>
                ),
              )}
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
        <Button onClick={() => formRef.current?.submitForm()}>
          Salvar cadastro
        </Button>
      </SubmitContainer>
    </Container>
  );
};

export default Profile;
