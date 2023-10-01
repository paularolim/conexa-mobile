import { appointments } from './mock';

export interface HomeViewProps {
  name: string;
  refreshing: boolean;
  handlePressAppointment: () => void;
  onRefresh: () => void;
}

export type MockAppointments = (typeof appointments.data)[0];
