import React from 'react';
import { MSWProvider } from 'providers/MSWProvider';

import SearchBar from './SearchBar';

export default {
    title: 'Components/Organisms/SearchBar',
    component: SearchBar,
    decorators: [(story) => <MSWProvider>{story()}</MSWProvider>],
};

const Template = (args) => <SearchBar {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    placeholder: 'Search for movies or TV series',
};
