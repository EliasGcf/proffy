import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const TeacherListScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -40px;
`;
