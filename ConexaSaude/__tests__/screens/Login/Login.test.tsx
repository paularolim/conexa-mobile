import renderer from 'react-test-renderer';

import { Login } from '@screens/Login';

import { Wrapper } from '../../Wrapper';

jest.mock('@screens/Home/useHomeViewModel', () => ({ useLoginViewModel: jest.fn() }));

describe('Login', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Login />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
