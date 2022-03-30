import { rest } from 'msw';

import { media } from 'mocks/data/media';

export const handlers = [
    rest.post('/media', (req, res, ctx) => {
        const { trending, movie, tvseries, bookmark } = req.body;
        const matchingMedia = media.filter((item) => {
            return (
                (trending && item.isTrending) ||
                (movie && tvseries && item) ||
                (movie && item.category === 'Movie') ||
                (tvseries && item.category === 'TV Series') ||
                (bookmark && item.isBookmarked)
            );
        });
        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
    rest.post('/search', (req, res, ctx) => {
        const matchingMedia =
            req.body.searchValue.length > 0 ? media.filter((item) => item.title.toLowerCase().includes(req.body.searchValue.toLowerCase())) : [];
        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
];
