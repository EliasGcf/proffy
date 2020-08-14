import React, { useCallback, useState, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { getValidationErrors } from '@proffy/utils';

import api from '../../services/api';

import { ProffyLogo } from '../../assets/images';
import { BackIcon } from '../../assets/images/icons';

import Input from '../../components/Input';

import { Container, Content, Form, Info } from './styles';
import Success from './components/Success';

interface SignUpFormData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitAvailable, setSubmitAvailable] = useState(false);

  const handleInputOnChange = useCallback(() => {
    const data = formRef.current?.getData() as SignUpFormData;

    if (data?.name && data?.lastname && data?.email && data?.password) {
      setSubmitAvailable(true);
      return;
    }

    setSubmitAvailable(false);
  }, []);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        lastname: Yup.string().required('Sobre nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      setLoading(true);

      const { name, lastname, email, password } = data;

      await api.post('users', {
        name: `${name} ${lastname}`,
        email,
        password,
      });

      setShowSuccess(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      // eslint-disable-next-line no-alert
      alert('Ocorreu um erro ao efetuar cadastro, tente novamente!');
    } finally {
      setLoading(false);
    }
  }, []);

  if (showSuccess) {
    return <Success />;
  }

  return (
    <Container>
      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          isSubmitAvailable={submitAvailable}
        >
          <Link to="/">
            <BackIcon />
          </Link>

          <h1>Cadastro</h1>
          <span>
            Preencha os dados abaixo
            <br /> para começar.
          </span>
          <Input
            name="name"
            placeholder="Nome"
            autoFocus
            disabled={loading}
            onChange={handleInputOnChange}
          />
          <Input
            name="lastname"
            placeholder="Sobrenome"
            disabled={loading}
            onChange={handleInputOnChange}
          />
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            disabled={loading}
            onChange={handleInputOnChange}
          />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            disabled={loading}
            onChange={handleInputOnChange}
          />

          <button disabled={loading || !submitAvailable} type="submit">
            Entrar
          </button>
        </Form>
      </Content>
      <Info>
        <div>
          <ProffyLogo />
          <h2>
            Sua plataforma de <br />
            estudos online.
          </h2>
        </div>
      </Info>
    </Container>
  );
};

export default SignUp;
