import Section from 'components/organisms/Section/Section';
import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { AppContext } from 'providers/AppProvider';

const Bookmarks = () => {
    const { media } = useContext(AppContext);
    const movieBookmarks = media.filter((item) => item.isBookmarked && item.category === 'Movie');
    const tvSeriesBookmarks = media.filter((item) => item.isBookmarked && item.category === 'TV Series');
    return (
        <ViewWrapper>
            {movieBookmarks.length > 0 ? <Section bookmarkedMovie /> : null}
            {tvSeriesBookmarks.length > 0 ? <Section bookmarkedTVSeries /> : null}
        </ViewWrapper>
    );
};

export default Bookmarks;
