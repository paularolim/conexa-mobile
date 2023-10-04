import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@utils/httpClient';

import { Appointment, AppointmentsResponse } from './types';

export function useListAppointments() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  const { token } = useAuth();

  const getAppointments = useCallback(async () => {
    try {
      const response = await client.get<AppointmentsResponse>('consultas', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setLoading(false);
      if (response.data.data) {
        const items: Appointment[] = response.data.data.map((item) => ({
          date: item.dataConsulta,
          id: item.id,
          observation: item.observacao,
          patient: item.paciente,
        }));
        setAppointments(items);
        setError(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (reason) {
      setAppointments(null);
      setLoading(false);
      setError(true);
    }
  }, [token]);

  return {
    getAppointments,
    appointments,
    loading,
    error,
  };
}
