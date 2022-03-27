import { rest } from 'msw';

import { media } from 'mocks/data/media';

export const handlers = [
    rest.post('/media', (req, res, ctx) => {
        const matchingMedia = media.filter((item) => item.isTrending === req.body.trending);
        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
    rest.post('/search', (req, res, ctx) => {
        console.log(req.body.searchValue);
        const matchingMedia =
            req.body.searchValue.length > 0 ? media.filter((item) => item.title.toLowerCase().includes(req.body.searchValue.toLowerCase())) : [];
        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
];
