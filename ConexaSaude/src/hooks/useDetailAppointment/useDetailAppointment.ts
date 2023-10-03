import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@utils/httpClient';

import { Appointment, AppointmentResponse } from './types';

export function useDetailAppointment() {
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { token } = useAuth();

  const getDetailAppointment = useCallback(
    async (id: number) => {
      try {
        const { data } = await client.get<AppointmentResponse>(`consulta/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setLoading(false);
        if (data.data) {
          const item: Appointment = {
            date: data.data.dataConsulta,
            id: data.data.id,
            observation: data.data.observacao,
            patient: data.data.paciente,
          };
          setAppointment(item);
          setError(false);
        } else {
          setAppointment(null);
          setError(true);
        }
      } catch (reason) {
        setAppointment(null);
        setLoading(false);
        setError(true);
      }
    },
    [token],
  );

  return {
    getDetailAppointment,
    appointment,
    loading,
    error,
  };
}
