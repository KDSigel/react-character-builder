import {render} from '@testing-library/react';
import Display from './Display';

it('renders display and looks at html stuff', () => {

    const {container} = render(<Display allCatchphrases={['sup?', 'nah.', 'Why Now?']} />)
    expect(container).toMatchSnapshot();
}
)