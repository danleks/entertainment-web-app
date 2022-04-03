import Section from 'components/organisms/Section/Section';
import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { SearchContext } from 'providers/SearchProvider';

const Bookmarks = () => {
    const { searchValue } = useContext(SearchContext);
    return (
        <ViewWrapper>
            <Section bookmark movie />
            <Section bookmark tvseries />
        </ViewWrapper>
    );
};

export default Bookmarks;
