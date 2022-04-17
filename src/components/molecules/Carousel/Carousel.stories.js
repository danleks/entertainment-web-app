import { MSWProvider } from 'providers/MSWProvider';
import React from 'react';

import Carousel from './Carousel';

export default {
    title: 'Components/Molecules/Carousel',
    component: Carousel,
    decorators: [(story) => <MSWProvider>{story()}</MSWProvider>],
};

const Template = (args) => <Carousel {...args} />;

export const Trending = Template.bind({});
Carousel.args = {};
