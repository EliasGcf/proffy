import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container, TeacherListScrollView } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadFavorites = async (): Promise<void> => {
        const response = await AsyncStorage.getItem('@Proffy:favorites');

        if (response) {
          const favoritedTeachers = JSON.parse(response);
          setFavorites(favoritedTeachers);
        }
      };

      loadFavorites();
    }, []),
  );

  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />

      <TeacherListScrollView>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </TeacherListScrollView>
    </Container>
  );
};

export default Favorites;
