import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Appointment } from '@hooks/useDetailAppointment';

import { MainRoutesParamList } from '../../routes/types';

export interface AppointmentViewProps {
  appointment: Appointment | null;
  loading: boolean;
  error: boolean;
  showModal: boolean;
  handleDismissModal: () => void;
  handleShowCancelModal: () => void;
  handleCancelAppointment: () => void;
}

export type ScreenProps = NativeStackScreenProps<MainRoutesParamList, 'Appointment'>;
export type NavigationType = NativeStackNavigationProp<
  MainRoutesParamList,
  'Appointment',
  undefined
>;
export type RouteType = RouteProp<MainRoutesParamList, 'Appointment'>;
