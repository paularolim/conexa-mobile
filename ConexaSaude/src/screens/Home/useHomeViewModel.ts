import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { useListAppointmentsRepository } from '@hooks/useListAppointments';

export function useHomeViewModel() {
  const [refreshing, setRefreshing] = useState(false);

  const { navigate } = useNavigation();
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

  const handlePressAppointment = useCallback(() => {
    navigate('Appointment' as never);
  }, [navigate]);

  useEffect(() => requestAppointments(), [requestAppointments]);

  return {
    handlePressAppointment,
    refreshing,
    onRefresh,
    name,
    appointments,
  };
}
