import { View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  padding: 12px 24px;
  gap: 12px;
`;

export const Form = styled(View)`
  flex: 1;
  gap: 8px;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
`;
