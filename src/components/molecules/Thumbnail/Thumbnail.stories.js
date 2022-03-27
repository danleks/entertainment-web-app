import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const itemTrending = {
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

const itemPrimary = {
    title: 'During the Hunt',
    thumbnail: {
        regular: {
            small: require('assets/images/thumbnails/during-the-hunt/regular/small.jpg'),
            medium: require('assets/images/thumbnails/during-the-hunt/regular/medium.jpg'),
            large: require('assets/images/thumbnails/during-the-hunt/regular/large.jpg'),
        },
    },
    year: 2016,
    category: 'TV Series',
    rating: 'PG',
    isBookmarked: false,
    isTrending: false,
};

const Wrapper = styled.div`
    width: ${({ trending }) => (trending ? '24rem' : '16.4rem')};
    height: ${({ trending }) => (trending ? '14rem' : '11rem')};
    @media (min-width: 768px) {
        width: ${({ trending }) => (trending ? '47rem' : '22rem')};
        height: ${({ trending }) => (trending ? '23rem' : '14rem')};
    }
    @media (min-width: 1440px) {
        width: ${({ trending }) => (trending ? '47rem' : '28rem')};
        height: ${({ trending }) => (trending ? '23rem' : '17.4rem')};
    }
`;

export default {
    title: 'Components/Molecules/Thumbnail',
    component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const Trending = Template.bind({});
Trending.decorators = [
    (Story) => (
        <Wrapper trending>
            <Story />
        </Wrapper>
    ),
];
Trending.args = {
    trending: true,
    item: itemTrending,
};
export const Primary = Template.bind({});
Primary.decorators = [
    (Story) => (
        <Wrapper>
            <Story />
        </Wrapper>
    ),
];
Primary.args = {
    trending: false,
    item: itemPrimary,
};
