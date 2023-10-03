import { Controller } from 'react-hook-form';
import { TouchableWithoutFeedback } from 'react-native';

import logo from '@assets/images/logo.png';
import { Alert } from '@components/Alert';
import { Button } from '@components/Button/Button';
import { Divider } from '@components/Divider/Divider';
import { Input } from '@components/Input';

import { Container, Logo, Section, Title } from './styles';
import { LoginViewProps } from './types';

export function LoginView({
  control,
  errorMessage,
  handleDismissKeyboard,
  onSubmit,
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
          {errorMessage && <Alert type="error" message={errorMessage} />}
        </Section>

        <Section space={16}>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Senha"
                secureTextEntry
                hasPasswordIcon
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Button onPress={onSubmit}>Entrar</Button>
          <Button type="ghost">Esqueci a senha</Button>
        </Section>
      </Container>
    </TouchableWithoutFeedback>
  );
}
