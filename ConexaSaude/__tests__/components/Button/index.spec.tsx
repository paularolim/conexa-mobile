import renderer from 'react-test-renderer';

import { Button } from '@components/Button';

import { Wrapper } from '../../Wrapper';

describe('Button component', () => {
  it('should render default component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Button>Button component</Button>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render type="ghost" component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Button type="ghost">Button component</Button>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
