import { View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(View)`
  flex: 1;
  padding: 24px 24px 0px 24px;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled(View)`
  padding-bottom: 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Separator = styled(View)`
  height: 10px;
`;

export const Footer = styled(View)`
  height: 30px;
`;
