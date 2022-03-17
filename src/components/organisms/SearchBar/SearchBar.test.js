import SearchBar from './SearchBar';
import { render, screen } from 'test-utils';

const placeholderText = 'Search for movies or TV series';

describe('Search Bar', () => {
    it('renders the component', () => {
        render(<SearchBar placeholder={placeholderText} />);
        const input = screen.getByPlaceholderText('Search for movies or TV series');
        expect(input).toBeInTheDocument();
    });
});
