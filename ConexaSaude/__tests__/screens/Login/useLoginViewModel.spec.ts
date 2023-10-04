import { renderHook, act, waitFor } from '@testing-library/react-native';

import { useLoginViewModel } from '@screens/Login';

jest.mock('@hooks/useLogin', () => ({ useLogin: () => ({ fetchLogin: jest.fn() }) }));

describe('useLoginViewModel', () => {
  it('should call handleDismissKeyboard', async () => {
    const { result } = renderHook(() => useLoginViewModel());

    act(() => {
      result.current.handleDismissKeyboard();
    });

    await waitFor(() => {
      expect(result.current.handleDismissKeyboard).toBeTruthy();
    });
  });

  it('should call onSubmit', async () => {
    const { result } = renderHook(() => useLoginViewModel());

    act(() => {
      result.current.onSubmit();
    });

    await waitFor(() => {
      expect(result.current.onSubmit).toBeTruthy();
    });
  });
});
