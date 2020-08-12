import React, { useState, useCallback, useMemo } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Item } from 'react-native-picker-select';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import RNPickerSelect from '../../components/RNPickerSelect';

import {
  Container,
  SearchForm,
  Label,
  InputGroup,
  InputBlock,
  TextInput,
  SubmitButton,
  SubmitButtonText,
  TeacherListScrollView,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  const weekOptions = useMemo<Item[]>(() => {
    return [
      { value: '0', label: 'Domingo' },
      { value: '1', label: 'Segunda-Feira' },
      { value: '2', label: 'Terça-Feira' },
      { value: '3', label: 'Quarta-Feira' },
      { value: '4', label: 'Quinta-Feira' },
      { value: '5', label: 'Sexta-Feira' },
      { value: '6', label: 'Sábado' },
    ];
  }, []);

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('@Proffy:favorites');

    if (response) {
      const favoritedTeachers = JSON.parse(response);
      const favoritedTeachersIds = favoritedTeachers.map(
        (teacher: Teacher) => teacher.id,
      );

      setFavorites(favoritedTeachersIds);
    }
  }, []);

  // useFocusEffect(() => {
  //   loadFavorites();
  // });
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites]),
  );

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  const handleFiltersSubmit = useCallback(async () => {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
    setIsFiltersVisible(false);
  }, [loadFavorites, subject, week_day, time]);

  const RenderRightIcon = useCallback(() => {
    return (
      <BorderlessButton
        style={{ padding: 8 }}
        onPress={handleToggleFiltersVisible}
      >
        <Feather name="filter" size={20} color="#fff" />
      </BorderlessButton>
    );
  }, [handleToggleFiltersVisible]);

  return (
    <Container>
      <PageHeader title="Proffys disponíveis" headerRight={RenderRightIcon}>
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <TextInput
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <RNPickerSelect
                  items={weekOptions}
                  onValueChange={setWeek_day}
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <TextInput
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherListScrollView>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherListScrollView>
    </Container>
  );
};

export default TeacherList;
