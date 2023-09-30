import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

import { ButtonType } from './types';

export const Container = styled(TouchableOpacity)<{ type: ButtonType }>`
  background-color: ${({ theme, type }) =>
    type === 'filled' ? theme.colors.green : theme.colors.white};
  border-radius: 4px;
  padding: 8px 16px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text)<{ type: ButtonType }>`
  color: ${({ theme, type }) => (type === 'filled' ? theme.colors.white : theme.colors.blue)};
  font-size: 18px;
`;
