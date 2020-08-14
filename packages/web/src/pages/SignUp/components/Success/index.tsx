import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { SuccessCheckIcon } from '../../../../assets/images/icons';

const Success: React.FC = () => {
  return (
    <Container>
      <SuccessCheckIcon />
      <h1>Cadastro concluído</h1>
      <span>Agora você faz parte da plataforma da Proffy.</span>
      <span>Tenha uma ótima experiência.</span>
      <Link to="/">Fazer Login</Link>
    </Container>
  );
};

export default Success;
