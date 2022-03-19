import SectionTitle from './SectionTitle';
import { render, screen } from 'test-utils';

const string = 'Recommended for you';

describe('Section Title', () => {
    it('renders the component', () => {
        render(<SectionTitle>{string}</SectionTitle>);
        screen.getByText(string);
    });
});
