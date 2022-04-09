import Section from 'components/organisms/Section/Section';
import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Bookmarks = ({ media, handleBookmarks }) => {
    const movieBookmarks = media.filter((item) => item.isBookmarked && item.category === 'Movie');
    const tvSeriesBookmarks = media.filter((item) => item.isBookmarked && item.category === 'TV Series');
    return (
        <ViewWrapper>
            {movieBookmarks.length > 0 ? <Section media={movieBookmarks} handleBookmarks={handleBookmarks} /> : null}
            {tvSeriesBookmarks.length > 0 ? <Section media={tvSeriesBookmarks} handleBookmarks={handleBookmarks} /> : null}
        </ViewWrapper>
    );
};

export default Bookmarks;
