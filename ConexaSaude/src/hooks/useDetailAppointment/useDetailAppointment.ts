import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@repositories/client';

import { Appointment, AppointmentResponse } from './types';

export function useDetailAppointment() {
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  const { token } = useAuth();

  const getDetailAppointment = useCallback(
    async (id: number) => {
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
        return;
      }

      setAppointment(null);
    },
    [token],
  );

  return {
    getDetailAppointment,
    appointment,
  };
}
