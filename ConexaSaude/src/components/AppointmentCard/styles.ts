import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 16px;
  gap: 12px;
  border-radius: 12px;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLight};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const DateTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  font-weight: bold;
`;

export const Avatar = styled(View)`
  background-color: ${({ theme }) => theme.colors.grayLight};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`;
