import { rest } from 'msw';

import { media } from 'mocks/data/media';

export const handlers = [
    rest.get('/media', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ media }));
    }),
];
