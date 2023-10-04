import { Text } from 'react-native';
import styled from 'styled-components/native';

export const RNText = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
`;
