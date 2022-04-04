import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import Section from 'components/organisms/Section/Section';
import React from 'react';

const Movies = ({ media, handleBookmarks }) => {
    const movies = media.filter((item) => item.category === 'Movie');

    return (
        <ViewWrapper>
            <Section media={movies} handleBookmarks={handleBookmarks} />
        </ViewWrapper>
    );
};

export default Movies;
