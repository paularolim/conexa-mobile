import { act, cleanup, renderHook, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import { useListAppointments } from '@hooks/useListAppointments';
import { client } from '@utils/httpClient';

jest.mock('@hooks/useAuth', () => ({ useAuth: () => ({ token: 'mocked_token' }) }));

describe('useListAppointments', () => {
  beforeEach(() => cleanup());

  it('should return default props', () => {
    const { result } = renderHook(() => useListAppointments());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.appointments).toBe(null);
    expect(result.current.getAppointments).toBeTruthy();
  });

  it('should set loading to true while making the request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onGet('/consultas').reply(200, mockData);

    const { result } = renderHook(() => useListAppointments());

    expect(result.current.loading).toBe(true);

    act(() => {
      result.current.getAppointments();
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should call getAppointments on a successful request', async () => {
    const mockData = {
      data: [
        {
          id: 16,
          medico: { id: 1, nome: 'mocked_doctor', email: 'mocked_email' },
          paciente: 'mocked_patient',
          dataConsulta: 'mocked_date',
          observacao: 'mocked_observation',
        },
      ],
    };
    const mock = new MockAdapter(client);
    mock.onGet('/consultas').reply(200, mockData);

    const { result } = renderHook(() => useListAppointments());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.appointments).toBe(null);

    await act(async () => {
      await result.current.getAppointments();
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.appointments).toEqual([
        {
          date: 'mocked_date',
          id: 16,
          observation: 'mocked_observation',
          patient: 'mocked_patient',
        },
      ]);
    });
  });

  it('should call getAppointments on an unsuccessful request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onGet('/consultas').reply(500, mockData);

    const { result } = renderHook(() => useListAppointments());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.appointments).toBe(null);

    await act(async () => {
      await result.current.getAppointments();
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.appointments).toEqual(null);
    });
  });

  it('should call getAppointments with an unexpected response', async () => {
    const mockData = [{ data: 'unexpected_data' }];
    const mock = new MockAdapter(client);
    mock.onGet('/consultas').reply(200, mockData);

    const { result } = renderHook(() => useListAppointments());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.appointments).toBe(null);

    await act(async () => {
      await result.current.getAppointments();
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.appointments).toEqual(null);
    });
  });
});
