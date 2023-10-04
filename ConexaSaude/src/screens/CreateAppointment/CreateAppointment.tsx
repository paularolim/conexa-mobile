import { CreateAppointmentView } from './CreateAppointmentView';
import { useCreateAppointmentViewModel } from './useCreateAppointmentViewModel';

export function CreateAppointment() {
  const props = useCreateAppointmentViewModel();
  return <CreateAppointmentView {...props} />;
}
