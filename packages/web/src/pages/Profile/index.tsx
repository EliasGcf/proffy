import React, { useCallback } from 'react';

import Header from '../../components/Header';
import InputWithLabel from '../../components/InputWithLabel';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import { Container, Banner, Form, InputGroup, Block } from './styles';

const Profile: React.FC = () => {
  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header backTo="/landing" title="Meu Perfil" />
      <Banner>
        <img src="https://github.com/EliasGcf.png" alt="Profile" />
        <h1>Elias Gabriel</h1>
        <span>Fisica</span>
      </Banner>
      <Form onSubmit={handleSubmit}>
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
              options={[
                { value: '1', label: 'Geografia' },
                { value: '2', label: 'Geografia' },
              ]}
            />
          </InputGroup>
        </Block>
      </Form>
    </Container>
  );
};

export default Profile;
