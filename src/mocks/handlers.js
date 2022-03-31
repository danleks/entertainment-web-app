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
        const { trending, movie, tvseries, bookmark } = req.body;
        const matchingMedia = media.filter((item) => {
            return (
                (trending && item.isTrending) ||
                (movie && tvseries && item) ||
                (movie && item.category === CATEGORY.movie) ||
                (tvseries && item.category === CATEGORY.tvseries) ||
                (bookmark && item.isBookmarked)
            );
        });
        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
    rest.post('/search', (req, res, ctx) => {
        const { pathname, searchValue } = req.body;
        const searchRegex = new RegExp(searchValue, 'i');
        const matchingMedia =
            searchValue.length > 0
                ? pathname !== PATH_NAME.root
                    ? media
                          .filter(({ category, isBookmarked }) => {
                              return (
                                  (pathname === PATH_NAME.movies && category.match(/movie/gi)) ||
                                  (pathname === PATH_NAME.tvseries && category.match(/tv/gi)) ||
                                  (pathname === PATH_NAME.bookmarks && isBookmarked)
                              );
                          })
                          .filter(({ title }) => title.match(searchRegex))
                    : media.filter(({ title }) => title.match(searchRegex))
                : [];

        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
];
