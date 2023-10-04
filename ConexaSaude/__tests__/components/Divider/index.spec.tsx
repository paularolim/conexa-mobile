import renderer from 'react-test-renderer';

import { Divider } from '@components/Divider';

import { Wrapper } from '../../Wrapper';

describe('Divider component', () => {
  it('should render default component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Divider />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
