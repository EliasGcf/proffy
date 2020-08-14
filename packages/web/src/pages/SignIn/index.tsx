import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { getValidationErrors } from '@proffy/utils';

import { ProffyLogo } from '../../assets/images';
import { PurpleHeartIcon } from '../../assets/images/icons';
import Input from '../../components/Input';

import CheckBox from './components/CheckBox';

import { Container, Content, Info, Form, OptionsBlock, Footer } from './styles';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const [submitAvailable, setSubmitAvailable] = useState(false);

  const { signIn, setIsRememberMe, getIsRememberMe } = useAuth();

  const handleInputOnChange = useCallback(() => {
    const data = formRef.current?.getData() as SignInFormData;

    if (data?.email && data?.password) {
      setSubmitAvailable(true);
      return;
    }

    setSubmitAvailable(false);
  }, []);

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
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        // eslint-disable-next-line no-alert
        alert('Ocorreu um erro ao efetuar login, tente novamente!');
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
        <Form
          isSubmitAvailable={submitAvailable}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Fazer Login</h1>

          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            autoFocus
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

          <OptionsBlock>
            <CheckBox
              onChange={e => setIsRememberMe(e.target.checked)}
              name="remember"
              disabled={loading}
              defaultChecked={getIsRememberMe()}
            />

            <a href="/">Esqueci minha senha</a>
          </OptionsBlock>

          <button disabled={loading || !submitAvailable} type="submit">
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
