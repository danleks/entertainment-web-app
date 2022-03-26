import { setupServer } from 'msw/node';
import Section from './Section';
import { render, screen } from 'test-utils';
import { handlers } from 'mocks/handlers';

const server = setupServer(...handlers);

describe('Section tests', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('renders basic section component', async () => {
        const title = 'Recommended for you';
        render(<Section title={title} />);
        screen.getByText(title);
        await screen.findByText('The Great Lands');
    });
    it('renders trending section component', async () => {
        const title = 'Trending';
        render(<Section trending title={title} />);
        screen.getByText(title);
        await screen.findByText('Beyond Earth');
    });
});
