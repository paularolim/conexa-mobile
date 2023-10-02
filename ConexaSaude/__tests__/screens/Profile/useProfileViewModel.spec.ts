import { renderHook } from '@testing-library/react-native';

import { useProfileViewModel } from '@screens/Profile/useProfileViewModel';

describe('useProfileViewModel', () => {
  it('should has props', () => {
    const { result } = renderHook(() => useProfileViewModel());

    expect(result.current.name).toBe('');
    expect(result.current.email).toBe('');
    expect(typeof result.current.handleLogout).toBe('function');
  });
});
