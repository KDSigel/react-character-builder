
import {render} from '@testing-library/react';
import Controls from './Controls';

it('should render our Picker component', () => {

  const {container} = render(<Controls />);
  expect(container).toMatchSnapshot();

});