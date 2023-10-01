import renderer from 'react-test-renderer';

import { LoginView } from '@screens/Login/LoginView';

import { Wrapper } from '../../Wrapper';

describe('LoginView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <LoginView handleLogin={jest.fn()} handleDismissKeyboard={jest.fn()} />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
