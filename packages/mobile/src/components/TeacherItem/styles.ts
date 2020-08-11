import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoriteButtonProps {
  isFavorited: boolean;
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.boxBase};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.lineInWhite};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const ProfileAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.background};
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.textBase};
  font-size: 14px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textBase};
`;

export const Footer = styled.View`
  background: ${({ theme }) => theme.colors.boxFooter};
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.textBase};
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)<FavoriteButtonProps>`
  background: ${({ theme, isFavorited }) =>
    isFavorited ? theme.colors.error : theme.colors.primary};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background: ${({ theme }) => theme.colors.secondary};
  flex: 1px;
  height: 56px;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
