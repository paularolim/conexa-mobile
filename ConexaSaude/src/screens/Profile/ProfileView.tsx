import { useTheme } from 'styled-components/native';

import { Divider } from '@components/Divider';
import { Icon } from '@components/Icon';

import {
  AuxiliaryLabel,
  Avatar,
  Center,
  Container,
  Header,
  MenuContainer,
  MenuItem,
  NameLabel,
} from './styles';
import { ProfileViewProps } from './types';

export function ProfileView({ name, email, handleLogout }: ProfileViewProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <Avatar>
          <Icon name="user" width={80} height={80} fill={colors.pink} />
        </Avatar>
        <Center>
          <NameLabel>{name}</NameLabel>
          <AuxiliaryLabel>{email}</AuxiliaryLabel>
        </Center>
      </Header>

      <Divider />

      <MenuContainer>
        <MenuItem onPress={handleLogout}>
          <Icon name="sign-out" width={32} height={32} fill={colors.black} />
          <AuxiliaryLabel>Sair</AuxiliaryLabel>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}
