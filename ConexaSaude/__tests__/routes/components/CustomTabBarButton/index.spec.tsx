import renderer from 'react-test-renderer';

import { CustomTabBarButton } from '@routes/components/CustomTabBarButton';

import { Wrapper } from '../../../Wrapper';

describe('CustomTabBarButton component', () => {
  it('should render component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <CustomTabBarButton />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
