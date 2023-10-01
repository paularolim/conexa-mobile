import renderer from 'react-test-renderer';

import { Text } from '@components/Text';

import { Wrapper } from '../../Wrapper';

describe('Button component', () => {
  it('should render default component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Text>Button component</Text>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
