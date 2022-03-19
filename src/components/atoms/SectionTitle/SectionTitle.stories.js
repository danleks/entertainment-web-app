import React from 'react';

import SectionTitle from './SectionTitle';

export default {
    title: 'Components/Atoms/SectionTitle',
    component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

export const Title = Template.bind({});
Title.args = {
    trending: false,
    children: 'Recommended for you',
};
