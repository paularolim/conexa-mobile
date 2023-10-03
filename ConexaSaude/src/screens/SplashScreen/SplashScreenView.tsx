import logo from '@assets/images/logo.png';

import { Container, Logo } from './styles';

export function SplashScreenView() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
