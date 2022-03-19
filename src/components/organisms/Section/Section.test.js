import Section from './Section';
import { render, screen } from 'test-utils';

const string = 'Recommended for you';

describe('Section', () => {
    it('renders the component', () => {
        render(<Section title={string} />);
        screen.getByText(string);
    });
});
