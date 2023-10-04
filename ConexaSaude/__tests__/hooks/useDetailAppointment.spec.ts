import { act, renderHook, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import { useDetailAppointment } from '@hooks/useDetailAppointment';
import { client } from '@utils/httpClient';

jest.mock('@hooks/useAuth', () => ({ useAuth: () => ({ token: 'mocked_token' }) }));

describe('useDetailAppointment', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useDetailAppointment());

    expect(result.current.appointment).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.getDetailAppointment).toBeTruthy();
  });

  it('should set loading to true while making the request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onGet('/consulta').reply(201, mockData);

    const { result } = renderHook(() => useDetailAppointment());

    expect(result.current.loading).toBe(true);

    act(() => {
      result.current.getDetailAppointment(1);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should call getDetailAppointment on a successful request', async () => {
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
    mock.onGet('/consulta/16').reply(200, mockData);

    const { result } = renderHook(() => useDetailAppointment());

    expect(result.current.appointment).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.getDetailAppointment(16);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.appointment).toEqual({
        date: 'mocked_date',
        id: 16,
        observation: 'mocked_observation',
        patient: 'mocked_patient',
      });
    });
  });

  it('should call getDetailAppointment on an unsuccessful request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onGet('/consulta/16').reply(500, mockData);

    const { result } = renderHook(() => useDetailAppointment());

    expect(result.current.appointment).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.getDetailAppointment(16);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.appointment).toEqual(null);
    });
  });

  it('should call getDetailAppointment with an unexpected response', async () => {
    const mockData = [{ data: 'unexpected_data' }];
    const mock = new MockAdapter(client);
    mock.onGet('/consulta/16').reply(200, mockData);

    const { result } = renderHook(() => useDetailAppointment());

    expect(result.current.appointment).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.getDetailAppointment(16);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.appointment).toEqual(null);
    });
  });
});
