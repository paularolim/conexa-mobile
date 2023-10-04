import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCallback } from 'react';
import { useTheme } from 'styled-components/native';

import { Icon } from '@components/Icon';
import { CreateAppointment } from '@screens/CreateAppointment';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

import { CustomTabBarButton } from './components/CustomTabBarButton';
import { styles } from './styles';
import { TabBarIconProps, TabsRoutesParamList } from './types';

const Tab = createBottomTabNavigator<TabsRoutesParamList>();

export function Tabs() {
  const { colors } = useTheme();

  const colorRule = useCallback(
    (focused: boolean) => (focused ? colors.pink : colors.gray),
    [colors.gray, colors.pink],
  );

  const HomeIcon = useCallback<TabBarIconProps>(
    ({ focused }) => <Icon name="house" width={32} height={32} fill={colorRule(focused)} />,
    [colorRule],
  );

  const PlusIcon = useCallback<TabBarIconProps>(
    () => <Icon name="plus" width={32} height={32} fill={colors.white} />,
    [colors.white],
  );

  const UserIcon = useCallback<TabBarIconProps>(
    ({ focused }) => <Icon name="user" width={32} height={32} fill={colorRule(focused)} />,
    [colorRule],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tabBarShadow, ...styles.tabBarStyle },
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: HomeIcon }} />
      <Tab.Screen
        name="CreateAppointment"
        component={CreateAppointment}
        options={{
          tabBarIcon: PlusIcon,
          tabBarButton: CustomTabBarButton,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: UserIcon }} />
    </Tab.Navigator>
  );
}
