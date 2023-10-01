import { TouchableOpacityProps } from 'react-native';

export interface AppointmentCardProps extends TouchableOpacityProps {
  date: string;
  patient: string;
}
