import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Button } from '@components/Button';
import { Text } from '@components/Text';
import { useAuth } from '@hooks/useAuth';

export function Profile() {
  const { handleLogout } = useAuth();

  const { navigate } = useNavigation();

  const handleNavigate = () => {
    navigate('Help' as never);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Button onPress={handleNavigate}>Ajuda</Button>
      <Button onPress={handleLogout}>Sair</Button>
    </View>
  );
}
