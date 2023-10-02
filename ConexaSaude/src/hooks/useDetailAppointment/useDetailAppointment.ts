import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@repositories/client';

import { Appointment, AppointmentResponse } from './types';

export function useDetailAppointment() {
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { token } = useAuth();

  const getDetailAppointment = useCallback(
    async (id: number) => {
      setLoading(true);
      setError(true);

      const response = await client.get<AppointmentResponse>(`consulta/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.data) {
        const item: Appointment = {
          date: response.data.data.dataConsulta,
          id: response.data.data.id,
          observation: response.data.data.observacao,
          patient: response.data.data.paciente,
        };
        setAppointment(item);
        setLoading(false);
        setError(false);
        return;
      }

      setAppointment(null);
      setLoading(false);
      setError(true);
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
