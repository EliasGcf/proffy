import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import {
  Container,
  ImageBackground,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <ImageBackground source={giveClassesBgImg}>
        <Title>Quer ser um Proffy?</Title>

        <Description>
          Para comerçar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </ImageBackground>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;
