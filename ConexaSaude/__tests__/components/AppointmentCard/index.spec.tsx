import renderer from 'react-test-renderer';

import { AppointmentCard } from '@components/AppointmentCard';

import { Wrapper } from '../../Wrapper';

describe('AppointmentCard component', () => {
  it('should render default component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <AppointmentCard date="2023-10-01 8:30" patient="Mocked Name" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
