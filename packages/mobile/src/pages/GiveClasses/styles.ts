import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.titleInPrimary};
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.textInPrimary};
  margin-top: 24px;
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  margin: 40px 0;
  background: ${({ theme }) => theme.colors.secondary};
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.buttonText};
`;
