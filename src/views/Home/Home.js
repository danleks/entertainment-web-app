import React, { useContext } from 'react';
import Section from 'components/organisms/Section/Section';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { SearchContext } from 'providers/SearchProvider';

const Home = () => {
    const { searchValue } = useContext(SearchContext);

    return (
        <ViewWrapper>
            {searchValue ? null : <Section isTrending />}
            <Section notIsTrending />
        </ViewWrapper>
    );
};

export default Home;
