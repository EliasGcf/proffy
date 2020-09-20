import React, { useState, useCallback, useRef } from 'react';
import { Scope, FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { RocketIcon, WarningIcon } from '../../assets/images/icons';

import api from '../../services/api';

import Header from '../../components/Header';
import Select from '../../components/SimpleSelect';
import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Banner,
  Form,
  Block,
  InputGroup,
  SubmitContainer,
  ProfileGroup,
} from './styles';
import Schedule from './components/Schedule';
import Success from './components/Success';

interface FormData {
  user: {
    bio: string;
    whatsapp: string;
  };
  subject: string;
  cost: number;
  schedule: Array<{
    id: string;
    week_day: number;
    from: number;

    to: number;
  }>;
}

const ClassForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [newSchedules, setNewSchedules] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [subjectOptions, setSubjectOptions] = useState([
    { value: 'Biologia', label: 'Biologia' },
    { value: 'Física', label: 'Física' },
    { value: 'Geografia', label: 'Geografia' },
    { value: 'História', label: 'História' },
    { value: 'Inglês', label: 'Inglês' },
    { value: 'Matemática', label: 'Matemática' },
    { value: 'Português', label: 'Português' },
    { value: 'Química', label: 'Química' },
  ]);

  const { push } = useHistory();
  const { user: AuthUser, updateUser } = useAuth();

  const handleRemoveSchedule = useCallback((index: number) => {
    setNewSchedules(state => state.filter(value => value !== index));
  }, []);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        const { subject, cost, schedule, user } = data;

        const requests = [api.put('users', user)];

        if (subject && cost && schedule.length !== 0) {
          requests.push(
            api.post('classes', {
              subject,
              cost,
              schedule,
            }),
          );
        }

        await Promise.all(requests);

        updateUser({
          ...AuthUser,
          ...user,
        });

        // eslint-disable-next-line no-alert
        setShowSuccess(true);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert('Não foi possivel criar aula, tente novamente mais tarde.');
      }
    },
    [AuthUser, updateUser],
  );

  if (showSuccess) {
    return <Success />;
  }

  return (
    <Container>
      <Header backTo="/landing" title="Dar aulas" />
      <Banner>
        <div>
          <h1>Que incrível que você quer dar aulas.</h1>
          <div>
            <span>
              O primeiro passo, é preencher esse formulário de inscrição.
            </span>
            <small>
              <RocketIcon />
              Preparare-se! vai ser o máximo.
            </small>
          </div>
        </div>
      </Banner>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Block>
          <legend>Seus dados</legend>

          <Scope path="user">
            <ProfileGroup>
              <div>
                <aside>
                  <img
                    src={
                      AuthUser.avatar ||
                      'https://api.adorable.io/avatars/80/abott@adorable.png'
                    }
                    alt="Profile"
                  />
                  <strong>Elias Gabriel</strong>
                </aside>
                <InputWithLabel
                  label="Whatsapp"
                  name="whatsapp"
                  placeholder="(  ) _ ____ ____"
                  defaultValue={AuthUser.whatsapp}
                />
              </div>
              <TextArea
                name="bio"
                label="Biografia"
                message="(Máximo 300 caracteres)"
                defaultValue={AuthUser.bio}
              />
            </ProfileGroup>
          </Scope>
        </Block>

        <Block>
          <legend>Sobre a aula</legend>

          <InputGroup>
            <Select
              name="subject"
              label="Matéria"
              placeholder="Selecione qual você quer ensinar"
              options={subjectOptions}
              noOptionsMessage={() => 'Nenhuma opção disponível'}
              // onChange={handleSubjectSelectChange}
            />
            <InputWithLabel
              type="number"
              label="Custo da sua hora por aula"
              name="cost"
            />
          </InputGroup>
        </Block>

        <Block>
          <legend>
            Horários disponíveis
            <button
              onClick={() => {
                setNewSchedules(state => [...state, state.length]);
              }}
              type="button"
            >
              + Novo horário
            </button>
          </legend>

          {newSchedules.map(value => (
            <Scope key={value} path={`schedule[${value}]`}>
              <Schedule removeSchedule={() => handleRemoveSchedule(value)} />
            </Scope>
          ))}
        </Block>
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

export default ClassForm;
