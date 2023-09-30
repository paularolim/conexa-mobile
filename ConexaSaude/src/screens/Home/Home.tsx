import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Button } from '@components/Button';
import { Text } from '@components/Text';

export function Home() {
  const { navigate } = useNavigation();

  const handleNavigate = () => {
    navigate('Appointment' as never);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button onPress={handleNavigate}>Consulta</Button>
    </View>
  );
}
