import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@repositories/client';

import { Appointment, AppointmentsResponse } from './types';

export function useListAppointmentsRepository() {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  const { token } = useAuth();

  const getAppointments = useCallback(async () => {
    const response = await client.get<AppointmentsResponse>('consultas', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.data.data) {
      const items: Appointment[] = response.data.data.map((item) => ({
        date: item.dataConsulta,
        id: item.id,
        observation: item.observacao,
        patient: item.paciente,
      }));
      setAppointments(items);
      return;
    }

    setAppointments(null);
  }, [token]);

  return {
    getAppointments,
    appointments,
  };
}
