import React from 'react';

import Section from './Section';

export default {
    title: 'Components/Organisms/Section',
    component: Section,
};

const Template = (args) => <Section {...args} />;

export const Trending = Template.bind({});
Trending.args = {
    trending: true,
    title: 'Trending',
};

export const Recommended = Template.bind({});
Recommended.args = {
    title: 'Recommended for you',
};
