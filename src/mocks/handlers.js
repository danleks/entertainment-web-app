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
        const { item } = req.body;
        if (item === null) return res(ctx.status(200), ctx.delay(100), ctx.json({ media }));

        let index = media.findIndex((i) => i.title === item.title);
        media[index].isBookmarked = !media[index].isBookmarked;
        return res(ctx.status(200), ctx.delay(100), ctx.json({ media }));
    }),
    rest.post('/search', (req, res, ctx) => {
        const { pathname, inputValue } = req.body;
        const searchRegex = new RegExp(inputValue, 'gi');
        const matchingMedia = inputValue
            ? media.filter((item) => {
                  switch (pathname) {
                      case PATH_NAME.movies:
                          return item.category === CATEGORY.movie && item.title.match(searchRegex);
                      case PATH_NAME.tvseries:
                          return item.category === CATEGORY.tvseries && item.title.match(searchRegex);
                      case PATH_NAME.bookmarks:
                          return item.isBookmarked && item.title.match(searchRegex);
                      default:
                          return item.title.match(searchRegex);
                  }
              })
            : [];

        return res(ctx.status(200), ctx.delay(300), ctx.json({ media: matchingMedia }));
    }),
];
