import { Appointment } from '@hooks/useListAppointments/types';

import { appointments } from './mock';

export interface HomeViewProps {
  appointments: Appointment[];
  name: string;
  refreshing: boolean;
  handlePressAppointment: () => void;
  onRefresh: () => void;
}

export type MockAppointments = (typeof appointments.data)[0];
