import React from 'react';

import SearchBar from './SearchBar';

export default {
    title: 'Components/Organisms/SearchBar',
    component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    placeholder: 'Search for movies or TV series',
};

export const Filled = Template.bind({});
