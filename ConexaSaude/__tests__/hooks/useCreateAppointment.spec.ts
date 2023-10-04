import { act, renderHook, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import { useCreateAppointment } from '@hooks/useCreateAppointment';
import { client } from '@utils/httpClient';

jest.mock('@hooks/useAuth', () => ({ useAuth: () => ({ token: 'mocked_token' }) }));

describe('useCreateAppointment', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useCreateAppointment());

    expect(result.current.fetchCreateAppointment).toBeTruthy();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  it('should set loading to true while making the request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onPost('/consulta').reply(201, mockData);

    const { result, rerender } = renderHook(() => useCreateAppointment());

    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.fetchCreateAppointment({
        date: 'mocked_date',
        observation: 'mocked_observation',
        patient: 'mocked_patient',
      });
    });

    expect(result.current.loading).toBe(true);
    rerender({});

    waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should call fetchCreateAppointment on a successful request', async () => {
    const mockData = {
      data: {
        id: 16,
        medico: { id: 1, nome: 'mocked_doctor', email: 'mocked_email' },
        paciente: 'mocked_patient',
        dataConsulta: 'mocked_date',
        observacao: 'mocked_observation',
      },
    };
    const mock = new MockAdapter(client);
    mock.onPost('/consulta').reply(201, mockData);

    const onSuccess = jest.fn();

    const { result } = renderHook(() => useCreateAppointment());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.fetchCreateAppointment(
        {
          date: 'mocked_date',
          observation: 'mocked_observation',
          patient: 'mocked_patient',
        },
        onSuccess,
      );
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(onSuccess).toBeCalled();
    });
  });

  it('should call fetchCreateAppointment on an unsuccessful request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onPost('/consulta').reply(400, mockData);

    const { result } = renderHook(() => useCreateAppointment());

    await act(async () => {
      await result.current.fetchCreateAppointment({
        date: 'mocked_date',
        observation: 'mocked_observation',
        patient: 'mocked_patient',
      });
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
    });
  });

  it('should call fetchCreateAppointment with an unexpected response', async () => {
    const mockData = { data: 'unexpected_data' };
    const mock = new MockAdapter(client);
    mock.onPost('/consulta').reply(201, mockData);

    const { result } = renderHook(() => useCreateAppointment());

    await act(async () => {
      await result.current.fetchCreateAppointment({
        date: 'mocked_date',
        observation: 'mocked_observation',
        patient: 'mocked_patient',
      });
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
    });
  });
});
