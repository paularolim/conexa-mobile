import { act, renderHook, waitFor } from '@testing-library/react-native';

import { useCreateAppointmentViewModel } from '@screens/CreateAppointment';

jest.mock('@hooks/useCreateAppointment', () => ({
  useCreateAppointment: () => ({
    fetchCreateAppointment: jest.fn(),
    error: false,
    loading: false,
  }),
}));

describe('useCreateAppointmentViewModel', () => {
  it('should return default props', () => {
    const { result } = renderHook(() => useCreateAppointmentViewModel());

    expect(result.current.errorMessage).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.handleDismissKeyboard).toBeTruthy();
    expect(result.current.onSubmit).toBeTruthy();
  });

  it('should call handleDismissKeyboard', async () => {
    const { result } = renderHook(() => useCreateAppointmentViewModel());

    act(() => {
      result.current.handleDismissKeyboard();
    });

    await waitFor(() => {
      expect(result.current.handleDismissKeyboard).toBeTruthy();
    });
  });
});
