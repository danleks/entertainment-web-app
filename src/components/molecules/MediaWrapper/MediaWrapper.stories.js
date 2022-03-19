import React from 'react';

import MediaWrapper from './MediaWrapper';

export default {
    title: 'Components/Molecules/MediaWrapper',
    component: MediaWrapper,
};

const Template = (args) => <MediaWrapper {...args} />;

export const Wrapper = Template.bind({});

Wrapper.args = {
    trending: false,
    children: 'hello world',
};
