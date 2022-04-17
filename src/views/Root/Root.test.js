import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from 'test-utils';
import { handlers } from 'mocks/handlers';
import Root from './Root';

const server = setupServer(...handlers);

describe('Root tests', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('renders the root component', async () => {
        await render(<Root />);
        await screen.findByText('The Great Lands');
        fireEvent.click(await screen.findByTestId('movies'));
        // screen.getByText('home');
    });
});
