import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { getValidationErrors } from '@proffy/utils';

import { ProffyLogo } from '../../assets/images';
import { PurpleHeartIcon } from '../../assets/images/icons';
import Input from '../../components/Input';

import CheckBox from './components/CheckBox';

import { Container, Content, Info, OptionsBlock, Footer } from './styles';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          password: Yup.string().required('Senha é obrigatória'),
          remember: Yup.boolean(),
        });

        await schema.validate(data, { abortEarly: false });

        setLoading(true);

        await signIn({
          email: data.email,
          password: data.password,
          remember: data.remember,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Info>
        <div>
          <ProffyLogo />
          <h2>
            Sua plataforma de <br />
            estudos online.
          </h2>
        </div>
      </Info>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer Login</h1>

          <Input
            label="E-mail"
            name="email"
            placeholder="E-mail"
            type="email"
            autoFocus
            disabled={loading}
          />
          <Input
            label="Senha"
            name="password"
            placeholder="Senha"
            type="password"
            disabled={loading}
          />

          <OptionsBlock>
            <CheckBox name="remember" disabled={loading} />

            <a href="/">Esqueci minha senha</a>
          </OptionsBlock>

          <button disabled={loading} type="submit">
            Entrar
          </button>
        </Form>

        <Footer>
          <span>
            Não tem conta? <br />
            <a href="/">Cadastre-se</a>
          </span>

          <small>
            É de graça <PurpleHeartIcon />
          </small>
        </Footer>
      </Content>
    </Container>
  );
};

export default SignIn;
