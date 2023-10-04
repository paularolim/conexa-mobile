import { View } from 'react-native';
import styled from 'styled-components/native';

export const Overlay = styled(View)`
  background-color: #00000066;
  flex: 1;
  justify-content: flex-end;
`;

export const Container = styled(View)`
  padding: 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Section = styled(View)`
  gap: 4px;
`;
