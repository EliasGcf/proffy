import React from 'react';

import { ProffyLogo } from '../../assets/images';
import { PurpleHeartIcon } from '../../assets/images/icons';
import Input from '../../components/Input';

import { Container, Content, Info, OptionsBlock, Footer } from './styles';
import CheckBox from './components/CheckBox';

const SignIn: React.FC = () => {
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
        <form>
          <h1>Fazer Login</h1>

          <Input
            label="E-mail"
            name="e-mail"
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
            <CheckBox name="remember" label="Lembrar-me" />

            <a href="/">Esqueci minha senha</a>
          </OptionsBlock>

          <button type="submit">Entrar</button>
        </form>

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
