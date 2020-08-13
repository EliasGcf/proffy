import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { ProffyLogo } from '../../assets/images';
import { PurpleHeartIcon } from '../../assets/images/icons';
import Input from '../../components/Input';

import CheckBox from './components/CheckBox';

import { Container, Content, Info, OptionsBlock, Footer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

const SignIn: React.FC = () => {
  const handleSubmit = useCallback((data: SignInFormData) => {
    console.log(data);
  }, []);

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
        <Form onSubmit={handleSubmit}>
          <h1>Fazer Login</h1>

          <Input
            label="E-mail"
            name="email"
            placeholder="E-mail"
            type="email"
          />
          <Input
            label="Senha"
            name="password"
            placeholder="Senha"
            type="password"
          />

          <OptionsBlock>
            <CheckBox name="remember" />

            <a href="/">Esqueci minha senha</a>
          </OptionsBlock>

          <button type="submit">Entrar</button>
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
