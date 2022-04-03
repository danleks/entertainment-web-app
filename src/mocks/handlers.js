import { rest } from 'msw';

import { media } from 'mocks/data/media';

const PATH_NAME = {
    root: '/',
    movies: '/movies',
    tvseries: '/tv-series',
    bookmarks: '/bookmarks',
};

const CATEGORY = {
    movie: 'Movie',
    tvseries: 'TV Series',
};

export const handlers = [
    rest.post('/media', (req, res, ctx) => {
        const { props, searchValue } = req.body;
        console.log(props);
        const searchRegex = new RegExp(searchValue, 'gi');
        const matchingMedia = media.filter((item) => {
            return (
                (!props.bookmark && props.isTrending && item.isTrending && item.title.match(searchRegex)) ||
                (!props.bookmark && props.notIsTrending && !item.isTrending && item.title.match(searchRegex)) ||
                (!props.bookmark && props.movie && item.category === CATEGORY.movie && item.title.match(searchRegex)) ||
                (!props.bookmark && props.tvseries && item.category === CATEGORY.tvseries && item.title.match(searchRegex)) ||
                (props.bookmark && props.movie && item.isBookmarked && item.category === CATEGORY.movie && item.title.match(searchRegex)) ||
                (props.bookmark && props.tvseries && item.isBookmarked && item.category === CATEGORY.tvseries && item.title.match(searchRegex))
            );
        });
        return res(ctx.status(200), ctx.delay(100), ctx.json({ media: matchingMedia }));
    }),
    rest.post('/search', (req, res, ctx) => {
        const { pathname, searchValue } = req.body;
        const searchRegex = new RegExp(searchValue, 'gi');
        const matchingMedia = media.filter((item) => {
            return (
                (pathname === PATH_NAME.root && item.category.match(/movie/gi) && item.category.match(/tv/gi) && item.title.match(searchRegex)) ||
                (pathname === PATH_NAME.movies && item.category.match(/movie/gi) && item.title.match(searchRegex)) ||
                (pathname === PATH_NAME.tvseries && item.category.match(/tv/gi) && item.title.match(searchRegex)) ||
                (pathname === PATH_NAME.bookmarks && item.isBookmarked && item.title.match(searchRegex))
            );
        });

        return res(ctx.status(200), ctx.delay(300), ctx.json({ media: matchingMedia }));
    }),
];
