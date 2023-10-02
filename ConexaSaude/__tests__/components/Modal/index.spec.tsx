import renderer from 'react-test-renderer';

import { Modal } from '@components/Modal';

import { Wrapper } from '../../Wrapper';

describe('Modal component', () => {
  it('should render default component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Modal
            title="Modal title"
            description="Modal description"
            primaryButtonLabel="Primary Button Label"
            secondaryButtonLabel="Secondary Button Label"
            visible={false}
            dismissModal={jest.fn()}
            confirm={jest.fn()}
            cancel={jest.fn()}
          />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
