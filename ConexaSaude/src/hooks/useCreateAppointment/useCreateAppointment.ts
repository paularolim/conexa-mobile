import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@utils/httpClient';

import { CreateAppointment, CreateAppointmentResponse } from './types';

export function useCreateAppointment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { token } = useAuth();

  const fetchCreateAppointment = useCallback(
    async ({ patient, date, observation }: CreateAppointment) => {
      setLoading(true);
      setError(false);

      try {
        const { data } = await client.post<CreateAppointmentResponse>(
          'consulta',
          {
            idMedico: 12,
            paciente: patient,
            dataConsulta: date,
            observacao: observation,
          },
          { headers: { Authorization: `Bearer ${token}` } },
        );
        if (data.data.id) {
          setLoading(false);
          setError(false);
        }
      } catch (reason) {
        setLoading(false);
        setError(true);
      }
    },
    [token],
  );

  return {
    fetchCreateAppointment,
    loading,
    error,
  };
}
