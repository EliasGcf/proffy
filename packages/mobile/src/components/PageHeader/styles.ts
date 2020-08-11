import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const TopBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.titleInPrimary};
  font-size: 24px;
  line-height: 32px;
  max-width: 180px;
  margin: 40px 0;
`;
