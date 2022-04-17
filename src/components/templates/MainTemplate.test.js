import { render, screen } from 'test-utils';
import MainTemplate from './MainTemplate';

const Component = () => {
    return <h1>Hello World</h1>;
};

describe('MainTemplate tests', () => {
    it('renders main template component', () => {
        render(
            <MainTemplate>
                <Component />
            </MainTemplate>,
        );
        screen.getByPlaceholderText('Search for movies or TV series');
        screen.getByTestId('movies');
    });
});
