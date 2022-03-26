import { render, screen } from 'test-utils';
import MainTemplate from './MainTemplate';

describe('MainTemplate tests', () => {
    it('renders main template component', () => {
        render(<MainTemplate />);
        screen.getByPlaceholderText('Search for movies or TV series');
        screen.getByTestId('movies');
    });
});
