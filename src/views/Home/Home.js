import React, { useContext } from 'react';
import Section from 'components/organisms/Section/Section';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { SearchContext } from 'providers/SearchProvider';

const Home = ({ media, handleBookmarks }) => {
    const { searchValue } = useContext(SearchContext);

    const trendingMedia = media.filter((item) => item.isTrending);
    const recommendedMedia = media.filter((item) => !item.isTrending);

    return (
        <ViewWrapper>
            <Section media={trendingMedia} handleBookmarks={handleBookmarks} trending />
            <Section media={recommendedMedia} handleBookmarks={handleBookmarks} />
        </ViewWrapper>
    );
};

export default Home;
