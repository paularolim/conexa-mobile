import { View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

import { AlertType } from './types';

export const Container = styled(View)<{ type: AlertType }>`
  background-color: ${({ theme, type }) =>
    type === 'error' ? theme.colors.redLight : theme.colors.yellowLight};
  padding: 8px;
  border-radius: 4px;
`;

export const MessageLabel = styled(Text)<{ type: AlertType }>`
  font-size: 18px;
  color: ${({ theme, type }) => (type === 'error' ? theme.colors.red : theme.colors.yellow)};
`;
