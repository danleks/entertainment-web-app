import React from 'react';

import Thumbnail from './Thumbnail';

export default {
    title: 'Components/Molecules/Thumbnail',
    component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const Trending = Template.bind({});
Trending.args = {
    trending: true,
};
export const Primary = Template.bind({});
Primary.args = {
    treding: false,
};
