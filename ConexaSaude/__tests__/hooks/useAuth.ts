import { renderHook, act } from '@testing-library/react-native';

import { useAuth } from '@hooks/useAuth';

describe('useAuth', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useAuth());
    act(() => {
      result.current.handleLogout();
    });
  });

  it('should set token', () => {
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

    act(() => {
      result.current.handleLogout();
    });

    expect(result.current.isLogged).toBe(false);
  });
});
