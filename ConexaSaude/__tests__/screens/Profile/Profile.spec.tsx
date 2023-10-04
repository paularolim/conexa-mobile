import renderer from 'react-test-renderer';

import { Profile } from '@screens/Profile';

import { Wrapper } from '../../Wrapper';

jest.mock('@screens/Profile/useProfileViewModel', () => ({ useProfileViewModel: jest.fn() }));

describe('Profile', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Profile />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
