import { MSWProvider } from 'providers/MSWProvider';
import React from 'react';

import Section from './Section';

export default {
    title: 'Components/Organisms/Section',
    component: Section,
    decorators: [(story) => <MSWProvider>{story()}</MSWProvider>],
};

const Template = (args) => <Section {...args} />;

export const Recommended = Template.bind({});
Recommended.args = {
    title: 'Recommended for you',
};
