import Home from './Home';
import { setupServer } from 'msw/node';
import { render, screen } from 'test-utils';
import { handlers } from 'mocks/handlers';

const server = setupServer(...handlers);

describe('Home tests', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('renders the home component', async () => {
        render(<Home />);
        await screen.findByText('Beyond Earth');
        await screen.findByText('The Great Lands');
    });
});
