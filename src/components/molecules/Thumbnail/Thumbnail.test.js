import Thumbnail from './Thumbnail';
import { render, screen } from 'test-utils';

const item = {
    title: 'Beyond Earth',
    thumbnail: {
        trending: {
            small: require('assets/images/thumbnails/beyond-earth/trending/small.jpg'),
            large: require('assets/images/thumbnails/beyond-earth/trending/large.jpg'),
        },
        regular: {
            small: require('assets/images/thumbnails/beyond-earth/regular/small.jpg'),
            medium: require('assets/images/thumbnails/beyond-earth/regular/medium.jpg'),
            large: require('assets/images/thumbnails/beyond-earth/regular/large.jpg'),
        },
    },
    year: 2019,
    category: 'Movie',
    rating: 'PG',
    isBookmarked: false,
    isTrending: true,
};

describe('Thumbnail', () => {
    it('renders trending thumbnail component', async () => {
        await render(<Thumbnail trending item={item} />);
        screen.getByText('Beyond Earth');
    });
    // it('renders basic thumbnail component', () => {
    //     render(<Thumbnail item={item} />);
    //     screen.getByText('Beyond Earth');
    // });
});
