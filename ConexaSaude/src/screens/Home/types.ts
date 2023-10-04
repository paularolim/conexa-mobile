import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Appointment } from '@hooks/useListAppointments';
import { TabsRoutesParamList } from '@routes/types';

export interface HomeViewProps {
  appointments: Appointment[] | null;
  name: string;
  refreshing: boolean;
  loading: boolean;
  error: boolean;
  handlePressAppointment: (id: number) => void;
  handleCreateAppointment: () => void;
  onRefresh: () => Promise<void>;
}

export type ScreenProps = NativeStackScreenProps<TabsRoutesParamList, 'Home'>;
export type NavigationType = NativeStackNavigationProp<TabsRoutesParamList, 'Home', undefined>;
export type RouteType = RouteProp<TabsRoutesParamList, 'Home'>;
