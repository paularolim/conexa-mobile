import { act, renderHook } from '@testing-library/react-native';

import { NavigationType, RouteType, ScreenProps, useHomeViewModel } from '@screens/Home';

const createTestProps = (): unknown & ScreenProps => ({
  navigation: { navigate: jest.fn() } as unknown as NavigationType,
  route: {} as unknown as RouteType,
});
const props = createTestProps();

jest.mock('@hooks/useAuth', () => ({ useAuth: () => ({ name: 'John' }) }));
jest.mock('@hooks/useListAppointments', () => ({
  useListAppointments: () => ({
    getAppointments: jest.fn(() => Promise.resolve()),
    appointments: [],
    loading: true,
    error: false,
  }),
}));

describe('useHomeViewModel', () => {
  it('should return default props', () => {
    const { result } = renderHook(() => useHomeViewModel(props));

    expect(result.current.appointments).toEqual([]);
    expect(result.current.error).toBe(false);
    expect(result.current.handleCreateAppointment).toBeTruthy();
    expect(result.current.handlePressAppointment).toBeTruthy();
    expect(result.current.loading).toBe(true);
    expect(result.current.name).toBe('John');
    expect(result.current.onRefresh).toBeTruthy();
    expect(result.current.refreshing).toBe(false);
  });

  it('should call handleCreateAppointment', () => {
    const { result } = renderHook(() => useHomeViewModel(props));

    act(() => {
      result.current.handleCreateAppointment();
    });

    expect(props.navigation.navigate).toBeCalledWith('CreateAppointment');
  });

  it('should call handlePressAppointment', () => {
    const { result } = renderHook(() => useHomeViewModel(props));

    act(() => {
      result.current.handlePressAppointment(1);
    });

    expect(props.navigation.navigate).toBeCalledWith('Appointment', { id: 1 });
  });

  it('should call handlePressAppointment', async () => {
    const { result } = renderHook(() => useHomeViewModel(props));

    await act(async () => {
      await result.current.onRefresh();
    });

    expect(result.current.refreshing).toBe(false);
  });
});
