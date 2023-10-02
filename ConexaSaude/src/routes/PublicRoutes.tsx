import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';

import { PublicRoutesParamList } from './types';

const Stack = createNativeStackNavigator<PublicRoutesParamList>();

export function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
