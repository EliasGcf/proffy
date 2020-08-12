import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.titleInPrimary};
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonPrimary = styled(Button)`
  background: ${({ theme }) => theme.colors.primaryLighter};
`;

export const ButtonSecondary = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.textInPrimary};
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
