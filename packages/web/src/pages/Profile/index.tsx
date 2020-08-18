import React, { useCallback, useRef, useMemo } from 'react';
import { FormHandles } from '@unform/core';

import { WarningIcon } from '../../assets/images/icons';

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

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();
  const initialFormData = useMemo(() => {
    return {
      name: user.name,
      email: user.email,
      whatsapp: user.whatsapp,
      bio: user.bio,
    };
  }, [user]);

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
        <h1>{user.name}</h1>
        {/* <span>Fisica</span> */}
      </Banner>

      <Form initialData={initialFormData} ref={formRef} onSubmit={handleSubmit}>
        <Block>
          <legend>Seus dados</legend>

          <InputGroup>
            <InputWithLabel label="Nome" name="name" />
            <InputWithLabel label="Sobrenome" name="lastname" />
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
              noOptionsMessage={() => 'Nenhuma opção disponível'}
            />
            <InputWithLabel label="Custo da sua hora por aula" name="cost" />
          </InputGroup>
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

export default Profile;
