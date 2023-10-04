import { act, cleanup, renderHook, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import { useLogin } from '@hooks/useLogin';
import { client } from '@utils/httpClient';

jest.mock('@hooks/useAuth', () => ({ useAuth: () => ({ handleSaveData: jest.fn() }) }));

describe('useLogin', () => {
  beforeEach(() => cleanup());

  it('should return default props', () => {
    const { result } = renderHook(() => useLogin());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  it('should set loading to true while making the request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onPost('/login').reply(200, mockData);

    const { result } = renderHook(() => useLogin());

    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.fetchLogin({ email: 'mocked_email', password: 'mocked_password' });
    });

    expect(result.current.loading).toBe(true);

    waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should call fetchLogin on a successful request', async () => {
    const mockData = {
      data: {
        nome: 'mocked_doctor',
        email: 'mocked_email',
        token: 'mocked_token',
      },
    };
    const mock = new MockAdapter(client);
    mock.onPost('/login').reply(200, mockData);

    const { result } = renderHook(() => useLogin());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.fetchLogin({ email: 'mocked_email', password: 'mocked_password' });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  it('should call fetchLogin on an unsuccessful request', async () => {
    const mockData = {};
    const mock = new MockAdapter(client);
    mock.onPost('/login').reply(500, mockData);

    const { result } = renderHook(() => useLogin());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.fetchLogin({ email: 'mocked_email', password: 'mocked_password' });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(true);
  });

  it('should call fetchLogin with an unexpected response', async () => {
    const mockData = { data: 'unexpected_data' };
    const mock = new MockAdapter(client);
    mock.onPost('/login').reply(200, mockData);

    const { result } = renderHook(() => useLogin());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.fetchLogin({ email: 'mocked_email', password: 'mocked_password' });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(true);
  });
});
