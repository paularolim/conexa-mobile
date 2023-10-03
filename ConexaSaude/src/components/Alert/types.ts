export type AlertType = 'error' | 'warning';

export interface AlertProps {
  type: AlertType;
  message: string;
}
