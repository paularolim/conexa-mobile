import { Image, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 48px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  max-width: 100%;
  resize-mode: contain;
`;
