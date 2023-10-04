import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from '@screens/SplashScreen';

import { useAuth } from '../hooks/useAuth';
import { MainRoutes } from './MainRoutes';
import { PublicRoutes } from './PublicRoutes';

export function Routes() {
  const { isLogged, _hasHydrated } = useAuth();

  if (!_hasHydrated) {
    return <SplashScreen />;
  }

  return <NavigationContainer>{isLogged ? <MainRoutes /> : <PublicRoutes />}</NavigationContainer>;
}
