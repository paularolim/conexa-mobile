import { AppointmentView } from './AppointmentView';
import { ScreenProps } from './types';
import { useAppointmentViewModel } from './useAppointmentViewModel';

export function Appointment(screenProps: ScreenProps) {
  const props = useAppointmentViewModel(screenProps);
  return <AppointmentView {...props} />;
}
