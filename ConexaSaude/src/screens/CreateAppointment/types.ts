import { Control } from 'react-hook-form';
import * as yup from 'yup';

import { schema } from './validation';

export type CreateAppointmentSchema = yup.InferType<typeof schema>;

export interface CreateAppointmentViewProps {
  loading: boolean;
  errorMessage?: string;
  control: Control<CreateAppointmentSchema, any>;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  handleDismissKeyboard: () => void;
}
