import Section from 'components/organisms/Section/Section';
import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const TVSeries = ({ media, handleBookmarks }) => {
    const movies = media.filter((item) => item.category === 'TV Series');

    return (
        <ViewWrapper>
            <Section media={movies} handleBookmarks={handleBookmarks} />
        </ViewWrapper>
    );
};

export default TVSeries;
