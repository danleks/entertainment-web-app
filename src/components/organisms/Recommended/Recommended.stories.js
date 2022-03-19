import React from 'react';

import Recommended from './Recommended';

export default {
    title: 'Components/Organisms/Recommended',
    component: Recommended,
};

const Template = (args) => <Recommended {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
