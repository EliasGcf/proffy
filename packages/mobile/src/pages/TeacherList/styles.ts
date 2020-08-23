import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textInPrimary};
  font-family: 'Poppins_400Regular';
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const TextInput = styled.TextInput`
  height: 54px;
  background: ${({ theme }) => theme.colors.boxBase};
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const SubmitButton = styled(RectButton)`
  background: ${({ theme }) => theme.colors.secondary};
  height: 56px;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
`;

export const TeacherListScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -40px;
`;
