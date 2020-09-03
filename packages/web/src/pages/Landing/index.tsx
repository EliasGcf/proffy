import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  SignOutIcon,
  PurpleHeartIcon,
  StudyIcon,
  GiveClassesIcon,
} from '../../assets/images/icons';
import { ProffyLogo, LandingImg } from '../../assets/images';

import api from '../../services/api';

import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  TopContent,
  Header,
  LogoContainer,
  Footer,
  InfoContainer,
  ButtonsContainer,
} from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  const { signOut, user } = useAuth();
  const { push } = useHistory();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  useEffect(() => {
    api.get('connections').then(response => {
      setTotalConnections(response.data.total);
    });
  }, []);

  return (
    <Container>
      <TopContent>
        <Header>
          <Link to="/profile">
            <img
              src={
                user.avatar ||
                'https://api.adorable.io/avatars/40/abott@adorable.png'
              }
              alt="Profile"
            />
            <span>{user.first_name}</span>
          </Link>

          <button onClick={handleSignOut} type="button">
            <SignOutIcon />
          </button>
        </Header>

        <LogoContainer>
          <div>
            <ProffyLogo />
            <h1>Sua plataforma de estudos online.</h1>
          </div>

          <LandingImg />
        </LogoContainer>
      </TopContent>
      <Footer>
        <InfoContainer>
          <h2>
            Seja bem vindo.
            <strong>O Que deseja fazer?</strong>
          </h2>

          <small>
            Total de {totalConnections} conexões já realizadas
            <PurpleHeartIcon />
          </small>
        </InfoContainer>

        <ButtonsContainer>
          <Button>
            <StudyIcon />
            Estudar
          </Button>

          <Button onClick={() => push('/give-classes')}>
            <GiveClassesIcon />
            Dar aulas
          </Button>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Landing;
