import React from 'react';
import { Link } from 'react-router-dom';

import { SuccessCheckIcon } from '../../../../assets/images/icons';

import { Container } from './styles';

const Success: React.FC = () => {
  return (
    <Container>
      <SuccessCheckIcon />
      <h1>Cadastro salvo!</h1>
      <span>Tudo certo, seu cadastro está na nossa lista de professores.</span>
      <span>Agora é só ficar de olho no seu WhatsApp.</span>
      <Link to="/">Acessar lista</Link>
    </Container>
  );
};

export default Success;
