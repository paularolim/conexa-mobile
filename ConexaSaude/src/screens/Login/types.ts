import { Control } from 'react-hook-form';
import * as yup from 'yup';

import { schema } from './validation';

export type LoginSchema = yup.InferType<typeof schema>;

export interface LoginViewProps {
  loading: boolean;
  errorMessage: string | null;
  handleDismissKeyboard: () => void;
  control: Control<LoginSchema, any>;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}
