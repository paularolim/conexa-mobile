import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '@components/Text';

export const Container = styled(View)`
  padding: 24px;
  gap: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const Header = styled(View)`
  gap: 16px;
  align-items: center;
`;

export const Center = styled(View)`
  align-items: center;
`;

export const Avatar = styled(View)`
  background-color: ${({ theme }) => theme.colors.grayLight};
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
`;

export const NameLabel = styled(Text)`
  font-size: 22px;
  font-weight: bold;
`;

export const AuxiliaryLabel = styled(Text)`
  font-size: 18px;
`;

export const MenuContainer = styled(View)`
  width: 100%;
  gap: 8px;
`;

export const MenuItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
