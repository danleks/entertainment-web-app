import React, { useContext, useEffect } from 'react';
import Section from 'components/organisms/Section/Section';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { SearchContext } from 'providers/SearchProvider';
import { AppContext } from 'providers/AppProvider';

const Home = () => {
    const { media, searchResult } = useContext(AppContext);

    const trendingMedia = media.filter((item) => item.isTrending);
    const recommendedMedia = media.filter((item) => !item.isTrending);

    return (
        <ViewWrapper>
            {searchResult.length === 0 ? <Section media={trendingMedia} trending /> : null}
            <Section media={searchResult.length > 0 ? searchResult : recommendedMedia} />
        </ViewWrapper>
    );
};

export default Home;
