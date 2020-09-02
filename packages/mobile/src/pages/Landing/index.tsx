import React, { useState, useEffect, useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
  TotalConnections,
} from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    // api.get('connections').then(response => {
    //   setTotalConnections(response.data.total);
    // });
  }, []);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, [navigate]);

  const handleNavigateToStudyPages = useCallback(() => {
    navigate('Study');
  }, [navigate]);

  return (
    <Container>
      <Banner source={landingImg} resizeMode="contain" />

      <Title>
        Seja bem-vindo,{'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas.{' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
