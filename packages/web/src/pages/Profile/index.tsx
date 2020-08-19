import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { FormHandles } from '@unform/core';
import { formatPrice } from '@proffy/utils';

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

interface Class {
  id: string;
  cost: string;
  cost_formatted: string;
  subject: string;
  class_schedule: Array<{
    id: string;
    week_day: number;
    from: number;
    to: number;
  }>;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const scheduleForm = useRef<FormHandles>(null);
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

      formRef.current?.setData({
        subject: options[0],
        cost: classes[0]?.cost_formatted,
      });
      setSelectedSubjectValue(0);
      return options;
    }

    return [];
  }, [classes]);

  const handleSubjectSelectChange = useCallback(
    option => {
      formRef.current?.setFieldValue(
        'cost',
        classes[option?.value]?.cost_formatted,
      );
    },
    [classes],
  );

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

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
        {/* <span>Fisica</span> */}
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

            {classes[selectedSubjectValue].class_schedule.map(schedule => (
              <Schedule key={schedule.id} schedule={schedule} />
            ))}
          </Block>
        )}
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
