import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Appointment } from '@screens/Appointment';

import { Tabs } from './Tabs';
import { MainRoutesParamList } from './types';

const Stack = createNativeStackNavigator<MainRoutesParamList>();

export function MainRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitle: 'voltar' }}>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="Appointment" component={Appointment} options={{ title: 'Consulta' }} />
    </Stack.Navigator>
  );
}
