import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  gap: 10px;
`;

export const Item = styled(View)<{ primary?: boolean }>`
  width: 80px;
  height: 5px;
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.pink : theme.colors.grayLight};
  border-radius: 2px;
`;
