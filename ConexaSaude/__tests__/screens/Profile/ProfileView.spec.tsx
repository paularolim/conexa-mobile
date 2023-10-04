import renderer from 'react-test-renderer';

import { ProfileView } from '@screens/Profile';

import { Wrapper } from '../../Wrapper';

describe('ProfileView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <ProfileView name="Dr. John Dow" email="johndoe@mail.com" handleLogout={jest.fn()} />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
