import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Appointment } from '@hooks/useListAppointments/types';
import { TabsRoutesParamList } from '@routes/types';

export interface HomeViewProps {
  appointments: Appointment[] | null;
  name: string;
  refreshing: boolean;
  loading: boolean;
  error: boolean;
  handlePressAppointment: (id: number) => void;
  handleCreateAppointment: () => void;
  onRefresh: () => void;
}

export type ScreenProps = NativeStackScreenProps<TabsRoutesParamList, 'Home'>;
