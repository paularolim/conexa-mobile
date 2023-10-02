import renderer from 'react-test-renderer';

import { Icon } from '@components/Icon';

import { Wrapper } from '../../Wrapper';

describe('Icon component', () => {
  it('should render Calendar component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="calendar" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EyeOff component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="eye-off" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render EyeOn component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="eye-on" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render House component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="house" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Plus component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="plus" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render User component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="user" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render SignOut component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Icon name="sign-out" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
