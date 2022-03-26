import { rest } from 'msw';

import { media } from 'mocks/data/media';

export const handlers = [
    rest.post('/media', (req, res, ctx) => {
        const matchingMedia = media.filter((item) => item.isTrending === req.body.trending);
        return res(ctx.status(200), ctx.json({ media: matchingMedia }));
    }),
];
