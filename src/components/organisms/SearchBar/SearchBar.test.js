import SearchBar from './SearchBar';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from 'test-utils';
import { handlers } from 'mocks/handlers';

const placeholderText = 'Search for movies or TV series';

const server = setupServer(...handlers);

describe('Search Bar tests', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('renders the component', () => {
        render(<SearchBar placeholder={placeholderText} />);
        const input = screen.getByPlaceholderText('Search for movies or TV series');
        expect(input).toBeInTheDocument();
    });
    it('shows results', async () => {
        render(<SearchBar placeholder={placeholderText} />);
        fireEvent.change(screen.getByPlaceholderText(placeholderText), { target: { value: 'the' } });
        await screen.findByText('The Great Lands');
    });
    it('shows results and updates input value', async () => {
        render(<SearchBar placeholder={placeholderText} />);
        fireEvent.change(screen.getByPlaceholderText(placeholderText), { target: { value: 'The Great Lands' } });
        fireEvent.click(await screen.findByText('The Great Lands'));
        expect(screen.getByPlaceholderText(placeholderText).value).toBe('The Great Lands');
    });
});
