import { TouchableWithoutFeedback } from 'react-native';

import logo from '@assets/images/logo.png';
import { Button } from '@components/Button/Button';
import { Divider } from '@components/Divider/Divider';
import { Input } from '@components/Input';

import { Container, Logo, Section, Title } from './styles';
import { LoginViewProps } from './types';

export function LoginView({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  handleDismissKeyboard,
}: LoginViewProps) {
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Container>
        <Section>
          <Logo source={logo} />
        </Section>

        <Section space={8}>
          <Title>Para entrar, utilize as credenciais que você recebeu via e-mail</Title>
          <Divider />
        </Section>

        <Section space={16}>
          <Input
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Senha"
            secureTextEntry
            hasPasswordIcon
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />

          <Button onPress={handleLogin}>Entrar</Button>
          <Button type="ghost">Esqueci a senha</Button>
        </Section>
      </Container>
    </TouchableWithoutFeedback>
  );
}
