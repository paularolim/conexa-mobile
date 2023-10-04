import { Image, View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(View)`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  gap: 20px;
`;

export const Section = styled(View)<{ space?: number }>`
  width: 100%;
  gap: ${({ space }) => space || 0}px;
`;

export const Logo = styled(Image)`
  max-width: 60%;
  resize-mode: contain;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
`;
