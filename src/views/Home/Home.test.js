import Home from './Home';
import { render, screen } from 'test-utils';

describe('Home', () => {
    it('renders the component', () => {
        render(<Home />);
        screen.getByText('The Great Lands');
    });
});
