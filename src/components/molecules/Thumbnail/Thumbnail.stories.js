import React from 'react';

import Thumbnail from './Thumbnail';

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

export default {
    title: 'Components/Molecules/Thumbnail',
    component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} item={item} />;

export const Trending = Template.bind({});
Trending.args = {
    trending: true,
};
export const Primary = Template.bind({});
Primary.args = {
    trending: false,
};
