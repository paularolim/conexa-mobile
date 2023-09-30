import { View } from 'react-native';

import { Button } from '@components/Button';
import { Text } from '@components/Text';
import { useAuth } from '@hooks/useAuth';

export function Login() {
  const { handleLogin } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Button onPress={handleLogin}>Entrar</Button>
    </View>
  );
}
