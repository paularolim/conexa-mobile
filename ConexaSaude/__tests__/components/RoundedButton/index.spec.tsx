import renderer from 'react-test-renderer';

import { Icon } from '@components/Icon';
import { RoundedButton } from '@components/RoundedButton';

import { Wrapper } from '../../Wrapper';

describe('RoundedButton component', () => {
  it('should render default component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <RoundedButton>
            <Icon name="plus" width={32} height={32} />
          </RoundedButton>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
