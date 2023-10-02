import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Appointment } from '@hooks/useDetailAppointment';
import { MainRoutesParamList } from '@routes/types';

export interface AppointmentViewProps {
  appointment: Appointment | null;
  showModal: boolean;
  handleDismissModal: () => void;
  handleShowCancelModal: () => void;
  handleCancelAppointment: () => void;
}

export type ScreenProps = NativeStackScreenProps<MainRoutesParamList, 'Appointment'>;
