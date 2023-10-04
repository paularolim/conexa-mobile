import { renderHook } from '@testing-library/react-native';

import { useProfileViewModel } from '@screens/Profile';

jest.mock('@hooks/useAuth', () => ({
  useAuth: () => ({
    name: 'John',
    email: 'john@doe.com',
    handleLogout: jest.fn(),
  }),
}));

describe('useProfileViewModel', () => {
  it('should has props', () => {
    const { result } = renderHook(() => useProfileViewModel());

    expect(result.current.name).toBe('John');
    expect(result.current.email).toBe('john@doe.com');
    expect(typeof result.current.handleLogout).toBe('function');
  });
});
