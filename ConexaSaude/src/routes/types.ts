import { ParamListBase } from '@react-navigation/native';

export type TabBarIconProps = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode;

export interface TabsRoutesParamList extends ParamListBase {
  Home: undefined;
  CreateAppointment: undefined;
  Profile: undefined;
}

export interface PublicRoutesParamList extends ParamListBase {
  Login: undefined;
}

export interface MainRoutesParamList extends ParamListBase {
  Tabs: TabsRoutesParamList;
  Appointment: { id: number };
  Help: undefined;
}
