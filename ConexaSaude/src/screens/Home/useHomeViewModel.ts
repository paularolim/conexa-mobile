import { useCallback, useEffect, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { useListAppointmentsRepository } from '@hooks/useListAppointments';

import { ScreenProps } from './types';

export function useHomeViewModel({ navigation }: ScreenProps) {
  const [refreshing, setRefreshing] = useState(false);

  const { getAppointments, appointments } = useListAppointmentsRepository();
  const { name } = useAuth();

  const requestAppointments = useCallback(() => {
    getAppointments();
  }, [getAppointments]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAppointments().finally(() => {
      setRefreshing(false);
    });
  }, [getAppointments]);

  const handlePressAppointment = useCallback(
    (id: number) => {
      navigation.navigate('Appointment', { id });
    },
    [navigation],
  );

  useEffect(() => requestAppointments(), [requestAppointments]);

  return {
    handlePressAppointment,
    refreshing,
    onRefresh,
    name: name || '',
    appointments,
  };
}
