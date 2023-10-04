import { render, renderHook } from '@testing-library/react-native';
import { useForm } from 'react-hook-form';
import renderer from 'react-test-renderer';

import { LoginView } from '@screens/Login';

import { Wrapper } from '../../Wrapper';

describe('LoginView', () => {
  it('should render screen correctly', () => {
    const { result } = renderHook(() => useForm<{ email: string; password: string }>());

    const tree = renderer
      .create(
        <Wrapper>
          <LoginView
            control={result.current.control}
            onSubmit={jest.fn()}
            handleDismissKeyboard={jest.fn()}
            loading={false}
            errorMessage={null}
          />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render screen correctly when has error', () => {
    const { result } = renderHook(() => useForm<{ email: string; password: string }>());

    const { getByText } = render(
      <Wrapper>
        <LoginView
          control={result.current.control}
          onSubmit={jest.fn()}
          handleDismissKeyboard={jest.fn()}
          errorMessage="Error message"
          loading={false}
        />
      </Wrapper>,
    );
    expect(getByText('Error message')).toBeTruthy();
  });

  it('should render screen correctly when is loading', () => {
    const { result } = renderHook(() => useForm<{ email: string; password: string }>());

    const { getByTestId } = render(
      <Wrapper>
        <LoginView
          control={result.current.control}
          onSubmit={jest.fn()}
          handleDismissKeyboard={jest.fn()}
          loading
          errorMessage={null}
        />
      </Wrapper>,
    );
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });
});
