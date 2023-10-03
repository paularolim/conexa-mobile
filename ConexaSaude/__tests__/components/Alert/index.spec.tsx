import renderer from 'react-test-renderer';

import { Alert } from '@components/Alert';

import { Wrapper } from '../../Wrapper';

describe('Alert component', () => {
  it('should render component with type="error" correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Alert type="error" message="Error message" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render component with type="warning" correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Alert type="warning" message="Warning message" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
