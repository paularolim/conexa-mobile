import { View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(View)`
  flex: 1;
  padding: 24px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled(View)`
  flex: 1;
  gap: 16px;
`;

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled(View)`
  background-color: ${({ theme }) => theme.colors.grayLight};
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
`;

export const PatientName = styled(Text)`
  font-size: 22px;
  font-weight: bold;
`;

export const SectionTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

export const SectionValue = styled(Text)`
  font-size: 18px;
`;

export const Footer = styled(View)`
  gap: 4px;
`;

export const ErrorMessage = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.red};
`;
