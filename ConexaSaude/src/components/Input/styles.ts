import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
`;

export const FieldContainer = styled(View)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
`;

export const Field = styled(TextInput)`
  color: ${({ theme }) => theme.colors.black};
  flex-grow: 1;
  padding: 8px 16px;
  flex: 1;
`;

export const IconContainer = styled(View)`
  padding-right: 16px;
`;
