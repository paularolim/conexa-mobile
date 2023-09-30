import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { MainRoutes } from './MainRoutes';
import { PublicRoutes } from './PublicRoutes';

export function Routes() {
  const { isLogged } = useAuth();

  return <NavigationContainer>{isLogged ? <MainRoutes /> : <PublicRoutes />}</NavigationContainer>;
}
