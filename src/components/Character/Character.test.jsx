import {screen, render} from '@testing-library/react';
import Character from './Character';

it('should display the Character component', () => {

  const {container} = render(<Character />);
  expect(container).toMatchSnapshot();
  
});