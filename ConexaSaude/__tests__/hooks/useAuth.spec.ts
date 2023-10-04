import { renderHook, act } from '@testing-library/react-native';

import { useAuth } from '@hooks/useAuth';

describe('useAuth', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useAuth());
    act(() => {
      result.current.handleLogout();
    });
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogged).toBe(false);
    expect(result.current.handleSaveData).toBeTruthy();
    expect(result.current.handleLogout).toBeTruthy();
    expect(result.current.name).toBe(null);
    expect(result.current.email).toBe(null);
    expect(result.current.token).toBe(null);
  });

  it('should set auth data', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogged).toBe(false);

    act(() => {
      result.current.handleSaveData({
        email: 'mocked_email',
        name: 'mocked_name',
        token: 'mocked_token',
      });
    });

    expect(result.current.isLogged).toBe(true);
    expect(result.current.email).toBe('mocked_email');
    expect(result.current.name).toBe('mocked_name');
    expect(result.current.token).toBe('mocked_token');
  });

  it('should logout', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogged).toBe(false);

    act(() => {
      result.current.handleSaveData({
        email: 'mocked_email',
        name: 'mocked_name',
        token: 'mocked_token',
      });
    });

    expect(result.current.isLogged).toBe(true);
    expect(result.current.email).toBe('mocked_email');
    expect(result.current.name).toBe('mocked_name');
    expect(result.current.token).toBe('mocked_token');

    act(() => {
      result.current.handleLogout();
    });

    expect(result.current.isLogged).toBe(false);
    expect(result.current.email).toBe(null);
    expect(result.current.name).toBe(null);
    expect(result.current.token).toBe(null);
  });
});
